function Result1(){
    var calif = document.getElementById("Input1").value;  
    var clasif = "NA";
    if (calif <= 6) {
        clasif = "Calificación Mala";
    } 
    else if (calif >= 6 && calif <= 8){        
        clasif = "Calificación Normal";
    }
    else if (calif > 8 ){
        clasif = "Calificación Buena";
    }
    document.getElementById("ResultForm1").innerHTML = clasif;
}
function Result2(){

    var index = document.getElementById("Input2").value;
    var serialres =  JSON.stringify(Fibonacci(index));

    document.getElementById("ResultForm2").innerHTML = "Secuencia:" + serialres;
}

 // Serie Fibonacci: [0,1,2,3,5,8,13, ....];  
function Fibonacci(n) {
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
    return serie_fibonacci

}