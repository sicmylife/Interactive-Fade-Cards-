const reviewContainer = document.getElementById("review-container");

// const reviews = [
//   {
//     img: "./images/ga-RBerxXPnZPE-unsplash.jpg",
//     alt: "Profile picture of julia",
//     text: "I love this course is so usefull to me after hours of doing it",
//     name: "Julia Roberth",
//   },
//   {
//     img: "./images/meritt-thomas-aoQ4DYZLE_E-unsplash.jpg",
//     alt: "Profile picture of julia",
//     text: "I love this course is so usefull to me after hours of doing it",
//     name: "Maria Roberth",
//   },
//   {
//     img: "./images/julian-wan-WNoLnJo7tS8-unsplash.jpg",
//     alt: "Profile picture of julia",
//     text: "I love this course is so usefull to me after hours of doing it",
//     name: "Pedro Roberth",
//   },
//   {
//     img: "./images/ga-RBerxXPnZPE-unsplash.jpg",
//     alt: "Profile picture of julia",
//     text: "I love this course is so usefull to me after hours of doing it",
//     name: "Julia Roberth",
//   },



// ];
// async function getCharacter(){
    
//     const response = await fetch('https://api.thecatapi.com/v1/images/search');
//     const data = await response.json();
//     // const {name,species} = data;
//     // console.log(name);
//     console.log(data);

//     data.forEach((character) => {
//             const cardElement = document.createElement("div");
//             cardElement.classList.add("card");
        
//             cardElement.addEventListener('mouseover', showCard);
//             cardElement.addEventListener('mouseleave', blurCard);
        
//             const imageContainer = document.createElement("div");
//             imageContainer.classList.add("image-container");
//             const img = document.createElement("img");
//             img.setAttribute('src',data.image)  
//             // img.setAttribute('alt',data.alt)  
//             imageContainer.append(img);
//             const paragraphElement = document.createElement("p");
//             // paragraphElement.classList.add("text");
//             paragraphElement.textContent = data.status;
//             const nameContainer = document.createElement("div");
//             nameContainer.classList.add("name-container");
//             nameContainer.textContent = data.name;
            
            
//             cardElement.append(imageContainer,paragraphElement,nameContainer);
        
        
//             reviewContainer.append(cardElement);
//         });
 
// }

// getCharacter();





// const rick = fetch('https://api.thecatapi.com/v1/images/search')
// .then(res => 
   
//           res.json()
//         )
//         .then(data => {
//           console.log(data);
  
//           const img = document.querySelector('img');
//          img.src= data[0].url;

//             });

         

             
function getCharacters(done) {
  const results = fetch('https://rickandmortyapi.com/api/character');
  results.then(res => res.json())
  .then(data => {
    done(data);
});
}

getCharacters(data => {
data.results.forEach((character) => {
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");

  cardElement.addEventListener('mouseover', showCard);
  cardElement.addEventListener('mouseleave', blurCard);

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");
  const img = document.createElement("img");
  img.setAttribute('src',character.image)  
  img.setAttribute('alt','Photo')  
  imageContainer.append(img);
  const paragraphElement = document.createElement("p");
  paragraphElement.textContent = character.species;
  const nameContainer = document.createElement("div");
  nameContainer.classList.add("name-container");
  nameContainer.textContent = character.name;
  
  
  cardElement.append(imageContainer,paragraphElement,nameContainer);


  reviewContainer.append(cardElement);
});
})
  



function populateDisplay() {
 
}





function showCard() {
    this.classList.add("active")
}
function blurCard() {
    this.classList.remove("active")

}


