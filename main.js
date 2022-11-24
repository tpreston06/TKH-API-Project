
import axios from "axios";

async function fetchDisneyCharacter(name){
  const characterData = await axios.get(`https://api.disneyapi.dev/character?name=${name}`);
  // console.log(characterData);
  if(characterData.status == 200){
    return characterData.data
  }
  else{
    return null
  }
}

// fetchDisneyCharacter("Mickey%20Mouse");

function searchDisneyCharacters(){
  const searchInput = document.createElement("input");
  const container = document.getElementById("app");
  
  
  const button = document.querySelector("button");
  
  button.addEventListener("click", async function(event){
    console.log(event.target.value)
    const character = await fetchDisneyCharacter(event.target.value);
    if(character){
      console.log(event.target.value)
      if(character.name == event.target.value){
        
        for(let i = 0; i < character.data.length; i++){
          // console.log(character.data[i])
          const currentCharacter = character.data[i]
          if(currentCharacter.films && currentCharacter.films.length > 0){
            console.log(currentCharacter.films) //loop through obj films array
            //add for loop
            for(let j = 0; j < currentCharacter.films.length; j++){
              const filmItem = document.createElement("li")
              filmItem.innerText = currentCharacter.films[j]
              filmList.append(filmItem)
            }
            document.body.appendChild(filmList)
            //for each film in film array, add new element to page with text (Film title)
            //create element
            //innerhtml
          }
        }
      }
      // console.log(character)
      // pull data from character
      // loop through character.data
      
      // create list - append list to container
      // 
    }
  })
  container.append(searchInput);
}

searchDisneyCharacters();