

const imagensPainel = document.querySelectorAll('.painel1');
const setaAvancar = document.getElementById('btn-avancar');
const setavoltar = document.getElementById('btn-voltar');

let imagemAtual=1;
setaAvancar.addEventListener('click',function(){
    imagemAtual++;
    

    imagensPainel.forEach(imagem =>{
        imagem.classList.remove('mostrar')

        if (imagemAtual >= 2) {
            $("#btn-avancar").hide()
            $("#btn-voltar").show()
            return imagemAtual = 2;
        }
        
    })
    imagensPainel[imagemAtual].classList.add('mostrar');
});

setavoltar.addEventListener('click', function(){
imagemAtual--;
imagensPainel.forEach(imagem =>{
    imagem.classList.remove('mostrar')
    if(imagemAtual<=0){
        $("#btn-voltar").hide()
        $("#btn-avancar").show()
        return imagemAtual<=0;
    }
    
})
imagensPainel[imagemAtual].classList.add('mostrar');

})
