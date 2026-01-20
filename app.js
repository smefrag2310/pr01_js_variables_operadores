document.querySelector("#btnA1").addEventListener("click", function(event){

    const mensaje = document.querySelector("#a1");
    mensaje.innerHTML = "";
    // Variables
    const precio= 49.99;
    let cantidad= 5;
    // Calcular el total, con toFixed(2) para mostrar dos decimales
     function CalcularTotal(cant) {
        const total = precio * cant;
        return `<h3>Cantidad: ${cant}<br>Precio: ${precio}<br>Total: ${total.toFixed(2)}</h3>`;
    }
    // Se muestra el mensaje con la cantidad, precio y total
    mensaje.innerHTML += CalcularTotal(cantidad);
    // Se aumenta la cantidad
    cantidad++;
    // Se vuelve a mostrar el mensaje con la nueva cantidad y precio total
    mensaje.innerHTML += CalcularTotal(cantidad);
});

document.querySelector("#btnA2").addEventListener("click", function(event){

    const mensaje = document.querySelector("#a2");
    mensaje.innerHTML = "";
    // Variables
    const edad= 18;
    const carnet= false;
    let adulto;
    // Función con operador para comprobar si es mayor de edad
    function MayorDeEdad(edad){
        if(edad >= 18){
            return adulto=true;
        }else{
            return adulto=false;
        }
    }
    // Llamada a la función
    adulto= MayorDeEdad(edad);
    // Mensaje final
    mensaje.innerHTML += `<h3>Edad: ${edad}<br>Mayor de edad: ${adulto}<br>Carnet: ${carnet}<br></h3>`;
    // Condicional para mostrar si puede conducir
    if(adulto && carnet){
        mensaje.innerHTML += `<h3>El usuario puede conducir</h3>`;
    }else{
        mensaje.innerHTML += `<h3>El usuario no puede conducir</h3>`;
    }
});

document.querySelector("#btnA3").addEventListener("click", function(event){

    const mensaje = document.querySelector("#a3");
    mensaje.innerHTML = "";
    // Variables
    let x= 5;
    let y1= x++;
    // Mensajes con los valores de x e y en cada caso
    mensaje.innerHTML += `<h3>Valor de x: ${x}<br>Valor de y: ${y1}<br></h3>`;
    let y2= ++x;
    mensaje.innerHTML += `<h3>Valor de x: ${x}<br>Valor de y: ${y2}<br></h3>`;
    // Reseteo de x
    x= 5;
    // Expresiones de combinación de suma y multiplicación, con y sin paréntesis
    const expresion1 = 4 + 5 * 6;
    const expresion2= (4 + 5) * 6;
    // Mensaje con los resultados de las expresiones
    mensaje.innerHTML += `<h3>Valor de la expresion 4 + 5 * 6: ${expresion1}<br>Valor de la expresion (4 + 5) * 6: ${expresion2}</h3>`;
});

document.querySelector("#btnA4").addEventListener("click", function(event){

    const mensaje = document.querySelector("#a4");
    mensaje.innerHTML = "";

    // Variables

    const cadena= "Pepe";
    const numero= 387;
    let concatenacion= cadena + numero;
    // Mensaje final
    mensaje.innerHTML += `<h3>Cadena: ${cadena}<br>Número: ${numero}<br>Concatenación: 
    ${concatenacion} <br> Tipo: ${typeof concatenacion}</h3>`;
});

