let button= document.querySelector('.order__btn--on');
let stop_= document.querySelector('.order__btn--off');
let heure= parseFloat(document.querySelector('.order__minute').textContent);
let minute= parseFloat(document.querySelector('.order__heure').textContent);
let price= parseFloat(document.querySelector('.order__price-number').textContent)
let second=parseFloat( document.querySelector('.order__second').textContent);

let idChrono;


button.addEventListener('click',e=>{
    idChrono= setInterval(()=>{
        second++;
      
        if(second===60)
        {
            minute+=1
            second=0
            if(minute===60){
                heure+=1

            }
            document.querySelector('.order__price-number').textContent= minute* 0.5
        }
        document.querySelector('.order__second').textContent= second
        document.querySelector('.order__heure').textContent= heure
        document.querySelector('.order__minute').textContent= minute
    }, 100)
    e.target.textContent='завершить'
    e.target.style.display='none'

    stop_.style.display='block'

})

stop_.addEventListener('click',e=>{
    clearInterval(idChrono)
})




