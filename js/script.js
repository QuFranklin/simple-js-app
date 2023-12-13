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
            let pokemonList = document.querySelector(".pokemon-list");
            let listItem = document.createElement("li");
            let button = document.createElement("button");
            button.innerText = pokemon.name;
            button.classList.add("button-class");
            listItem.appendChild(button);
            pokemonList.appendChild(listItem);
            listItem.appendChild(button);
            pokemonList.appendChild(listItem);

            button.addEventListener("click", function() {
                showDetails(pokemon);
            });
        }
        
        return {
            getAll,
            add,
            addListItem,
        };
    })();
    

    console.log(pokemonRepository.getAll());
    pokemonRepository.getAll().forEach(function(pokemon) {
        pokemonRepository.addListItem(pokemon);
    });

    
            



