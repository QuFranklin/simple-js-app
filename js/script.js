let pokemonRepository = (function() {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';    
        
    let modalContainer = document.querySelector('#modal-container');
        
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
        
        function showModal(pokemon) {
            modalContainer.innerHTML= '';
            
            
            let modal = document.createElement('div');
            modal.classList.add('modal');

            let closeButtonElement = document.createElement('button');
            closeButtonElement.classList.add('modal-close');
            closeButtonElement.innerText = 'Close';
            closeButtonElement.addEventListener('click', hideModal);

            let titleElement= document.createElement('h1');
            titleElement.innerText= pokemon.name;

            let bodyElement= document.createElement('p');
            bodyElement.innerText = 'Height:' + ' ' + pokemon.height;

            let imageElement= document.createElement('img');
            imageElement.src=pokemon.imageUrl;

            modal.appendChild(closeButtonElement);
            modal.appendChild(titleElement);
            modal.appendChild(bodyElement);
            modal.appendChild(imageElement);
            modalContainer.appendChild(modal);

            modalContainer.classList.add('is-visible');
        }

        function hideModal() {
            modalContainer.classList.remove('is-visible');
        }

        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
              hideModal();
            }
        });

        modalContainer.addEventListener('click', (e) => {
            let target = e.target;
            if (target === modalContainer) {
                hideModal();
            }
        });

        function showDetails(pokemon) {
            pokemonRepository.loadDetails(pokemon).then(function () {
                showModal(pokemon);
            });
        }
        // Call all function in return 
        return {
            getAll,
            add,
            addListItem,
            loadList,
            loadDetails,
            showDetails,
            showModal
        };
    })();
    
    //console.log(pokemonRepository.getAll());
    
    pokemonRepository.loadList().then(function () {
        pokemonRepository.getAll().forEach(function(pokemon) {
            pokemonRepository.addListItem(pokemon);
        });
    });
    
            