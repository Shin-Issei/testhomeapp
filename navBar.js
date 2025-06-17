/* 

    Each aspect of the page is just going to be in plain JS

*/

// Create Nav bar and Nav list



// CONTEXT FOR THE FOLLOWING:

/*
    1. I still need to create the actual function that
    is going to consume the object and then use the logic

*/

const navEl = document.createElement("nav");
const navList = document.createElement("ul");

let test = {
  "To Do": `./todolistpage.html`,
};

let entries = Object.entries(test);


const listTest = document.createElement("a");
listTest.href = entries[0][1];
listTest.textContent = entries[0][0];

document.body.append(navEl);
navEl.append(navList);
navList.append(listTest);

// Each list element is going to be from a nav element object
