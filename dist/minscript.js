let pokemonRepository=function(){let t=[];function e(e){t.push(e)}function n(){return t}function o(t){let e=$('.modal-body'),n=$('.modal-title');n.empty(),e.empty();let o=$('<h1>'+t.name+'</h1>'),a=$('<img class="modal-img" style="width:50%">');a.attr('src',t.imageUrlFront);let i=$('<img class="modal-img" style="width:50%">');i.attr('src',t.imageUrlBack);let p=$('<p>height : '+t.height+'</p>'),l=$('<p>weight : '+t.weight+'</p>'),s=$('<p>type : '+t.types+'</p>');n.append(o),e.append(a),e.append(i),e.append(p),e.append(l),e.append(s)}return{getAll:n,add:e,addListItem:function t(e){pokemonRepository.loadDetails(e).then(function(){let t=$('.row'),n=$('<div class="card" style="width:350px"></div>'),a=$('<img class="card-img" style="width:20%">');a.attr('src',e.imageUrlFront);let i=$('<div class="class-body"></div>'),p=$('<h4 class="card-title" >'+e.name+'</h4>'),l=$('<button type="button" class="btn btn-dark btn-small" data-toggle="modal" data-target="#exampleModal">Details</button>');t.append(n),n.append(a),n.append(i),i.append(p),i.append(l),l.on('click',function(){(function t(e){pokemonRepository.loadDetails(e).then(function(){o(e)})})(e)})})},loadList:function t(){return fetch('https://pokeapi.co/api/v2/pokemon/?limit=150').then(function(t){return t.json()}).then(function(t){t.results.forEach(function(t){e({name:t.name,detailsUrl:t.url})})}).catch(function(t){console.error(t)})},showModal:o,loadDetails:function t(e){return fetch(e.detailsUrl).then(function(t){return t.json()}).then(function(t){e.imageUrlFront=t.sprites.front_default,e.imageUrlBack=t.sprites.back_default,e.height=t.height,e.weight=t.weight,e.types=[];for(let n=0;n<t.types.length;n++)e.types.push(t.types[n].type.name)}).catch(function(t){console.error(t)})}}}();pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(t){pokemonRepository.addListItem(t)})});