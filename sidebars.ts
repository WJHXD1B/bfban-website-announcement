import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
    docsSidebar: [
        {type: 'autogenerated', dirName: '.'},
        {type: 'html', value: '<hr/>'},
        {type: 'link', label: 'github (announcement)', href: 'https://github.com/BFBAN/bfban-website-announcement'},
        {type: 'link', label: 'github (website)', href: 'https://github.com/BFBAN/bfban-website'},
        {type: 'html', value: '<hr/>'},
        {type: 'link', label: 'exterior design', href: 'https://short.bfban.com/exterior-design'},
        {type: 'link', label: 'sitestats', href: 'https://bfban.com/sitestats'},
        {type: 'link', label: 'status', href: 'https://status.bfban.com'},
    ],
};

export default sidebars;
