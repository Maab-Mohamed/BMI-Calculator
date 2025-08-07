
document.getElementById("calculate").addEventListener("click", function(){

    var weight = document.getElementById("w").value
    var height = document.getElementById("h").value

      if (height == "" || weight == "") {
    alert("Please fill out the input fields!");
    return;
  }

    height = height / 100;
    var bmi = weight/(height*height)
      bmi = bmi.toFixed(2);
    document.querySelector("#result").innerHTML = bmi
    var t = ""
    if (bmi < 18.5){
        t = "Underweight"
    } else if (bmi < 25){
    t = "Healthy"
} else if ( bmi >= 25 && bmi < 30){
    t = "Overwight"
}
else if (bmi >= 30){
    t = "Obese"
}
document.querySelector(
    ".comment"
  ).innerHTML = `Comment: you are <span id="comment">${t}</span>`;

} 
)
