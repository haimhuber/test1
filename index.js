// Exercise 1
const referenceElement = document.querySelector("#parent");
const newElement = document.createElement('h2');
newElement.textContent = 'I am a h2';
referenceElement.parentNode.insertBefore(newElement, referenceElement.nextSibling);

// Exercise 2
const parentElement = document.querySelector("#parent");
const referenceElement2 = document.querySelector("#sibling");
const newElement2 = document.createElement('div');
newElement2.textContent = 'I am Div 1';
parentElement.insertBefore(newElement2, referenceElement2);

// Exercise 3
const referenceElement3 = document.querySelector("#sibling2");
const newElement3 = document.createElement('div');
newElement3.textContent = 'I am Div 2';
parentElement.insertBefore(newElement3, referenceElement3);

