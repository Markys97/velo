let btn= document.querySelector('.choice-velo__btn');

btn.addEventListener('click',e=>{
    let idVelo= e.target.dataset.idvelo
    let place=document.querySelector('.choice-velo__form select').value;

    let= destinationUrl= `/start/${idVelo}/${place}`
    window.location.href = destinationUrl;
})