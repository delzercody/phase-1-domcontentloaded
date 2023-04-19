// Your code goes here
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    let p = document.querySelector('#text')
   console.log(p)
    p.textContent = 'This is really cool!'
})