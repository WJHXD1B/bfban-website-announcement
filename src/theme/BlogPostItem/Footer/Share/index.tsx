import {
    EmailIcon, EmailShareButton,
    FacebookIcon,
    FacebookShareButton,
    RedditIcon, RedditShareButton,
    TelegramIcon, TelegramShareButton,
    TwitterShareButton, WeiboIcon,
    WeiboShareButton, WhatsappIcon, WhatsappShareButton,
    XIcon
} from "react-share";
import createIcon from './hocs/createIcon';
import React, {type ReactNode} from "react";
import clsx from "clsx";
import {ThemeClassNames} from "@docusaurus/theme-common";
import BiliBiliShareButton from "@site/src/theme/BlogPostItem/Footer/Share/BiliBiliShareButton";
import BrowserOnly from "@docusaurus/BrowserOnly";

const BiliBiliIcon = createIcon({
    color: '#fb7299',
    networkName: 'bilibili',
    transform: 'translate(13, 13.5) scale(2)',
    path: "M3.73252 2.67094C3.33229 2.28484 3.33229 1.64373 3.73252 1.25764C4.11291 0.890684 4.71552 0.890684 5.09591 1.25764L7.21723 3.30403C7.27749 3.36218 7.32869 3.4261 7.37081 3.49407H10.5789C10.6211 3.4261 10.6723 3.36218 10.7325 3.30403L12.8538 1.25764C13.2342 0.890684 13.8368 0.890684 14.2172 1.25764C14.6175 1.64373 14.6175 2.28484 14.2172 2.67094L13.364 3.49407H14C16.2091 3.49407 18 5.28493 18 7.49407V12.9996C18 15.2087 16.2091 16.9996 14 16.9996H4C1.79086 16.9996 0 15.2087 0 12.9996V7.49406C0 5.28492 1.79086 3.49407 4 3.49407H4.58579L3.73252 2.67094ZM4 5.42343C2.89543 5.42343 2 6.31886 2 7.42343V13.0702C2 14.1748 2.89543 15.0702 4 15.0702H14C15.1046 15.0702 16 14.1748 16 13.0702V7.42343C16 6.31886 15.1046 5.42343 14 5.42343H4ZM5 9.31747C5 8.76519 5.44772 8.31747 6 8.31747C6.55228 8.31747 7 8.76519 7 9.31747V10.2115C7 10.7638 6.55228 11.2115 6 11.2115C5.44772 11.2115 5 10.7638 5 10.2115V9.31747ZM12 8.31747C11.4477 8.31747 11 8.76519 11 9.31747V10.2115C11 10.7638 11.4477 11.2115 12 11.2115C12.5523 11.2115 13 10.7638 13 10.2115V9.31747C13 8.76519 12.5523 8.31747 12 8.31747Z",
});

export default function ShareWidget(): ReactNode {
    const shareIconSize = 30;

    return (
        <div
            className={clsx(
                'row',
                'margin-top--sm',
                ThemeClassNames.blog.blogFooterEditMetaRow,
            )}>
            <BrowserOnly>
                {() => (
                    <div className="col" style={{marginLeft: '-5px'}}>
                        <FacebookShareButton url={window.location.href} hashtag="#docusaurus" className="p-1">
                            <FacebookIcon size={shareIconSize} round/>
                        </FacebookShareButton>
                        <TwitterShareButton url={window.location.href} className="p-1">
                            <XIcon size={shareIconSize} round/>
                        </TwitterShareButton>
                        <WeiboShareButton url={window.location.href} className="p-1">
                            <WeiboIcon size={shareIconSize} round></WeiboIcon>
                        </WeiboShareButton>
                        <TelegramShareButton url={window.location.href} className="p-1">
                            <TelegramIcon size={shareIconSize} round></TelegramIcon>
                        </TelegramShareButton>
                        <RedditShareButton url={window.location.href} className="p-1">
                            <RedditIcon size={shareIconSize} round></RedditIcon>
                        </RedditShareButton>
                        <WhatsappShareButton url={window.location.href} className="p-1">
                            <WhatsappIcon size={shareIconSize} round></WhatsappIcon>
                        </WhatsappShareButton>
                        <BiliBiliShareButton url={window.location.href} className="p-1">
                            <BiliBiliIcon size={shareIconSize} round/>
                        </BiliBiliShareButton>
                        <EmailShareButton url={window.location.href} className="p-1">
                            <EmailIcon size={shareIconSize} round></EmailIcon>
                        </EmailShareButton>
                    </div>
                )}
            </BrowserOnly>
        </div>
    );
}
