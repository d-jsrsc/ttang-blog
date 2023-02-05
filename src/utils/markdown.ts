import MarkdownIt from "markdown-it";

import Prism from "prismjs";

import "prismjs/components/prism-rust";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";

type MarkdownStr = string;

const md: MarkdownIt = new MarkdownIt("default", {
  html: true,
  linkify: true,
  breaks: true,
  highlight: (str, lang) => {
    let hl;

    try {
      hl = Prism.highlight(str, Prism.languages[lang], lang);
    } catch (error) {
      hl = md.utils.escapeHtml(str);
    }

    return `<pre class="language-${lang}"><code class="language-${lang}">${hl}</code><span class="language-tag">${lang}</span></pre>`;
    // return `<pre><code class="language-${lang}">${hl}</code></pre>`;
  },
});

export default md;
