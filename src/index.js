const h1 = document.createElement("h1");
h1.innerText = "Hello World";
document.body.appendChild(h1);

class Hello {
    constructor() {
        console.log("hello world!");
    }
}

new Hello();
