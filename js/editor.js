
function updatePreview() {
  let previewElement = document.getElementById("preview");
  let editorValue = document.getElementById("editor").value;
  let markedUpHTML = marked(editorValue);
  previewElement.innerHTML = markedUpHTML;
}

function setDefault() {
  let defaultText =
`# Welcome to Sifo Diaz's Markdown editor!

## This is a markdown editor.

This editor uses the [Marked library](https://cdn.jsdelivr.net/npm/marked/marked.min.js) to parse the Markdown.

You can insert inline code \`<example></example>\` using backticks.

\`\`\`javascript
// multi line code goes between three backticks, followed by the language name

function example() {
  return -1;
}
\`\`\`

Right now I'm learning from:
1. FreeCodeCamp
- LinkedIn Learning
* Youtube tutorials

> Did You Ever Hear The Tragedy Of Darth Plagueis The Wise?

> You can **bold** or *italicize* the font in quotes.

![Sith](https://static.wikia.nocookie.net/starwars/images/b/bf/Sith_canon.svg/revision/latest/scale-to-width-down/500?cb=20160702013109)`;

  let editorField = document.getElementById("editor");
  let previewElement = document.getElementById("preview");
    editorField.value = defaultText;
    previewElement.innerHTML = marked(defaultText);
};
