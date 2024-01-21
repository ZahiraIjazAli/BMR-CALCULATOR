function bmr(){
    let height = document.querySelector("#h1").value
    let weight = document.querySelector("#w1").value
    let age = document.querySelector("#a").value
    let res = 66.47+(13.75*weight)+(5.003*height)-(6.755*age)
    document.querySelector("#change").innerHTML = `Your BMR Is: ${res}`
    console.log(change)
}