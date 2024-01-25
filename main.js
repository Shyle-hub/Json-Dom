const list = document.querySelector(".list li");
const Pricelist = document.querySelector(".Pricelist li");

const menufield = document.querySelector(".menufield");
const price= document.querySelector(".price");

const click= document.querySelector(".click");

click.addEventListener('click', function(){
    //Create new li tag programmatically
    const newLi = document.createElement("li")
    const priceLi = document.createElement("li")

    //get the value of the input
     const licontent = document.createTextNode(menufield.value)
     const pricecontent = document.createTextNode(price.value)
    //Add the input inside the new Li

    newLi.appendChild(licontent);
    priceLi.appendChild(pricecontent)

    //Attach the li to the menu list.
    list.appendChild(newLi);
    Pricelist.appendChild(priceLi)
   
})