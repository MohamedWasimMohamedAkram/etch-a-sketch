const mainDiv = document.querySelector('.mainDiv');
let gridNumber = prompt("Number of squares in a row?");
var randomColor = Math.floor(Math.random()*16777215).toString(16);
for(let i = 0; i < gridNumber; i++){
    for(let i = 0; i < gridNumber; i++){
        var childDiv = document.createElement('div');
        childDiv.classList.add('childDiv');
        childDiv.style.border = "1px solid black"
        childDiv.style.flexBasis = 100/gridNumber + "%";
        // childDiv.setAttribute('style', 'flex-basis: 6%');
        mainDiv.appendChild(childDiv);
    }
}


function generateRandomColor(){
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

const childDiv2 = document.querySelectorAll('.childDiv');
childDiv2.forEach(element => {
    element.addEventListener('mouseover', () => {
        element.style.backgroundColor = generateRandomColor();
    })
});

const newGridBtn = document.querySelector('.newGridBtn');
newGridBtn.addEventListener('click', () => {
    location.reload();
})
// childDiv.setAttribute('id', 'childDiv');