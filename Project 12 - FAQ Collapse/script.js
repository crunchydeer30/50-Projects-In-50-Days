const faqBoxes = document.querySelectorAll('.faq__box');
const faqButtons = document.querySelectorAll('.faq__box__toggle');


faqButtons.forEach(btn => {
    btn.addEventListener('click', (event) =>{
        const currentFaqBox = btn.parentElement;
        disableAll(event);
        currentFaqBox.classList.toggle('faq__box--active');
    })
})

function disableAll(event) {
    faqBoxes.forEach(faqBox => {
        if (!faqBox.contains(event.target)) {
            faqBox.classList.remove('faq__box--active');
        }        
    })
}
