const item = document.querySelector(".item");
const item1 = document.querySelector(".item-i");

item.addEventListener('click', function () {
    // item.style.left = 50 + 'px';
    item1.style.order = 1;
    item.style.order = 2;
});