const closedFace = document.querySelector('.closed');
const openFace = document.querySelector('.open');

// to an addEventListener function add (typeofAction), then a function
//which is defined in .addEventListener and then
closedFace.addEventListener('click', () => {
    if(openFace.classList.contains('open')) {
        openFace.classList.add('active');
        closedFace.classList.remove('active');
    } 
});

openFace.addEventListener('click', () => {
    if(closedFace.classList.contains('closed')) {
        closedFace.classList.add('active');
        openFace.classList.remove('active');
    }
});