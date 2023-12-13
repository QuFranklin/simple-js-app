//let pokemonList = [
//    {
//      name: 'Cloyster', 
//      type: 'Water/Ice', 
//      height: 4
//  },
//  {
//      name: 'Charizard',
//      type: 'Fire/Flying', 
//      height: 5
//  },
//  {
//      name: 'Snorlax', 
//      type: 'Normal', 
//      height: 6
//  }
//];

//for (let i=0; i < pokemonList.length; i++) {
//    if (pokemonList[i].height > 5) {
//        document.write(pokemonList[i].name + ' (Type:' + ' ' + pokemonList[i].type + ') ' + '(Height:' + ' ' + pokemonList[i].height + ')' + " - It's a BIG pokemon!");
//    }
//    else {
//        document.write(pokemonList[i].name + ' (Type:' + ' ' + pokemonList[i].type + ') ' + '(Height:' + ' ' + pokemonList[i].height + ') ' + "<br>");
//    }
//}

let pokemonRepository = (function() {
    let pokemonList = [
            {
              name: 'Cloyster', 
              type: ["Water", " Ice"], 
              height: 4,
            },
           {
              name: 'Charizard',
              type: ["Fire", " Flying"],
              height: 5,
              
           },
           {
              name: 'Snorlax', 
              type: ["Normal"],
              height: 6,
              
           }
        ];
        
        function add (pokemon) {
            pokemonList.push(pokemon);
        }            

        function getAll () {
           return pokemonList;
        }
        
        function showDetails(pokemon) {
            console.log("Name: " + pokemon.name, '\n'+ "Type: " + pokemon.type, '\n'+ "Height: " + pokemon.height); 
        }
        

        function addListItem(pokemon) {
            let pokemonList = document.querySelector(".pokemon-list"); // select pokemon-list ul class
            let listItem = document.createElement("li"); // create li element in ul class
            let button = document.createElement("button"); // create button 
            button.innerText = pokemon.name; // pokemon name display in button
            button.classList.add("button-class"); // add button class (can style button in css)
            listItem.appendChild(button); // append button to li
            pokemonList.appendChild(listItem); // append pokemon to ul
          
            button.addEventListener("click", function() {
                showDetails(pokemon); // when user click, show all details of pokemons
            });
        }
        
        // Call all function in return 
        return {
            getAll,
            add,
            addListItem,
        };
    })();
    

    //console.log(pokemonRepository.getAll());
    pokemonRepository.getAll().forEach(function(pokemon) {
        pokemonRepository.addListItem(pokemon);
    });

    
            



