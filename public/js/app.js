console.log('Client side javascript file is loaded!')

const mail_form = document.querySelector('form')
const emailr = document.querySelector('#email')
const bodyr = document.querySelector('#body')
const message = document.querySelector('#msg')


mail_form.addEventListener('submit', (e) => {
    e.preventDefault()

    const email = emailr.value
    const body = bodyr.value

    message.textContent = 'sending...'
   
    const temp = `http://localhost:3000?address=${email}&body=${body}`
    
    fetch(temp).then((response) => {
        response.json().then((data) => {
            
            message.textContent = data.info 
        })
    })
})