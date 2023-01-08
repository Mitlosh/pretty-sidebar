const sidebar = document.querySelector('.sidebar')
const toggle = document.querySelector('.toggle')
const navItems = document.querySelectorAll('.nav-item')

toggle.addEventListener('click', () => {
    if(sidebar.className === 'sidebar')
        sidebar.classList.add('open')
    else
        sidebar.classList.remove('open')
})

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navItems.forEach(item => {
            item.classList.remove('active')
        })
        item.classList.add('active')
    })
})