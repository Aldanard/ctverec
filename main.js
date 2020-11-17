const tlacitko = document.getElementById('tlacitko');
tlacitko.addEventListener('click',function() {
    let value = parseFloat(document.getElementById('stranaA').value);
console.log(value);
function vypocetObvodu(value){
    console.log(value*4);
    return(value*4);

}
function vypocetObsahu(value){

    console.log(value*value);
    return(value*value);
 
    
}
document.getElementById('papak').innerHTML = "<p> obvod je: " + vypocetObvodu(value).toFixed(2) + "cm </p>";
document.getElementById('pypyk').innerHTML = "<p> obsah je: " + vypocetObsahu(value).toFixed(2) + "cm² </p>";
});