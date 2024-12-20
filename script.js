const input = document.querySelector('#input')
const gen = document.querySelector('#gen')
const copy = document.querySelector('#copy')

let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+~|}{[]></-='

gen.addEventListener('click', () => {
    hello()
})

function hello() {
    let pass = ''
    for (let i = 0; i < 12; i++) {
        pass += chars[Math.floor(Math.random() * chars.length)]
    }
    input.value = pass
}

function copyPass() {
    if (input.value !== '') {
        input.select()
        document.execCommand('copy')
        alert('Password copied to clipboard!')
    } else {
        alert('No password to copy!')
    }
}