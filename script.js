const mainDiv = document.querySelector('.mainDiv');
for(let i = 0; i < 16; i++){
    for(let i = 0; i < 16; i++){
        var childDiv = document.createElement('div');
        childDiv.classList.add('childDiv');
        childDiv.setAttribute('style', 'flex-basis: 6%; border: 1px solid black');
        let randColor = generateRandomColor();
        childDiv.setAttribute('onmouseover', 'this.style.background= "red"');
        mainDiv.appendChild(childDiv);
    }
}


function generateRandomColor(){
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}
// childDiv.setAttribute('id', 'childDiv');