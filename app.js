excusasArray = [
    ['A cop', 'My grandma', 'My girlfriend', 'My cat'],
    ['burned', 'stole', 'hide', 'swallowed'],
    ['my boots', 'my car keys', 'my pants'],
    ['before my date', 'right when you called', 'when I woke up', 'during my siesta', 'just before the wedding']
]


 function buscaExcusas(arr) {
    let arrayExcusaCompleta = []; 
        for (let i in arr) {
                 let numAleatorio = (Math.floor(Math.random() * (arr[i].length))); 
                 arrayExcusaCompleta.push(arr[i][numAleatorio]); 
                       
        }
    let excusas = arrayExcusaCompleta.join(" "); 
    return excusas; 
 }; 


 let ExcuseGenerator = document.getElementById("excuse"); 
 ExcuseGenerator.innerHTML = buscaExcusas(excusasArray); 