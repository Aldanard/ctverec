const tlacitko = document.getElementById('vypocetMeny');
tlacitko.addEventListener('click',function() {
    let value = parseFloat(document.getElementById('stranaA').value);
console.log(value);
function vypocetObvodu(value1){
    return(value1*4);
}
function vypocetObsahu(value2){
    return(value2*value2);
    
}
document.getElementById('popok').innerHTML = "<p>" + vypocetObvodu(value1).toFixed(2) + "cm </p>";