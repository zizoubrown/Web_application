function hp(){ 
    var day = document.getElementById("day").value;
    var dd = parseInt(day)
    var month = document.getElementById("month").value;
    var mm = parseInt(month)
    var year = document.getElementById('year').value;
    var yy = parseInt(year)

    var weekDay = new Date(yy + "/" + mm + "/" + dd);
    var output = document.getElementById("output")
    var finalResults = weekDay.getDay()

    var male = document.getElementById('male');
    var female = document.getElementById('female');
    var maleNames=["kwasi","Kwadwo","kwabena","kwaku","yaw","kofi","kwame"];
    var femaleNames=["Akosuo","Adwoa","Abenna","Akua","Yaa","Afua","Ama"];
    var daysOfTheWeek=["Sunday", "Monday" , "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",]

    if (year<1900 || year>2100) {
        output.innerHTML = "Hey " + " please enter a valid year" 
    }
    else if (month <1 || month > 12) { 
        output.innerHTML = "Hey " + " please enter  valid month"
    }
    else if (day <1 || day >31 ) {
        output.innerHTML = "Hey " + " please enter a valid day"
    }
else if (male.checked) {
output.innerHTML = "Hey " + " your Akan name is " + maleNames[finalResults] + " you were born on "
 + daysOfTheWeek[finalResults] 
} 
else {
    output.innerHTML = "Hey " + " your Akan name is " + femaleNames[finalResults] + " you were born on " + daysOfTheWeek[finalResults]
};
}