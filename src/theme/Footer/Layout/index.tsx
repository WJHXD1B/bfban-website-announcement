import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import type {Props} from '@theme/Footer/Layout';
import Translate from "@docusaurus/Translate";

const badges = [
    'https://github.com/BFBAN/bfban-website-announcement/actions/workflows/deploy.yml/badge.svg?branch=main',
    'https://img.shields.io/github/contributors/bfban/bfban-website-announcement'
];

export default function FooterLayout({
                                         style,
                                         links
                                     }: Props): ReactNode {
    return (
        <footer
            className={clsx('footer', {
                'footer--dark': style === 'dark',
            })}>
            <div className=" container container-fluid">
                <div className="row">
                    <div className="col-12 col-lg-3 col-sm-12">
                        <p>
                            <a href='https://bfban.com'>
                                <img height='40px' src='https://bfban.com/assets/img/friendly-web.16e0cc25.png'/>
                            </a>
                        </p>
                        <p><span className="fw-bold">©Bfban Website Announcement</span> <br/><span
                            className="opacity-50 fw-light">2022-{new Date().getFullYear()}</span></p>
                        <p className="fs-6 opacity-50">
                            <Translate id="footer.build-description"></Translate>
                        </p>
                    </div>
                    <div className="col-6 col-lg-7 col-sm-12">
                        {links}
                    </div>
                    <div className="col-12 col-lg-2 col-sm-12">
                        <p>
                            <iframe src="https://status.bfban.com/badge"
                                    frameBorder={0}
                                    scrolling="no" width='100%' height='30px'></iframe>
                        </p>
                        {badges.map((i) => (<img key={i} src={i}/>))}
                        <div className="mt-2">
                            <a href="https://pages.cloudflare.com/">
                                <img className="border rounded-2"
                                     height="40"
                                     src="https://bfban.com/images/links/cloudflare-pages.svg"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
