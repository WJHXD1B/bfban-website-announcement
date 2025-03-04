import React, {type ReactNode} from 'react';
import {useThemeConfig, ErrorCauseBoundary} from '@docusaurus/theme-common';
import {
    splitNavbarItems,
    useNavbarMobileSidebar,
} from '@docusaurus/theme-common/internal';
import {type Props as NavbarItemConfig} from '@theme/NavbarItem';
import NavbarItem from "../../NavbarItem"
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import SearchBar from '@theme/SearchBar';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';
import NavbarLogo from '@theme/Navbar/Logo';
import NavbarSearch from '../Search';

import styles from './styles.module.css';
import Link from "@docusaurus/Link";

function useNavbarItems() {
    // TODO temporary casting until ThemeConfig type is improved
    return useThemeConfig().navbar.items as NavbarItemConfig[];
}

function NavbarItems({items}: { items: NavbarItemConfig[] }): ReactNode {
    return (
        <>
            {items.map((item, i) => (
                <ErrorCauseBoundary
                    key={i}
                    onError={(error) =>
                        new Error(
                            `A theme navbar item failed to render.
Please double-check the following navbar item (themeConfig.navbar.items) of your Docusaurus config:
${JSON.stringify(item, null, 2)}`,
                            {cause: error},
                        )
                    }>
                    <NavbarItem {...item} />
                </ErrorCauseBoundary>
            ))}
        </>
    );
}

function NavbarContentLayout({
                                 left,
                                 center,
                                 right,
                             }: {
    left: ReactNode;
    center?: ReactNode;
    right: ReactNode;
}) {
    return (
        <div className="navbar__inner">
            <div className="navbar__items">{left}</div>
            <div className="navbar__items">{center}</div>
            <div className="navbar__items navbar__items--right">{right}</div>
        </div>
    );
}

export default function NavbarContent(): ReactNode {
    const mobileSidebar = useNavbarMobileSidebar();

    const items = useNavbarItems();
    const [leftItems, rightItems] = splitNavbarItems(items);

    const searchBarItem = items.find((item) => item.type === 'search');

    return (
        <NavbarContentLayout
            left={
                // TODO stop hardcoding items?
                <>
                    {!mobileSidebar.disabled && <NavbarMobileSidebarToggle/>}
                    <NavbarLogo/>
                    <NavbarItems items={leftItems}/>
                </>
            }
            right={
                // TODO stop hardcoding items?
                // Ask the user to add the respective navbar items => more flexible
                <>
                    {!searchBarItem && (
                        <NavbarSearch>
                            <SearchBar />
                        </NavbarSearch>
                    )}
                    <NavbarItems items={rightItems}/>
                    <NavbarColorModeToggle className={styles.colorModeToggle}/>
                    <Link href="//bfban.com/apps" className="navbar__item navbar__link">
                        <i className="fs-5 bi bi-grid-3x3-gap-fill"></i>
                    </Link>
                </>
            }
        />
    );
}
