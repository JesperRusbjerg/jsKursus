//Initial setup
//Når siden loader bliver siden sat til hjemme siden
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('page').innerHTML = home
});

//Front page
let home = `
<h1 id="hej">Husk at give jeres body en ID</h1>
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
//Her sker alt magien, vi kigger på om en knap bliver trykket på
//Hvis den gør så sker følgende
document.getElementById('page').addEventListener('click', function (e) {
    // Vi har vores pages liggende i et objekt så vi let kan hente den side vi ønsker
    // Hvis vi vil tilføje en ny side, er det eneste vi nu skal gøre at
    //Tilføje den til pages objektet og selvfølgelig have en knap der linker dertil
    // Men så er alt det andet faktisk automatisk :)
    let pages = {
        carPage: carPage,
        iceCreamPage, iceCreamPage,
        home: home
    }
    //Her ser vi om det er et id der er trykket på
    if (e.target.id) {
        //Hvis det er, så laver vi HTML'en om til den knap der er trykket på
        //Vi forsøger kun at lave siden om hvis at id'et findes i objektet "pages"
        let id = e.target.id
        if(pages[id] != undefined){
            console.log("id found")
        
        document.getElementById('page').innerHTML = pages[id]
    }
    }
})





