const form = document.querySelector('.filter-options');
const branch = document.querySelector('#branch')
const sem = document.querySelector('#semester')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(branch.value)
    console.log(sem.value)
})