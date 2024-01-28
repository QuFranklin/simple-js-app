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
            pokemonRepository.loadDetails(pokemon).then(function () {

                let pokemonList = $(".pokemon-list"); 
                let card = $('<div class="card" style="width:700px"></div>');
                let image = $('<img class="card-img" style="width:20%">');
                image.attr("src", pokemon.imageUrlFront);
                let cardBody = $('<div class="class-body"></div>');
                let cardTitle = $("<h4 class='card-title' >" + pokemon.name + "</h4>");
                let seeProfile = $(
                    '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Details</button>'
                );
                
                pokemonList.append(card);
                card.append(image);
                card.append(cardBody);
                cardBody.append(cardTitle);
                cardBody.append(seeProfile);

                seeProfile.on("click", function (event) {
                    showDetails(pokemon);
                });
            });
        }    

        function showDetails(pokemon) {
            pokemonRepository.loadDetails(pokemon).then(function () {
                showModal(pokemon);
            });
        }
        // fetch function
        function loadList() {
            return fetch(apiUrl).then(function (response) {
                return response.json(); 
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
            });
        }

        
        // fetch pokemon details
        function loadDetails(item) {
            let url = item.detailsUrl;
            return fetch(url).then(function (response) {
                return response.json();
            }).then(function (details) {
                item.imageUrlFront = details.sprites.front_default;
                item.height = details.height;
                item.weight = details.weight;
            }).catch(function (e) {
                console.error(e);
            });
        }
        
        function showModal(pokemon) {
            let modalBody = $(".modal-body");
            let modalTitle = $(".modal-title");
            let modalHeader = $(".modal-header");

            modalTitle.empty();
            modalBody.empty();

            let nameElement = $("<h1>" + pokemon.name + "</h1>");
            let imageElementFront = $('<img class="modal-img" style="width:50%">');
            imageElementFront.attr("src", pokemon.imageUrlFront);
        
            let heightElement = $("<p>" + "height : " + pokemon.height + "</p>");
            
            let weightElement = $("<p>" + "weight : " + pokemon.weight + "</p>");
            
            modalTitle.append(nameElement);
            modalBody.append(imageElementFront);
            modalBody.append(heightElement);
            modalBody.append(weightElement);
        }

        
        
        // Call all function in return 
        return {
            getAll,
            add,
            addListItem,
            loadList,
            showModal,
            loadDetails,
            
        };
    })();
    
    
    pokemonRepository.loadList().then(function () {
        pokemonRepository.getAll().forEach(function(pokemon) {
            pokemonRepository.addListItem(pokemon);
        });
    });
    
            