let btn = document.querySelectorAll('button')
let number = 0


btn.forEach(btn =>{
    btn.addEventListener('click', () =>{
        number +=1;
        if (number === 1) {
            btn.style.color = 'blue'
        }else if(number === 2) {
            btn.style.color = 'black'
        }else{
            btn.style.color = 'black'
        }

        btn.classList.toggle('decoration')
    })
})