
document.addEventListener("DOMContentLoaded", () => { fibonacci('hola'); }); const fibonacci = (n /* indice */) => {    // [0,1,1,2,3,5,8,13, ....];    
    let serie_fibonacci = [0, 1] // posicion 0 = 0 y posicion 1 = 1; [0,1,1]    
    n = Number(n); // NaN    
    if (n === 0 || n === 1) {
        return serie_fibonacci[n]
    }
    for (let i = 0; i <= n; i++) {
        if (i === 0 || i === 1) 
        { continue; } 
        else {
            const n1 = serie_fibonacci[i - 1]; 
            const n2 = serie_fibonacci[i - 2]; 
            serie_fibonacci.push(n1 + n2);            //serie_fibonacci[i] = n1 + n2;        
        }
    }
    console.log(serie_fibonacci);
    return serie_fibonacci[n]
}