const button = document.querySelectorAll('span>button');
button.forEach(icon=>icon.addEventListener('click', changeIcon));
const icon = document.querySelectorAll('button>i');
const answers = document.querySelectorAll('.answer');

function changeIcon(e){
    if(e.target.classList.contains('fa-plus')){
        e.target.classList.add('fa-minus');
        e.target.classList.remove('fa-plus');
        showContent(e);
    }
    else{
        e.target.classList.remove('fa-minus');
        e.target.classList.add('fa-plus');
        hideDisplay(e);
        
    }
}
function hideDisplay(e){
    e.target.parentElement.parentElement.parentElement.nextElementSibling.classList.remove('show');
}
function showContent(e){
    e.target.parentElement.parentElement.parentElement.nextElementSibling.classList.add('show');
}

