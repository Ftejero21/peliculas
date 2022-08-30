export const GuardarEnStorage = (key,elemento) =>{
    // conseguir elementos que tenemos en el localEstorge 
    let elementos = JSON.parse(localStorage.getItem("Lista2"));


    console.log(elementos.lenght -1)

    // Comprobar si es una array
    if(Array.isArray(elementos)){
          // añadimos un elemento nuevo 
          elementos.push(elemento); 
    }else{
        elementos = [elemento];
    }

    

    


    // Guardar en el localStorage
    localStorage.setItem(key,JSON.stringify(elementos))

    // Devolver objeto
    return elemento


    
}