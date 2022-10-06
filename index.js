function media() {
  
   let media, n1, n2 ;
   
   n1 = document.getElementById("n1").value; 
   n1= eval (n1) ;
   
   if (n1>99 || n1<0) {
           alert("1º Número Inválido " + n1);
           document.getElementById("resultado").value= '';
           document.getElementById("n1").value = '';
   }
   
   n2 = document.getElementById("n2").value;
   n2= eval (n2) ; 
   
   if (n2>99 || n2<0) {
           alert("2º Número Inválido  " + n2);
           document.getElementById("resultado").value= '';
           document.getElementById("n2").value = '';
   } 
   
   media = (n1 + n2)/2 ; 
   document.getElementById("resultado").innerHTML = media;

}

function validar(n1,n2) {
   var n1 = (document.getElementById("n1").value);
   var n2 = (document.getElementById("n2").value);

   if (n1>99 || n1<0) {
     alert("1º Número Inválido " + n1);
     document.getElementById("resultado").value= '';
     document.getElementById("n1").value = '';
}

if (n2>99 || n2<0) {
 alert("2º Número Inválido  " + n2);
 document.getElementById("resultado").value= '';
 document.getElementById("n2").value = '';
} 

 if ( n1 > n2) {
   alert( "O maior número é: " + n1 + " e o menor é: " + n2);
 } else 
   alert( "O maior número é: " + n2 + " e o menor é: " + n1);

}