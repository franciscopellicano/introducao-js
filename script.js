let imgm = document.getElementById('imagem')
let btn1 = document.getElementById('botao1')
let btn2 = document.getElementById('botao2')
let btn3 = document.getElementById('botao3')
let btn4 = document.getElementById('botao4')
let btn5 = document.getElementById('botao5')
let btn6 = document.getElementById('botao6')

function trocar(img){
  imgm.src = img;
}
btn1.addEventListener('click', function(){
    trocar('imagem1.jpg')
})
btn2.addEventListener('click', function(){
    trocar('imagem2.jpg')
})
btn3.addEventListener('click', function(){
    trocar('imagem3.jpg')
})
btn4.addEventListener('click', function(){
    trocar('bigode.jpeg')
})
btn5.addEventListener('click', function(){
    trocar('burro.jpeg')
})
btn6.addEventListener('click', function(){
    trocar('hmm.jpeg')
})