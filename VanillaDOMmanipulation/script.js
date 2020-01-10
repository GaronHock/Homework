document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });

  const addFavoriteSumbit = (e) =>{
    e.preventDefault();

    const addFavoriteInput = document.querySelector(".favorite-input");
    const newInput = addFavoriteInput.value; 
    addFavoriteInput.value = "";

    newLi = document.createElement("li");
    newLi.textContent = newInput;

    const addPlaces = document.querySelector("#sf-places");
    addPlaces.appendChild(newLi);
  }
  const makeTheSubmitHappen = document.querySelector("#input-form");
  makeTheSubmitHappen.addEventListener("submit", addFavoriteSumbit);


  // const showPhotoForm = (e) => {
  //   const photoFormDiv = document.querySelector(".photo-form-container");
  //   if (photoFormDiv.className === "photo-form-container") {
  //     photoFormDiv.className = "photo-form-container hidden";
  //   } else {
  //     photoFormDiv.className = "photo-form-container";
  //   }
  // };

  // const photoFormShowButton = document.querySelector(".photo-show-button");
  // photoFormShowButton.addEventListener("click", showPhotoForm);


  // const handlePhotoSubmit = (e) => {
  //   e.preventDefault();

  //   const photoUrlInput = document.querySelector(".photo-url-input");
  //   const photoUrl = photoUrlInput.value;
  //   photoUrlInput.value = "";

  //   const newImg = document.createElement("img");
  //   newImg.src = photoUrl;

  //   const newPhotoLi = document.createElement("li");
  //   newPhotoLi.appendChild(newImg);

  //   const dogPhotosList = document.querySelector(".dog-photos");
  //   dogPhotosList.appendChild(newPhotoLi);
  // };

  // const photoSubmitButton = document.querySelector(".photo-url-submit");
  // photoSubmitButton.addEventListener("click", handlePhotoSubmit);
  // adding SF places as list items

  // --- your code here!



  // adding new photos

  // --- your code here!



});
