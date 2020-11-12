//%%%%%%%%%%%%%%%%%%%%%%_____Parte 1______%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

function copiararray(array){
    //Función para tener mismo array pero como objeto diferente
    //Input: array, Outpout: array
    var copia=[]
    for (let step = 0; step < array.length ; step++){
        copia[step]=array[step]}
    return copia
}

function removeItemAll(array, value) {
    //Funcion para eliminar un valores especificos en array
    //Input: [array], elemento a eliminar
    //Output: [array] {sin el elemento} 
    var index = 0;
    while (index < array.length) {
      if (array[index] === value) {
        array.splice(index, 1);
      } 
      else {++index;}}
    return array
}

function ListaOrdenada(array){
    //Funcion que busca modificar un array para devolverlo ordenado de forma creciente
    //Input: [array]: a ordenar,
    // Output: [array] ordenado
    let arrayaentregar=[]
    let variabledos=copiararray(array)
    for (let step = 0; step < array.length ; step++) {
        var minimo= Math.min.apply(null, variabledos);     
        variabledos =removeItemAll(variabledos,minimo);
        arrayaentregar[step]=minimo; }    
return arrayaentregar  
}

function crearValorConArray(array){
    //Funcion que recibe array ordenado y lo devuelve en el formato deseado
    //ej: crearValorConArray[2,3,1] = 123
    //Input: array
    //Output: int
    arrayOrdenado=ListaOrdenada(array)
    arrayOrdenado=removeItemAll(arrayOrdenado, Infinity)
    var valor=0
    for (let index=0;index<arrayOrdenado.length;index++){
        valor=valor+arrayOrdenado[index]*10**(arrayOrdenado.length-index-1)
    }
         
    return valor
 }


 //Run parte 1:
let ejemploArray=[6,3,3,9,4,3,7,8]
console.log('Parte 1:')
console.log('array de Input: ['+ejemploArray+']')
console.log('Output: '+crearValorConArray(ejemploArray))


//%%%%%%%%%%%%%%%%%%________Parte 2__________%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


function CargarImagen(nombre_imagen, alto_pixeles, ancho_pixeles){
    //Funcion para píxeles que crear matriz con las letras: W, B, O según el color del pixel
    //Carga imagen (en carpeta ) y devuelve la matriz con los pixeles con 'N': Negro, 'B': Blamco o 'O':otro
    //Input: string {nombre del archivo imagen}, int {alto de pixeles imagen}, int {ancho de pixeles imagen}
    //Output: --
    //Se imprime 50*str[] {cada casilla como pixel, se imprime un array por fila}
    var img = new Image();
    //Se lee imagen
      img.src = nombre_imagen;
      var canvas = document.getElementById('canvas');
      var canvasEdited =  document.getElementById('canvasEdited');
      var ctx = canvas.getContext('2d');
      img.onload = function(matriz) {
          ctx.drawImage(img, 0, 0);
          var imageData = ctx.getImageData(0,0,alto_pixeles,ancho_pixeles)
          //se pasa a array con string por pixel
           ArrayColores=mostrarColores(imageData.data,alto_pixeles,ancho_pixeles)
           //se busca imprimir la matriz de forma ordenada, separando por fila
           var arrayImprimir=[] 
           var k=1
           for(var x=0;x<ArrayColores.length;x++){
               if(x==0){
                   arrayImprimir.push(ArrayColores[0])
               }
               else if(ancho_pixeles*k==(x)){
                   console.log(arrayImprimir)
                    var arrayImprimir=[]
                    arrayImprimir.push(ArrayColores[x])
                    k=k+1
               }
               else{
                arrayImprimir.push(ArrayColores[x])
               }
               
            }
        }
        
    }
     

     function mostrarColores(imgData){
         //Funcion que recorre el array de la imagen y va revisando cada pixel
         //recordar que por cada valor hay 4 datos: RGB y alpha
         //se asume pixel blanco a pixel con R & G & B > 220
         //se asume pixel blanco a pixel con R & G & B < 30
        //Input: ImageData {dato innato del lector iomagen}
        //Output: [array] con colores por pixel
        var colores=[]
        for (var i=0; i < imgData.length; i += 4) {
            if(imgData[i]<30 && imgData[i+1]<30 && imgData[i+2]<30){           
                colores.push('N') 
            }
            else if(imgData[i]>220 && imgData[i+1]>220 && imgData[i+2]>220){
               colores.push('B')
            }
            else{
                colores.push('O') 
            } }
        return colores
    }
          
     
     //Run Parte 2:
     nombre_archivo='foto2.png'
     console.log('\n \n \n  Parte 2:')
     console.log('Nombre archivo: '+nombre_archivo)
     console.log('Matriz color por pixel: ')
    CargarImagen(nombre_archivo, 50, 50)
    
    
     
  