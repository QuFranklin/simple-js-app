let pokemonList = [
    {
        name: 'Cloyster', 
        type: 'Water/Ice', 
        height: 4
    },
    {
        name: 'Charizard',
        type: 'Fire/Flying', 
        height: 5
    },
    {
        name: 'Snorlax', 
        type: 'Normal', 
        height: 6
    }
];

for (let i=0; i < pokemonList.length; i++) {
    if (pokemonList[i].height > 5) {
        document.write(pokemonList[i].name + '(height:' + ' ' + pokemonList[i].height + ')' + ' is a BIG pokemon! ');
    }
    else {
        document.write(pokemonList[i].name + '(height:' + ' ' + pokemonList[i].height + ') ');
    }
}