const ul = document.getElementsByClassName('drop-down-dog-list')[0];
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};


const dogLinkCreator = function(){
  const array = [];
  Object.keys(dogs).forEach(key => {
    let anchor = document.createElement("a");
    anchor.innerHTML = key;
    anchor.setAttribute("href", dogs[key]);
    let li = document.createElement("li");
    let classname = li.className = ("dogs-link");
    li.appendChild(anchor);
    array.push(li);
  });
  return array;
}

const attachDogLinks = function(){
  const dogLinks = dogLinkCreator();
  for(let i = 0; i < dogLinks.length; i++){
    ul.appendChild(dogLinks[i]);
  }
  
}

attachDogLinks();

const showNav = (e) =>{
  const showLi = document.querySelector(".drop-down-dog-list");
    showLi.className = "drop-down-dog-list";
}

const removeNav = (e) =>{
  const notShowLi = document.querySelector(".drop-down-dog-list");
  notShowLi.className = "drop-down-dog-list hidden"
}

const showUlOnMouseEnter = document.querySelector(".drop-down-dog-nav");
showUlOnMouseEnter.addEventListener("mouseenter", showNav);

const removeUlOnMouseLeave = document.querySelector(".drop-down-dog-nav");
removeUlOnMouseLeave.addEventListener("mouseleave", removeNav);






