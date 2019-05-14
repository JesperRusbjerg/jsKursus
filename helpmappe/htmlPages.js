//Initial setup
document.getElementById('sideOmIs').addEventListener('click', function () {
    document.getElementById('page').innerHTML = html2
})
document.getElementById('sideOmBiler').addEventListener('click', function () {
    document.getElementById('page').innerHTML = html3
})


let html1 = `
<h1>Husk at give jeres body en ID</h1>
<h2> her er hoved siden </h2>
<h3>Men jeg har også en kopi af denne side der hedder "html1" i min javascript :))</h3>
<p> her er en masse billeder</p>
<p> her er en masse billeder</p>
<p> her er en masse billeder</p>
<p> her er en masse billeder</p>
<p> her er en masse billeder</p>
<p> her er en masse billeder</p>

<button id="sideOmBiler">Biler!:)</button>
<button id="sideOmIs"> Is-Siden! </button>
`

let html2 = `
<h1> På denne side viser vi en masse om IS!</h1>

<p> her er en masse IS :)))</p>
<p> her er en masse IS :)))</p>
<p> her er en masse IS :)))</p>
<p> her er en masse IS :)))</p>
<p> her er en masse IS :)))</p>
<p> her er en masse IS :)))</p>

<button id="sideOmBiler">Biler!:)</button>
<button id="home"> Home </button>
`

let html3 = `
<h1> På denne side viser vi en masse om BILER!</h1>

<p> her er en masse BILER :)))</p>
<p> her er en masse BILER :)))</p>
<p> her er en masse BILER :)))</p>
<p> her er en masse BILER :)))</p>
<p> her er en masse BILER :)))</p>
<p> her er en masse BILER :)))</p>

<button id="sideOmIs"> Is-Siden! </button>
<button id="home"> Home </button>
`



document.getElementById('page').addEventListener('click', function (e) {
    if (e.target.id) {
        //Her skal i vide hvilke sider i har
        let id = e.target.id
        if (id == "sideOmIs") {
            document.getElementById('home').addEventListener('click', function () {
                document.getElementById('page').innerHTML = html1
            })
            document.getElementById('sideOmBiler').addEventListener('click', function () {
                document.getElementById('page').innerHTML = html3
            })
        } else if (id == "home") {
            document.getElementById('sideOmIs').addEventListener('click', function () {
                document.getElementById('page').innerHTML = html2
            })
            document.getElementById('sideOmBiler').addEventListener('click', function () {
                document.getElementById('page').innerHTML = html3
            })
        }else if (id == "sideOmBiler") {
            document.getElementById('home').addEventListener('click', function () {
                document.getElementById('page').innerHTML = html1
            })
            document.getElementById('sideOmIs').addEventListener('click', function () {
                document.getElementById('page').innerHTML = html2
            })
        }


    }
})





