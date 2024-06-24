// declaring new objects

// objects for blog post
let blogPost = {
    title: "Benefits of Cold Water Exposure",
    author: "Abby",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    likes: 100,
    comments: ["Great post!", "Interesting read."],
    published: true,
    displayInfo: function() {
        console.log(`Title: ${this.title}, by ${this.author}`);
    }
};

//  blogPost properties
console.log(blogPost.title);
console.log(blogPost.author);



blogPost.displayInfo();

// objects for gallery image

let galleryImage = {
    name: "Lower Portals",
    location: "Lamington National Park",
    type: "landscape",
    imageUrl: "/images/killen-falls.jpg",
    // 7. Experiment with null and undefined data types
    description: null,
    // 9. Parsing JSON and JavaScript
    toJSON: function() {
        // Return a modified version of the object
        return {
            name: this.name,
            location: this.location,
            type: this.type,
            imageUrl: this.imageUrl,
            description: this.description
        };
    }
};



console.log(galleryImage.name);
console.log(galleryImage.location);


console.log(galleryImage.toJSON());


console.log(galleryImage.description); 


// get object property to use for DOM manipulation functions
document.querySelector(".blog-title").textContent = blogPost.title;
document.querySelector(".gallery-image").src = galleryImage.imageUrl;





// 9. parsing json and js
console.log(galleryImage.toJSON()); // Use toJSON method directly


// RESIZE IMAGE
let image = document.querySelector(".gallery-image");

// width and height of the image
image.style.width = "300px"; // Change to the desired width


// JSON parse 

const blogPost2 = 
JSON.parse('{"blogTitle" : "Breathwork and Cold Water Exposure" , "Author" : "Abby" , "breathWorkExc" : "Wim Hof" , "waterTemp" : "8" }');

console.log(blogPost2);



//assignment 6 below
// round corners of image

let roundCorners = document.querySelector(".main-image");
roundCorners.style.borderRadius = "20%"
roundCorners.style.border = "10px pink double";

// change colour of h1 header to hotpink
let mainHeading = document.querySelector(".main-heading");
mainHeading.style.color = "hotpink";

// event listener for button click
document.querySelector('.btn').addEventListener('click', changeButtonAppearance);

// change button when clicked
function changeButtonAppearance() {
    let button = document.querySelector('.btn');
    button.innerHTML = 'you rebel';
    button.style.backgroundColor = 'lightgreen';
}


// alert and change text when clicking on top "logo"

let clicker = document.querySelector(".logo");

function clicky() {
    clicker.style.color = "#ef4b54";
    clicker.innerHTML = "Getting Interactive";
}

clicker.addEventListener("click",clicky);


// click the paragraph text to delete it


let clickTextParagraph = document.querySelector(".first-paragraph");

function changeText() {
    clickTextParagraph.style.color = "#ef4b54";
    clickTextParagraph.innerHTML = "bye bye text"
}

clickTextParagraph.addEventListener("click",changeText);

// second-paragraph text expires after 10 seconds

document.addEventListener('DOMContentLoaded', function() {
    let expiringTextParagraph = document.querySelector('.second-paragraph');

    function expireText() {
        expiringTextParagraph.innerHTML = "*explosion noises*";
        expiringTextParagraph.style.backgroundColor = "red";
        expiringTextParagraph.style.color = "white";


    }

    setTimeout(expireText, 5000);
});





// a button that changes colour and bg colour on each click

let firstElement = document.querySelector('.second-block-h1');


function toggleClasses() {
    if (firstElement.classList.contains('textClass1')) {
        firstElement.classList.remove('textClass1');
        firstElement.classList.add('textClass2');
    } else if (firstElement.classList.contains('textClass2')) {
        firstElement.classList.remove('textClass2');
    } else {
        firstElement.classList.add('textClass1');
    }
}


firstElement.addEventListener('click', toggleClasses);


// nav button hover 


document.addEventListener('DOMContentLoaded', function() {
    let navElements = document.querySelectorAll('.nav-div');

    navElements.forEach(function(element) {
        element.addEventListener('mousedown', function() {
            element.classList.add('pressed');
        });

        element.addEventListener('mouseup', function() {
            element.classList.remove('pressed');
        });

        element.addEventListener('mouseleave', function() {
            element.classList.remove('pressed'); // Remove pressed state if the mouse leaves the button
        });
    });
});


//LESSON 8 code below
console.clear();
console.log("LESSON 8 JAVASCRIPT CODE");


let favouriteWaterfalls = ["Cedar Creek Falls " , "Cougal Cascades ", "Killen Falls ", "Purlingbrook Falls"]
console.log("Some of my favourite waterfalls are: " , favouriteWaterfalls);

let temperatureArray = [12, 15, 10.5, 8]
function checkTemp(number) {
    return number > 12;
}
console.log(temperatureArray);

function findTemp() {
    let result = temperatureArray.find(checkTemp);
    console.log(result);
}

findTemp();


let waterfallTempArray = [ ["Cedar Creek Falls", 12], ["Cougal Cascades", 15], ["Killen Falls", 10.5], ["Purlingbrook Falls", 8] ];

console.log(waterfallTempArray[[2]]);

waterfallTempArray[0][1] = 10; // Update temperature for "Cedar Creek Falls"
console.log(waterfallTempArray);

function holidaySwimLocation(){
    let holidayArray = [
        ["Abby", "Victoria Creek Cascades"],
        ["Jenna", "Angourie Blue Pool"],
        ["Erin", "Paradise Pool"]
    ];
    console.log(`${holidayArray[0][0]} wants to travel to ${holidayArray[0][1]}`);
    console.log(`${holidayArray[1][0]} wants to travel to ${holidayArray[1][1]}`);
    console.log(`${holidayArray[2][0]} wants to travel to ${holidayArray[2][1]}`);
}



holidaySwimLocation();

let n = 0
while (n < 3) {
    n++;
}

console.log(n);

let nationalParks = ["Mt Tamborine National Park", "Whian Whian National Park", "Springbrook National Park"];

for (let count = 0; count < 1; count++){
    console.log(nationalParks[count])
}

nationalParks.sort();
console.log(nationalParks);

nationalParks.push("D'Aguilar National Park");
console.log(nationalParks);



// forEach loop to manipulate array data (nationalParks)
nationalParks.forEach((park, index) => {
    console.log(`National Park ${index + 1}: ${park}`);
});


// this function breaks the loop once the array reaches a certain point (nationalParks)
for (let i = 0; i < nationalParks.length; i++) {
    console.log(nationalParks[i]);
    if (i === 1) break; // break after printing the second park
}

let swimTempRecord = [10, 5, 8, 12, 21];

function findTopSwimTempRecord(temp) {
    return temp < 10; 
}

let coldestTemperature = swimTempRecord.find(findTopSwimTempRecord);

console.log(`The coldest swim temperature was ${coldestTemperature} degrees.`);



