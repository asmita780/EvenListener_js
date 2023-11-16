// event listener => By aadding an event listener to an object, we can catuch a wide range of events
//  triggered by the user or thhe brouser
// events =  click, keypress,mouseover, keydown.....etc

// addEventListener 

// 1)get element by document.getElementBy 
// 2)add event by addEventListener

// benifet of event luistener => we can use multiple event in a single element but in 
// event hanndling we can only use one event if we put two are more then the element take only last one event.

// bubbling...........................
const container = document.getElementById("container");
container.addEventListener("click" , () => {
    console.log("click on container ");
});


const box1 = document.getElementById("box-1");
box1.addEventListener("click" , () => {
    console.log("first");
});



// captuire....................
/*const container = document.getElementById("container");
container.addEventListener("click" , () => {
    console.log("click on container ");
},
true//this is a capture phase(for print container element first )
);

const box1 = document.getElementById("box-1");
box1.addEventListener("click" , () => {
    console.log("first");
});*/



// box1.addEventListener("click", () => {
//     console.log("second function in smae element");
// })
const box2 = document.getElementById("input");
box2.addEventListener("keypress", (e) => {
    console.log(e.key);
})

// this  => jis partucaler element pr click krenge us pure element ko de dega
