let numValue = 6;
let colors = generateRandomColor(numValue);

const color = document.querySelector('.color');
let pickedColor = selectedColor();
const squares = document.querySelectorAll('.square');
const h1 = document.querySelector('h1');
const result = document.querySelector('.result');
const reset = document.querySelector('.reload');
const easyBtn = document.querySelector('.easy');
const hardBtn = document.querySelector('.hard');
init();

// Reset
reset.addEventListener('click', function() {
    colors = generateRandomColor(numValue);
    pickedColor = selectedColor();
    reset.textContent = "New Game";
    color.textContent = pickedColor;
    result.textContent = '';
    for(let i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
    }
    h1.style.background = "steelblue";
});

// Easy Button
easyBtn.addEventListener('click', function() {
    numValue = 3;
    colors = generateRandomColor(numValue);
    pickedColor = selectedColor();
    color.textContent = pickedColor;
    result.textContent = '';
    hardBtn.classList.remove('selected');
    easyBtn.classList.add('selected');

    for(let i = 0; i < squares.length; i++) {

        if(colors[i]) {
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = 'none';
        }   
    }
});

// Hard Button
hardBtn.addEventListener('click', function() {
    numValue = 6;
    colors = generateRandomColor(numValue);
    pickedColor = selectedColor();
    color.textContent = pickedColor;
    result.textContent = '';
    easyBtn.classList.remove('selected');
    hardBtn.classList.add('selected');

    for(let i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
        squares[i].style.display = 'inline-block';
    }
});


function init() {

    color.textContent = pickedColor;
    hardBtn.classList.add('selected');
    // Color of the square
    for(let i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];

        squares[i].addEventListener('click', function() {
            // Grabbing the current color
            const currentColor = this.style.background;
            console.log(currentColor);
            // Matching the color
            if(currentColor === pickedColor) {
                reset.textContent = "Play Again?";
                result.textContent = "Correct!"
                colorChange(currentColor);
                h1.style.background = currentColor;
            } else {
                console.log(pickedColor, currentColor);
                reset.textContent = "Play Again?";
                result.textContent = "Try Again";
                squares[i].style.background = '#333';
            }
        });
        
    }
}


function colorChange(color) {
    for(let i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
}


function selectedColor() {
    const random = Math.floor(Math.random() * colors.length);
    return colors[random];
}



function generateRandomColor(num) {
    const arr = [];

    for(let i = 0; i < num; i++) {
        arr.push(changeColor());
    } 
    return arr;
}

function changeColor() {
    const red = Math.floor(Math.random() * 255) + 1;
    const green = Math.floor(Math.random() * 255) + 1;
    const blue = Math.floor(Math.random() * 255) + 1;
   
    return "rgb(" + red + ", " + green + ", " + blue +")";
}



