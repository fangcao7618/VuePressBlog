# Hello VuePress https://markdown-it.github.io/

<img :src="$withBase('/foo.png')" alt="foo">

---toml
title = "Blogging Like a Hacker"
lang = "en-US"
---

| Tables        |      Are      |   Cool |
| ------------- | :-----------: | -----: |
| col 3 is      | right-aligned | \$1600 |
| col 2 is      |   centered    |   \$12 |
| zebra stripes |   are neat    |    \$1 |

:tada: :100:

---

title: Blogging Like a Hacker
lang: en-US

---

---

# Heading

[[toc]]

## Sub heading 1

Some nice text

## Sub heading 2

Some even nicer text

[Home](/) <!-- 跳转到根部的 README.md -->

[foo](/foo/) <!-- 跳转到 foo 文件夹的 index.html -->

[foo heading anchor](/foo/#heading) <!-- 跳转到 foo/index.html 的特定 anchor 位置 -->

[foo - one](/foo/one.html) <!-- 具体文件可以使用 .html 结尾 -->

[foo - two](/foo/two.md) <!-- 也可以用 .md -->

-   [vuejs](http://vuejs.org)

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: danger STOP
Danger zone, do not proceed
:::

```js{4}
export default {
    data() {
        return {
            msg: "Highlighted!"
        };
    }
};
```

# .vuepress/config.js 的配置

<<< @/.vuepress/config.js{5}

## 前端学习地址和查询地址

-   [开发者手册](https://cloud.tencent.com/developer/devdocs)
-   [知乎](https://www.zhihu.com/question/327763431/answer/705321309)
-   [WordPress - 百度百科 全球最大中文百科全书](https://wordpress.org/)
-   [语雀](https://www.yuque.com/dashboard/collections)--[https://cn.wordpress.org/--http://www.wordpress.org.cn/](https://cn.wordpress.org/--http://www.wordpress.org.cn/)
-   [前端免费学习网](http://sem.tanzhouedu.com/shiguang/it/web/pc360/?from=360_PC&plan=%E5%89%8D%E7%AB%AF-html%2Fhtml5%2Fcss%E7%B1%BB-QQ%E7%BE%A4&unit=html5&keyword=html5%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91)
-   [segmentfault](https://segmentfault.com/) 学习技能，解决难题
-   [Topics](https://github.com/topics) 浏览 Github 上最常用的主题
-   [GitHub Explore](https://github.com/github/explore)
-   [Mozilla 开发者网络，简称 MDN]()
-   [w3schools.com]()
-   [https://developer.mozilla.org](https://developer.mozilla.org)
-   [各种开发文档大全](https://devdocs.io/)
    <a name="415e06f5"></a>

{{ $page }}
