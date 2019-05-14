
let person1 = {name: "jesper", favoritecolor: "grøn", job: "student"}
let person2 = {name: "niko", favoritecolor: "blå", job: "teacher"}
let person3 = {name: "adam", favoritecolor: "grøn", job: "CEO"}

let personArray = [person1, person2, person3]


let html = ""
for(i = 0; i < personArray.length; i++){
    let person = personArray[i];
    html += "<p>Person ved navn: " + person["name"] + " Har yndlings-farven " + person["favoritecolor"] + " og er " + person["job"] + "</p>"
}

console.log(html)


document.getElementById('magic').innerHTML = html