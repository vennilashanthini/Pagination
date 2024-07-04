//Functions For Pagination

let link = document.getElementsByClassName("list"); //getting elements and naming it as link
let currentvalue=1;

function activeLink(){

for(l of link){

l.classList.remove("active");

}

event.target.classList.add("active");

currentvalue = event.target.value;

}

function backBtn(){

if(currentvalue>1){

    for(l of link){

l.classList.remove("active");

}

currentvalue--;

link[currentvalue-1].classList.add("active");

}

}

function nextBtn(){

if(currentvalue < 6){

    for(l of link){

l.classList.remove("active");

}

currentvalue++;

link[currentvalue-1].classList.add("active");

}

}
