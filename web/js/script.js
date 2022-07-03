//Скрываем и показываем элемент header на странице

function userActions() {
    let el = document.getElementsByClassName("header-menu");
    for(let i = 0; i < el.length; i++) {
        if (el[i].style.display == 'block')
            el[i].style.display = 'none';
        else
            el[i].style.display = 'block';
    }
}
