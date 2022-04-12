var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var modalNoButton = document.querySelector('.modal__action--negative');
var selectPlanButtons = document.querySelectorAll('.plan button');
var toggleButton = document.querySelector('.toggle-selector')
var mobileNav = document.querySelector('.mobile-nav')
console.dir(selectPlanButtons)

for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function() {
        modal.style.display = 'block'
        backdrop.style.display = 'block'
    })
}

backdrop.addEventListener('click', function() {
    mobileNav.style.display = 'nome'
    closeModal()
})

modalNoButton.addEventListener('click', closeModal)

function closeModal() {
    backdrop.style.display = 'none'
    modal.style.display = 'none'
}
// var backdrop = document.querySelectorAll('.backdrop');

// console.log(backdrop)
// console.dir(backdrop)

// backdrop.style.display = 'block'


toggleButton.addEventListener('click', function() {
    mobileNav.style.display = 'block'
    backdrop.style.display = 'block'
})