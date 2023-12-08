//let pokemonList = [
//    {
//        name: 'Cloyster', 
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
              size: false,
          },
          {
              name: 'Charizard',
              type: ["Fire", " Flying"],
              height: 5,
              size: false,
          },
          {
              name: 'Snorlax', 
              type: ["Normal"],
              height: 6,
              size: true,
          }
        ];
    
        function add (pokemon) {
            pokemonList.push(pokemon);
        }

        function getAll () {
           return pokemonList;
        }
        
        return {
           getAll,
            add,
        };
    
    })();
    
    pokemonRepository.getAll().forEach(function(pokemon) {
        if (pokemon.size == true)
            document.write(pokemon.name + ' (Type:' + ' ' + pokemon.type + ') ' + '(Height:' + ' ' + pokemon.height + ') ' + " - It's a BIG pokemon!");
            //console.log(pokemon.name + ' (Type:' + ' ' + pokemon.type + ') ' + '(Height:' + ' ' + pokemon.height + ') ' + " - It's a BIG pokemon!");
        else {
            document.write(pokemon.name + ' (Type:' + ' ' + pokemon.type + ') ' + '(Height:' + ' ' + pokemon.height + ') ' + "<br>");
            //console.log(pokemon.name + ' (Type:' + ' ' + pokemon.type + ') ' + '(Height:' + ' ' + pokemon.height + ') ');
        }
    });

            



