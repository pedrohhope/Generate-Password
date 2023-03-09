const slider = document.querySelector('.range-number')
const caracterevalue = document.querySelector('#value')
const inputpassword = document.querySelector('.generate-container input')
const passwordbutton = document.querySelector('.generate')
const copypassword = document.getElementById('copypassword')
const copypasswordactive = document.getElementById('copypasswordactive')

let charset = 'abcderfghijklmonpqrstuvwxyzABCDERFGHIJKLMONPQSTUVWXYZ0123456789@!'

caracterevalue.innerHTML = slider.value

copypassword.addEventListener('click', () =>{
    copypasswordactive.classList.remove('hide')
    copypassword.classList.add('hide')
    navigator.clipboard.writeText(inputpassword.value)
})

slider.addEventListener('change', () =>{
    caracterevalue.innerHTML = slider.value
})

passwordbutton.addEventListener('click', () =>{
    copypasswordactive.classList.add('hide')
    copypassword.classList.remove('hide')
    generatepassword()
})


function generatepassword(){
    let pass = ""
    
    for(let i = 0, n = charset.length; i < slider.value; ++i){ 
     pass += charset.charAt(Math.floor(Math.random() * n))
   
     inputpassword.value = pass
}
}


