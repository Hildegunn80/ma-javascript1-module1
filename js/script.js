
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


// Question 1

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

// Question 4

heading.classList.add("subheading");


// Question 5

const paragraphs = document.querySelectorAll("p");
for(const paragraph of paragraphs) {
    paragraph.style.color = "red";
}


// Question 6

const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML="<p>New paragraph</p>";
resultsContainer.style.background = "Yellow";

// Question 7:

function logCatNames(list) {
    for (const cat of list) {
        console.log("Name: " + cat.name );
    }
}
logCatNames(cats);

// Question 8:

function createCats(cats) {
    let HTML = "";

    for (const cat of cats) {
        HTML += "<div>";

        HTML += "<h5>";
        HTML += cat.name;
        HTML += "</h5>";

        HTML += "<p>";
        let age = cat.age;
        //if(age === undefined) age = "Age unknown";
        HTML += age;
        HTML += "</p>";

        HTML += "</div>\n";
    }

    return HTML;
}

const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = createCats(cats);