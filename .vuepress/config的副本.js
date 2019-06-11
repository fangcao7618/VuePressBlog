module.exports = {
    title: "Ant Design 实战教程",
    description: "基于 umi 的 Ant Design 实战教程",
    port: 8888,
    markdown: {
        lineNumbers: true,
        externalLinks: { target: "_blank", rel: "noopener noreferrer" },
        anchor: {
            permalink: true,
            permalinkBefore: true,
            permalinkSymbol: "#"
        },
        toc: {
            includeLevel: [2, 3],
            containerClass: "table-of-contents",
            slugify: s =>
                encodeURIComponent(
                    String(s)
                        .trim()
                        .toLowerCase()
                        .replace(/\s+/g, "-")
                ),
            markerPattern: /^\[\[toc\]\]/im,
            config: md => {
                md.set({ breaks: true });
                // md.use(require("markdown-it-xxx"));
            }
        }
    },
    // themeConfig: {
    //     home: true,
    //     markdown: {
    //         externalLinks: { target: "_blank", rel: "noopener noreferrer" },
    //         // markdown-it-anchor 的选项
    //         anchor: {
    //             permalink: true,
    //             permalinkBefore: true,
    //             permalinkSymbol: "#"
    //         },
    //         // markdown-it-toc 的选项
    //         toc: { includeLevel: [1, 2] },
    //         config: md => {
    //             md.set({ html: true });
    //             // 使用更多的 markdown-it 插件!
    //             md.use(require("markdown-it-html"));
    //             md.use(require("markdown-it-table-of-contents"));
    //             md.use(require("markdown-it-katex"));
    //         }
    //     }
    // },
    // markdown: {
    //     externalLinks: { target: "_blank", rel: "noopener noreferrer" },
    //     // markdown-it-anchor 的选项
    //     anchor: {
    //         permalink: true,
    //         permalinkBefore: true,
    //         permalinkSymbol: "#"
    //     },
    //     // markdown-it-toc 的选项
    //     toc: { includeLevel: [1, 2] },
    //     config: md => {
    //         md.set({ html: true });
    //         // 使用更多的 markdown-it 插件!
    //         md.use(require("markdown-it-html"));
    //         md.use(require("markdown-it-table-of-contents"));
    //         md.use(require("markdown-it-katex"));
    //     }
    // },
    head: [
        [
            "link",
            {
                rel: "icon",
                href:
                    "https://cdn.nlark.com/yuque/0/2018/png/84868/1535520500482-avatar/20c595c5-ab31-4543-9142-f36cc87c8868.png?x-oss-process=image/resize,m_fill,w_320,h_320"
            }
        ]
    ],
    plugins: [
        [
            "vuepress-plugin-yuque",
            {
                // 这里可以使用你自己的语雀 Repo
                repoUrl: "https://www.yuque.com/fangcao/api",
                home: {
                    actionText: "Getting Started →",
                    actionLink: "/web/",
                    heroImage:
                        "https://cdn.nlark.com/yuque/0/2018/png/84868/1535520500482-avatar/20c595c5-ab31-4543-9142-f36cc87c8868.png?x-oss-process=image/resize,m_fill,w_320,h_320",
                    footer: `Copyright © 蚂蚁金服体验技术部`
                    // features: [
                    //     {
                    //         title: "循序渐进",
                    //         details:
                    //             "本教程的难度依次递进，为阅读者呈现舒适的学习曲线"
                    //     },
                    //     {
                    //         title: "值得信赖",
                    //         details:
                    //             "由 antd 团队亲自打造，从技术栈、生态、研发流程等来为你提供系统化的学习体验"
                    //     },
                    //     {
                    //         title: "最佳实践",
                    //         details:
                    //             "通过结合实际开发过程中的案例，来描述不同场景下的最佳实践"
                    //     }
                    // ]
                }

                // markdown: {
                //     lineNumbers: true,
                //     externalLinks: {
                //         target: "_blank",
                //         rel: "noopener noreferrer"
                //     },
                //     anchor: {
                //         permalink: true,
                //         permalinkBefore: true,
                //         permalinkSymbol: "#"
                //     },
                //     toc: {
                //         includeLevel: [2, 3],
                //         containerClass: "table-of-contents",
                //         slugify: s =>
                //             encodeURIComponent(
                //                 String(s)
                //                     .trim()
                //                     .toLowerCase()
                //                     .replace(/\s+/g, "-")
                //             ),
                //         markerPattern: /^\[\[toc\]\]/im,
                //         config: md => {
                //             md.set({ breaks: true });
                //             // md.use(require("markdown-it-xxx"));
                //         }
                //     },
                //     config: md => {
                //         md.set({ html: true });
                //         // 使用更多的 markdown-it 插件!
                //         md.use(require("markdown-it-html"));
                //         md.use(require("markdown-it-table-of-contents"));
                //         md.use(require("markdown-it-katex"));
                //     }
                // }
            }
        ]
    ]
};
