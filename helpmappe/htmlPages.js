//Initial setup
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('page').innerHTML = home
});

//Præcis kopi af vores front side, det er så vi kan komme tilbage til den :)
let home = `
<h1>Husk at give jeres body en ID</h1>
<h2> her er hoved siden </h2>
<h3>Men jeg har også en kopi af denne side der hedder "html1" i min javascript :))</h3>
<p> her er en masse billeder</p>
<p> her er en masse billeder</p>
<p> her er en masse billeder</p>
<p> her er en masse billeder</p>
<p> her er en masse billeder</p>
<p> her er en masse billeder</p>

<button id="carPage">Biler!:)</button>
<button id="iceCreamPage"> Is-Siden! </button>
`
//Vores side om is, mmm is er lækkert!
let iceCreamPage = `
<h1> På denne side viser vi en masse om IS!</h1>

<p> her er en masse IS :)))</p>
<p> her er en masse IS :)))</p>
<p> her er en masse IS :)))</p>
<p> her er en masse IS :)))</p>
<p> her er en masse IS :)))</p>
<p> her er en masse IS :)))</p>

<button id="carPage">Biler!:)</button>
<button id="home"> Home </button>
`
//Vores side om biler!
let carPage = `
<h1> På denne side viser vi en masse om BILER!</h1>

<p> her er en masse BILER :)))</p>
<p> her er en masse BILER :)))</p>
<p> her er en masse BILER :)))</p>
<p> her er en masse BILER :)))</p>
<p> her er en masse BILER :)))</p>
<p> her er en masse BILER :)))</p>

<button id="iceCreamPage"> Is-Siden! </button>
<button id="home"> Home </button>
`

document.getElementById('page').addEventListener('click', function (e) {
    let pages = {
        carPage: carPage,
        iceCreamPage, iceCreamPage,
        home: home
    }
    if (e.target.id) {
        let id = e.target.id
        document.getElementById('page').innerHTML = pages[id]
    }
})





