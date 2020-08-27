const sizes = document.querySelectorAll('.size');
const colors = document.querySelectorAll('.color');
const shoes = document.querySelectorAll('.shoe');
const gradients = document.querySelectorAll('.gradient');

function changeSize(){ //changes the size selected
    sizes.forEach(size => size.classList.remove('active'));
    this.classList.add('active');
}

function changeColor(){ //change the color selected
    let primary = this.getAttribute('primary');//targets hex

    let color = this.getAttribute('color');//target clicked button color

    let shoe = document.querySelector(`.shoe[color="${color}"]`)//select color shoe image

    colors.forEach(c =>c.classList.remove('active'));
    this.classList.add('active');

    document.documentElement.style.setProperty('--primary', primary);

    shoes.forEach(s => s.classList.remove('show'));
    shoe.classList.add('show');

    gradients.forEach(g => g.classList.removed('first'))
}

sizes.forEach (size => size.addEventListener('click', changeSize)) ;
colors.forEach(c => c.addEventListener('click', changeColor));