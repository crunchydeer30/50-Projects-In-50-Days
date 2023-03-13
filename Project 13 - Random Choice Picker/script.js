const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

textarea.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        setTimeout(() => {
            event.target.value = '';
        }, 10)
        randomSelect();
    }
    else {
        createTags(event);
        console.log(event.key);
    }   
})

function createTags(event) {
    tagsEl.innerHTML = '';
    
    const tags = event.target.value.split(',').filter(tag => tag.trim() !== '')
    .map(tag => tag.trim());
    console.log(tags);

    tags.forEach(tag => {
       const tagEl = document.createElement('span')
       tagEl.innerHTML = tag;
       tagEl.classList.add('tag');
       tagsEl.appendChild(tagEl);
    });
}

function randomSelect() {
    const times = 30;

    const interval = setInterval(() => {
        let tag = randomTag();
        highlight(tag);

        setTimeout(() => {unhighlight(tag)}, 100);
    }, 100)

    setTimeout(() => {
        clearInterval(interval);
        highlight(randomTag());
    }, times * 100);
}

function randomTag() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}

function highlight(tag) {
    tag.classList.add('highlight');
}

function unhighlight(tag) {
    tag.classList.remove('highlight');
}