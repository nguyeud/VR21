const HTML =
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div class="header">
    </div>
    <section id="container">
        <ul>
            <li class="first">one</li>
            <li class="second">two</li>
            <li class="third">three</li>
        </ul>
        <ol>
            <li class="first">one</li>
            <li class="second">two</li>
            <li class="third">three</li>
        </ol>
    </section>
    <div class="footer">
    </div>
</body>
</html>`;

const container = document.getElementById("container");
// const container = document.querySelector("#container");

const listSecond = document.querySelectorAll(".second");
// const listSecond = document.getElementsByClassName("second");

const orderedList = document.querySelector("ol");
const orderedListThird = orderedList.querySelector(".third");
// const orderedListThird = document.querySelector("ol .third");

container.append("Hello!");

const footer = document.querySelector(".footer");
footer.setAttribute("class", "main");
footer.removeAttribute("class", "main");

const unorderedList = document.querySelector("ul");
const listElement = document.createElement("li");
listElement.innerText = "four";
unorderedList.append(listElement);

const orderedListLi = orderedList.getElementsByTagName("li");
for (const tag of orderedListLi) {
    tag.style.backgroundColor = "green";
}

footer.remove();