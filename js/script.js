const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];


//Question 1
const cat = {
    complain:function() {
        console.log("Meow!");
    }
}

cat.complain()

// Question 2
const heading = document.querySelector("h3");
heading.textContent="updated heading";

// Question 3
heading.style.fontSize="2em";

// Add a class to the heading variable called subheading.
// Question 4
heading.classList.add("subheading");


//Question 5
const paragraphs = document.querySelectorAll("p");
for(let i=0; i<paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}


/*
Question 6:
Select the div with a class of results, assign it to a variable called resultsContainer and set its inner HTML to be <p>New paragraph</p> and its background colour to be yellow.

Question 7:
Create a function that has one parameter called list.

Inside the function, loop through the list parameter and console log the name property in each object.

Call the function and pass in the cats variable in the script.js file in the repo.

Question 8:
Create a function called createCats. The function will have one parameter called cats.
Inside the function loop through the value passed in as cats and create HTML for each object in the array.
Wrap each item in a div, each name property in an h5 tag and each age property in a p tag.
If the age property is missing, it should display “Age unknown” instead.

Return the HTML from the function.
Call the function and pass in the cats array as the argument.

Assign the return value of the function to the innerHTML property of the element on the HTML page with a class of cat-container.
*/