# VR21
A repository to hold my web development portfolio from my apprenticeship at Amazon & TLG Learning.

## Eloquent JavaScript - A Review
[Link](https://eloquentjavascript.net/)
### Chapter 1 - Values, Types, and Operators
Any piece of discrete information or data can be reduced to a sequence of zeros and ones, thus represented in bits. In a JavaScript environment, chunks of information (stored in memory) are called values, in which all values have a type which determines its role. JavaScript uses a fixed number of 64 bits to store values. 

Different value types include: numbers, strings, boolean, undefined (`null`, `undefined`). There are special values that are considered numbers: `Infinity`, `-Infinity`, and `NaN`.

You can combine and transform values with operators, such as binary operators (arithmetic), logic, and unary operators (-, !, `typeof`). In addition, JavaScript has automatic type conversion.

### Chapter 2 - Program Structure
A fragment of code, or subsentence, that produces a value is called an *expression*. A *statement* is like a full sentence, which contains expressions built of smaller expressions. 

The code is executed from top to bottom, with the ability to disrupt the flow by using conditionals (`if, else`, `switch`) or looping (`while`, `do`, `for`). To create a variable, you must bind data under a name for tracking states in your program. You can also create functions, which encapsulates a piece of your program. This allows you to invoke them whenever you wish.

### Chapter 13 - JavaScript and the Browser
Web technology has been decentralized from the start, not just technically but also in the way it evolved. A network protocol describes a style of communication over a network. 

For example, the **Hypertext Transfer Protocol** (HTTP) is a protocol for retrieving named resources (chunks of information, such as web pages or pictures). The **Transmission Control Protocol** (TCP) is a protocol that addresses this problem, each listener (or computer) has a number (called a port) associated with it. The listening computer is called the server, and the connecting computer is called the client.

The **World Wide Web** is a set of protocols and formats that allow us to visit web pages in a browser. The “Web” part in the name refers to the fact that such pages can easily link to each other, thus connecting into a huge mesh that users can move through.

**HTML**, which stands for Hypertext Markup Language, is the document format used for web pages. An HTML document contains text, as well as tags that give structure to the text, describing things such as links, paragraphs, and headings. The HTML tag is `<script>`. This tag allows us to include a piece of JavaScript in a document.

### Chapter 14 - The Document Object Model (DOM)
When you open a web page in your browser, the browser retrieves the page’s HTML text and parses it. The browser builds up a model of the document’s structure and uses this model to draw the page on the screen. It is a data structure that you can read or modify. It acts as a live data structure: when it’s modified, the page on the screen is updated to reflect the changes.

You can imagine an HTML document as a nested set of boxes. Tags enclose other tags, which in turn contain other tags or text. For each box, there is an object, which we can interact with to find out things such as what HTML tag it represents and which boxes and text it contains.

The DOM is organized like a tree, in which elements are arranged hierarchically according to the structure of the document. The objects representing elements have properties such as `parentNode` and `childNodes`, which can be used to navigate through this tree.

The way a document is displayed can be influenced by styling, both by attaching styles to nodes directly and by defining rules that match certain nodes.