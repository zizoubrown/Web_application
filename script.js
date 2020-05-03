function hp (){ 
    let day = document.getElementById("day").value;
    let dd = parseInt(day)
    let month = document.getElementById("month").value;
    let mm = parseInt(month)
    let year = document.getElementById('year').value;
    let yy = parseInt(year)

    let weekDay = new Date(yy + "/" + mm + "/" + dd);
    let output = document.getElementById("output")
    let finalResults = weekDay.getDay()