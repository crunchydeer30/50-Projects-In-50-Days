const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', showBoxes);


function showBoxes() {
    const breakpoint = window.innerHeight * 0.9;
    
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < breakpoint) {
            box.classList.add('show');
        }
        else {
            box.classList.remove('show');
        }
    })
    
}