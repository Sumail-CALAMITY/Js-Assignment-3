//Temperature
var temp = prompt("Enter The Current Temperature in Celcius");
if(temp <=30){
    alert("Temperature is moderate")
}
else{
    alert("It's a hot day")
}


//Marksheet,Data entry

function generate(){
let namE, maths, english, urdu, islamiat, physics, nAme, totmark, totmarks, percent, percentage, grade, obtmarks, outof;
namE=(document.getElementById("naaam").value);
maths=parseFloat(document.getElementById("ma-marks").value);
english=parseFloat(document.getElementById("en-marks").value);
urdu=parseFloat(document.getElementById("ur-marks").value);
islamiat=parseFloat(document.getElementById("is-marks").value);
physics=parseFloat(document.getElementById("ph-marks").value);

nAme=document.getElementById("nAme1");
totmark=document.getElementById("totmar");
obtmarks=document.getElementById("obtmar");
percent=document.getElementById("per");
grade=document.getElementById("grd");

nAme.innerHTML=namE
obtmarks.innerHTML="500"
totmarks= maths+english+urdu+islamiat+physics;
totmark.innerHTML = totmarks;
percentage= totmarks/500*100;
percent.innerHTML = percentage;

if (percentage >= 80) {
    grade.innerHTML="A+"
}
else if ( percentage >= 70) {
    grade.innerHTML="A"
}
else if (percentage >= 60) {
    grade.innerHTML="B"
}
else if (percentage >= 50) {
    grade.innerHTML="C"
}
else if ( percentage >= 40) {
    grade.innerHTML="D"
}
else {
    grade.innerHTML="Failed"
}

}