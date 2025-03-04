import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {useWindowSize} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import DocItemPaginator from '@theme/DocItem/Paginator';
import DocVersionBanner from '@theme/DocVersionBanner';
import DocVersionBadge from '@theme/DocVersionBadge';
import DocItemFooter from '../Footer';
import DocItemTOCMobile from '@theme/DocItem/TOC/Mobile';
import DocItemTOCDesktop from '@theme/DocItem/TOC/Desktop';
import DocItemContent from '@theme/DocItem/Content';
import DocBreadcrumbs from '../../DocBreadcrumbs';
import ContentVisibility from '@theme/ContentVisibility';
import type {Props} from '@theme/DocItem/Layout';

import styles from './styles.module.css';
import DocItemMetadata from "@site/src/theme/DocItem/Metadata";

/**
 * Decide if the toc should be rendered, on mobile or desktop viewports
 */
function useDocTOC() {
    const {frontMatter, toc} = useDoc();
    const windowSize = useWindowSize();

    const hidden = frontMatter.hide_table_of_contents;
    const canRender = !hidden && toc.length > 0;

    const mobile = canRender ? <DocItemTOCMobile/> : undefined;

    const desktop =
        canRender && (windowSize === 'desktop' || windowSize === 'ssr') ? (
            <DocItemTOCDesktop/>
        ) : undefined;

    return {
        hidden,
        mobile,
        desktop,
    };
}

export default function DocItemLayout({children}: Props): ReactNode {
    const docTOC = useDocTOC();
    const {metadata} = useDoc();
    return (
        <div className="row mb-5">
            <div className={clsx('col p-0', !docTOC.hidden && styles.docItemCol)}>
                <ContentVisibility metadata={metadata}/>
                <DocVersionBanner/>
                <DocBreadcrumbs/>
                <div className={styles.docItemContainer}>
                    <DocVersionBadge/>
                    {docTOC.mobile}
                    <article className="card h-100 overflow-hidden rounded-2 p-sm-4 p-lg-5 p-4">
                        <DocItemContent>{children}</DocItemContent>
                        <DocItemFooter/>
                    </article>
                </div>
            </div>
            {docTOC.desktop && <div className="col col--3">{docTOC.desktop}</div>}
        </div>
    );
}
