 // Botão C - Clear
 document.querySelectorAll("#clear").addEventListener("click", (){
     document.querySelector("#display").value = " ";
     // no display, limpando o número informado
 })

 // Botão -> BackSpace

 const BackSpace = () =>{
     const num = document.querySelector("#display").value.slice(0, -1);
     // declarando constante NUM e tirando -1 número em #display, da direita para a esquerda

     document.querySelector("#display").value = num;
     // igulando e atualizando NUM no #
 }