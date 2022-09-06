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


//Question 1//
const cat = {
   complain:function() {
   console.log("Meow!");
  }}

cat.complain()


//Question 2//

const heading =document.querySelector("h3");
  heading.textContent="updated heading";

//Question 3//
heading.style.fontSize="2em";

//Question 4//

const addSubHeading = document.querySelector("h3");
 for(let i=0;i<addSubHeading.lenght;i++){
    addSubHeading[i].classList.add("subheading");
 }

 //Question 5//

 const paragraphs= document.querySelectorAll("p");
    paragraphs.style.textcolor ="red";










