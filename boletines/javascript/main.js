// DOM
// queryselector/ queryselectorAll
// let links = document.querySelectorAll("a");

// links.forEach(function(link){
//     console.log(link)
// })

// let celdas= document.querySelectorAll("td");


// celdas.forEach(function(td){
//     td.addEventListener('click',function(){
//         console.log(this);
//     })
// })

let links = document.querySelectorAll('.close');


links.forEach(function(link){
    link.addEventListener('click',function(ev){
        ev.preventDefault();

        return false
    });
});


let iconos = document.querySelectorAll('i');


iconos.forEach(function(icono){
    icono.classList.remove('fa-star')
})