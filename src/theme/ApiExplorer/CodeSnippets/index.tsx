/* ============================================================================
 * Copyright (c) Palo Alto Networks
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * ========================================================================== */

import React, {useState, useEffect} from 'react';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ApiCodeBlock from '@theme/ApiExplorer/ApiCodeBlock';
import buildPostmanRequest from '@theme/ApiExplorer/buildPostmanRequest';
import CodeTabs from '@theme/ApiExplorer/CodeTabs';
import {useTypedSelector} from '@theme/ApiItem/hooks';
import codegen from 'postman-code-generators';
import sdk from 'postman-collection';

import {CodeSample, Language} from './code-snippets-types';
import {
  getCodeSampleSourceFromLanguage,
  mergeArraysbyLanguage,
  mergeCodeSampleLanguage,
  generateLanguageSet,
} from './languages';

export const languageSet: Language[] = generateLanguageSet();

export interface Props {
  postman: sdk.Request;
  codeSamples: CodeSample[];
}

function CodeTab({children, hidden, className}: any): JSX.Element {
  return (
    <div role="tabpanel" className={className} {...{hidden}}>
      {children}
    </div>
  );
}

function CodeSnippets({postman, codeSamples}: Props) {
  const {siteConfig} = useDocusaurusContext();

  const contentType = useTypedSelector((state: any) => state.contentType.value);
  const accept = useTypedSelector((state: any) => state.accept.value);
  const server = useTypedSelector((state: any) => state.server.value);
  const body = useTypedSelector((state: any) => state.body);

  const pathParams = useTypedSelector((state: any) => state.params.path);
  const queryParams = useTypedSelector((state: any) => state.params.query);
  const cookieParams = useTypedSelector((state: any) => state.params.cookie);
  const headerParams = useTypedSelector((state: any) => state.params.header);

  const auth = useTypedSelector((state: any) => state.auth);

  // User-defined languages array
  // Can override languageSet, change order of langs, override options and variants
  const userDefinedLanguageSet =
    (siteConfig?.themeConfig?.languageTabs as Language[] | undefined) ??
    languageSet;

  // Filter languageSet by user-defined langs
  const filteredLanguageSet = languageSet.filter((ls) => {
    return userDefinedLanguageSet?.some((lang) => {
      return lang.language === ls.language;
    });
  });

  // Merge user-defined langs into languageSet
  const mergedLangs = mergeCodeSampleLanguage(
    mergeArraysbyLanguage(userDefinedLanguageSet, filteredLanguageSet),
    codeSamples,
  );

  // Read defaultLang from localStorage
  const defaultLang: Language[] = mergedLangs.filter(
    (lang) =>
      lang.language === localStorage.getItem('docusaurus.tab.code-samples'),
  );
  const [selectedVariant, setSelectedVariant] = useState<string | undefined>();
  const [selectedSample, setSelectedSample] = useState<string | undefined>();
  const [language, setLanguage] = useState(() => {
    // Return first index if only 1 user-defined language exists
    if (mergedLangs.length === 1) {
      return mergedLangs[0];
    }
    // Fall back to language in localStorage or first user-defined language
    return defaultLang[0] ?? mergedLangs[0];
  });
  const [codeText, setCodeText] = useState<string>('');
  const [codeSampleCodeText, setCodeSampleCodeText] = useState<
    string | (() => string)
  >(() => getCodeSampleSourceFromLanguage(language));

  useEffect(() => {
    if (language && !!language.sample) {
      setCodeSampleCodeText(getCodeSampleSourceFromLanguage(language));
    }

    if (language && !!language.options && language.language !== 'typescript') {
      const postmanRequest = buildPostmanRequest(postman, {
        queryParams,
        pathParams,
        cookieParams,
        contentType,
        accept,
        headerParams,
        body,
        server,
        auth,
      });
      codegen.convert(
        language.language,
        language.variant,
        postmanRequest,
        language.options,
        (error: any, snippet: string) => {
          if (error) {
            return;
          }
          setCodeText(snippet);
        },
      );
    } else if (language && !language.options) {
      const langSource = mergedLangs.filter(
        (lang) => lang.language === language.language,
      );

      // Merges user-defined language with default languageSet
      // This allows users to define only the minimal properties necessary in languageTabs
      // User-defined properties should override languageSet properties
      const mergedLanguage = {...langSource[0], ...language};
      const postmanRequest = buildPostmanRequest(postman, {
        queryParams,
        pathParams,
        cookieParams,
        contentType,
        accept,
        headerParams,
        body,
        server,
        auth,
      });

      codegen.convert(
        mergedLanguage.language,
        mergedLanguage.variant,
        postmanRequest,
        mergedLanguage.options,
        (error: any, snippet: string) => {
          if (error) {
            return;
          }
          setCodeText(snippet);
        },
      );
    } else {
      setCodeText('');
    }
  }, [
    accept,
    body,
    contentType,
    cookieParams,
    headerParams,
    language,
    pathParams,
    postman,
    queryParams,
    server,
    auth,
    mergedLangs,
  ]);
  // no dependencies was intentionlly set for this particular hook. it's safe as long as if conditions are set
  useEffect(function onSelectedVariantUpdate() {
    if (selectedVariant && selectedVariant !== language?.variant) {
      const postmanRequest = buildPostmanRequest(postman, {
        queryParams,
        pathParams,
        cookieParams,
        contentType,
        accept,
        headerParams,
        body,
        server,
        auth,
      });
      codegen.convert(
        language.language,
        selectedVariant,
        postmanRequest,
        language.options,
        (error: any, snippet: string) => {
          if (error) {
            return;
          }
          setCodeText(snippet);
        },
      );
    }
  });

  // no dependencies was intentionlly set for this particular hook. it's safe as long as if conditions are set
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(function onSelectedSampleUpdate() {
    if (
      language &&
      language.samples &&
      language.samplesSources &&
      selectedSample &&
      selectedSample !== language.sample
    ) {
      const sampleIndex = language.samples.findIndex(
        (smp) => smp === selectedSample,
      );
      setCodeSampleCodeText(language.samplesSources[sampleIndex]);
    }
  });

  if (language === undefined) {
    return null;
  }

  return (
    <>
      {/* Outer language tabs */}
      <CodeTabs
        groupId="code-samples"
        action={{
          setLanguage: setLanguage,
          setSelectedVariant: setSelectedVariant,
          setSelectedSample: setSelectedSample,
        }}
        languageSet={mergedLangs}
        defaultValue={defaultLang[0]?.language ?? mergedLangs[0].language}
        lazy>
        {mergedLangs.map((lang) => {
          return (
            <CodeTab
              value={lang.language}
              label={
                <>
                  {lang.tag !== 'sailpoint-sdk' && lang.language}

                  {/* If the language has the 'sailpoint-sdk' tag, display the special badge */}
                  {lang.tag === 'sailpoint-sdk' && (
                    <span
                      className="sailpoint-sdk-badge"
                      style={{
                        display: 'inline-block', // Change to inline-block for stacking
                        fontSize: '12px', // Optional: Adjust font size for lang.language (e.g., "go")
                        textAlign: 'center', // Ensure content is horizontally centered
                        width: '100%', // Ensure the container takes up full width to allow centering
                      }}>
                      {/* Display lang.language */}
                      <div>{lang.language}</div>

                      {/* Display the 'SailPoint SDK' badge */}
                      <div>
                        <span
                          style={{
                            marginTop: '5px', // Space between language and tag
                            backgroundColor: '#df61ca',
                            color: 'white',
                            padding: '2px 8px',
                            borderRadius: '12px',
                            fontSize: '8px',
                          }}>
                          SailPoint SDK
                        </span>
                      </div>
                    </span>
                  )}
                </>
              }
              key={lang.language}
              attributes={{
                className: `openapi-tabs__code-item--${lang.logoClass}`,
              }}>
              {/* Merged CodeTabs for both samples and variants */}
              {((lang.samples && lang.samples.length > 0) ||
                (lang.variants && lang.variants.length > 0)) && (
                <CodeTabs
                  className="openapi-tabs__code-container-inner"
                  action={{
                    setLanguage: setLanguage,
                    setSelectedSample: setSelectedSample,
                    setSelectedVariant: setSelectedVariant,
                  }}
                  includeSample={true}
                  includeVariant={true}
                  currentLanguage={lang.language}
                  defaultValue={selectedSample || selectedVariant} // Set default value based on whichever is selected
                  languageSet={mergedLangs}
                  lazy>
                  {/* Render Sample Tabs */}
                  {lang.samples &&
                    lang.samples.map((sample, index) => {
                      return (
                        <CodeTab
                          value={sample}
                          label={
                            lang.samplesLabels
                              ? lang.samplesLabels[index].slice(0, 3)
                              : sample
                          }
                          key={`${lang.language}-sample-${index}`} // Unique key for each sample
                          attributes={{
                            className: `openapi-tabs__code-item--sample`,
                          }}>
                          <p>
                            <a
                              href={`https://developer.sailpoint.com/docs/${
                                lang.samplesLabels
                                  ? lang.samplesLabels[index].slice(4)
                                  : ''
                              }`} // Add everything after the first 4 characters
                              target="_blank"
                              rel="noopener noreferrer"
                              className="sample-doc-link">
                              View SDK Reference
                            </a>
                          </p>

                          {/* @ts-ignore */}
                          <ApiCodeBlock
                            language={lang.highlight}
                            className="openapi-explorer__code-block"
                            showLineNumbers={true}>
                            {codeSampleCodeText}
                          </ApiCodeBlock>
                        </CodeTab>
                      );
                    })}

                  {/* Render Variant Tabs */}
                  {lang.variants &&
                    lang.variants.map((variant, index) => {
                      return (
                        <CodeTab
                          value={variant.toLowerCase()}
                          label={variant.toUpperCase()}
                          key={`${lang.language}-variant-${index}`} // Unique key for each variant
                          attributes={{
                            className: `openapi-tabs__code-item--variant`,
                          }}>
                          {/* @ts-ignore */}
                          <ApiCodeBlock
                            language={lang.highlight}
                            className="openapi-explorer__code-block"
                            showLineNumbers={true}>
                            {codeText}
                          </ApiCodeBlock>
                        </CodeTab>
                      );
                    })}
                </CodeTabs>
              )}
            </CodeTab>
          );
        })}
      </CodeTabs>
    </>
  );
}

export default CodeSnippets;
