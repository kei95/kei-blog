import { convertMarkdownToHTML } from "./markdown";

describe("convertMarkdownToHTML()", () => {
  test("given emphasize in markdown - it should convert it to HTML", () => {
    const mockedMdString = "*Lorem Ipsum*";
    const expectedHTML = "<p><em>Lorem Ipsum</em></p>";

    expect(convertMarkdownToHTML(mockedMdString)).toMatch(expectedHTML);
  });
  test("given h1 and h2 in markdown - it should convert them to HTML", () => {
    const mockedH1MdString = "# Lorem Ipsum";
    const expectedH1HTML = "<h1>Lorem Ipsum</h1>";
    const mockedH2MdString = "# Lorem Ipsum";
    const expectedH2HTML = "<h1>Lorem Ipsum</h1>";

    expect(convertMarkdownToHTML(mockedH1MdString)).toMatch(expectedH1HTML);
    expect(convertMarkdownToHTML(mockedH2MdString)).toMatch(expectedH2HTML);
  });
  test("given code in markdown - it should convert them to HTML", () => {
    const mockedString = '```typescript const test = "Lorem_Ipsum"; ```';
    const expectedHTML =
      "<p><code>typescript const test = &quot;Lorem_Ipsum&quot;; </code></p>";

    expect(convertMarkdownToHTML(mockedString)).toMatch(expectedHTML);
  });
  test("given empty string - it should return given string", () => {
    const mockedString = "";
    const expectedHTML = "";

    expect(convertMarkdownToHTML(mockedString)).toMatch(expectedHTML);
  });
});
