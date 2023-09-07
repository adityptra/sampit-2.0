var main = document.getElementById('main');
var display = 0;

function hideShow() {
    if(display == 1) {
        main.style.display = 'none';
        main.style.transition = '.5s'
        display = 0;
    }
    else {
        main.style.display = 'block';
        main.style.transition = '.5s'
        display = 1;
    }
}

