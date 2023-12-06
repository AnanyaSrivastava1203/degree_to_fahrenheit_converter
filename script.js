function convert(){
    var inputBox=document.getElementById("input-box").value;
    var anselement=document.getElementById("temp-in-fah");
    if(inputBox===''){
    alert("You must write some temperature!!");}
else{
    var x=inputBox*9/5+32;
    anselement.textContent="Temperature in Fahrenheit: "+x.toFixed(2)+"°F";
}
}