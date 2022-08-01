const inputNode = document.querySelector(".js-input");
const btnNode = document.querySelector(".js-btn");
const outputNode = document.querySelector(".js-output");

let title = '';

function changeTitle(newTitle) {
    title = newTitle;
}

function render() {
    outputNode.innerHTML = `<h1>${title}</h1>`;

    
}

btnNode.addEventListener("click", function() {
    changeTitle(inputNode.value);
    render();
});

