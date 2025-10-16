document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu li');
    const items = document.querySelectorAll('.item');

    let currentIndex = 1; 

    menuItems.forEach((li, index) => {
        li.addEventListener('click', () => {
            items.forEach(item => {
                item.classList.remove('active');
                item.classList.add('hide');
            });

            menuItems.forEach(item => item.classList.remove('active-icon'));

            items[index].classList.remove('hide');
            items[index].classList.add('active');
            li.classList.add('active-icon');

            currentIndex = index;
        });
    });
});
