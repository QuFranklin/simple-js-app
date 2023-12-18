let pokemonRepository = (function() {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';    
        
        function add (pokemon) {
            pokemonList.push(pokemon);
        }            

        function getAll () {
           return pokemonList;
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
        
        //fetch function
        function loadList() {
            return fetch(apiUrl).then(function (response) {
                return response.json(); // fetch from URL and convert to json 
            }).then(function (json) {
                json.results.forEach (function (item) {
                    let pokemon = {
                        name: item.name,
                        detailsUrl: item.url
                    };
                    add(pokemon);
                }); 
            }).catch(function (e) {
                console.error(e);
            })
        }

        function loadDetails(item) {
            let url = item.detailsUrl;
            return fetch(url).then(function (response) {
                return response.json();
            }).then(function (details) {
                item.imageUrl = details.sprites.front_default;
                item.height = details.height;
                item.weight = details.weight;
            }).catch(function (e) {
                console.error(e);
            });
        }
        
        function showDetails(pokemon) {
            pokemonRepository.loadDetails(pokemon).then(function () {
                console.log(pokemon);
            });
        }
        // Call all function in return 
        return {
            getAll,
            add,
            addListItem,
            loadList,
            loadDetails,
            showDetails
        };
    })();
    
    console.log(pokemonRepository.getAll());
    
    pokemonRepository.loadList().then(function () {
        pokemonRepository.getAll().forEach(function(pokemon) {
            pokemonRepository.addListItem(pokemon);
        });
    });
    
            



