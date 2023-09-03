const genres = [
    {
        title: 'Aile',
    },
    {
        title: 'Fantastik',
    },
    {
        title: 'Komedi',
    },
    {
        title: 'Korku',
    },
    {
        title: 'Gerilim',
    },
    {
        title: 'Aksiyon',
    },
    {
        title: 'Macera',
    },
    {
        title: 'Biyografi',
    },
    {
        title: 'Belgesel',
    },
]

const menuObserver = new ResizeObserver((entries) => {
    entries.forEach(entry => {
        const visibles = Math.floor((entry.contentRect.width - 130) / 130);
        let html = '';
        if (visibles) {
            html += genres.slice(0, visibles - 1).reduce((acc, genre) => {
                return acc + `<a href="#" class="genre">${genre.title}</a>`
            }, '');
        }
        const invisible = genres.slice(visibles > 0 ? visibles - 1 : 0);
        if (invisible.length > 0) {
            html += `<div class="dropdown">`;
            html += `<button>Türler</button>`;
            html += `<nav>`;
            html += invisible.reduce((acc, genre) => {
                return acc + `<a href="#" class="genre">${genre.title}</a>`
            }, '');
            html += `</nav>`;
            html += `</div>`;
        }
        entry.target.innerHTML = html;
    });
});

document.querySelectorAll('.menu').forEach(menu => menuObserver.observe(menu));


























// boxes
const resizeObserver = new ResizeObserver((entries) => {
    for (let entry of entries) {
        const visibles = Math.floor(entry.contentRect.width / 200);
        entry.target.querySelectorAll('.box').forEach((box, index) => {
            if ((index + 1) <= visibles) {
                box.style.display = 'flex';
            } else {
                box.style.display = 'none';
            }
        });
    }
}
);

document.querySelectorAll('.boxes').forEach(boxes => resizeObserver.observe(boxes));

//textareas
const textareas = document.querySelectorAll('textarea');
const resizeObserverTextarea = new ResizeObserver((entries) => {
    for (let entry of entries) {
        const size = entry.contentRect.height / 3 - 1;
        entry.target.style.fontSize = `${size}px`;
        entry.target.style.lineHeight = `${size}px`;
    }
}
);

textareas.forEach(textarea => resizeObserverTextarea.observe(textarea));