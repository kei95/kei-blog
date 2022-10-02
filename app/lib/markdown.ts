import md from "markdown-it";
import hljs from "highlight.js";

/**
 * parse and highlight given markdown and convert it to HTML
 */
export function convertMarkdownToHTML(stringifiedMarkdown: string) {
  const markdown = md({
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        return hljs.highlight(str, { language: lang }).value;
      }

      return ""; // use external default escaping
    },
  });

  return markdown.render(stringifiedMarkdown ?? "");
}
