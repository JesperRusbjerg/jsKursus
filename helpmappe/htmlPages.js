//Initial setup

//Når siden loader har den pt. 2 knapper "sideOmBiler", "sideOmIs", det er vigtigt at få sat de ID's med det
//samme, ellers crasher alt.. tilføjer du flere knapper skal du også tilføje flere event listeners
//som nedenstående
document.getElementById('sideOmIs').addEventListener('click', function () {
    document.getElementById('page').innerHTML = html2
})
document.getElementById('sideOmBiler').addEventListener('click', function () {
    document.getElementById('page').innerHTML = html3
})

//Præcis kopi af vores front side, det er så vi kan komme tilbage til den :)
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
//Vores side om is, mmm is er lækkert!
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
//Vores side om biler!
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

//Det her er "the tricky part".. Hvis du rigtigt vil forstå det google "event bubbling" og læs om det
document.getElementById('page').addEventListener('click', function (e) {
    //Når der bliver trykket på en knap har den et ID, så kun når man trykker på en knap sker nedenstående
    if (e.target.id) {
        //Først finder vi på linje 60 hvilken knap der blev trykket på
        //Her skal i vide hvilke sider i har
        let id = e.target.id
        //På siden om is skal jeg HERINDE tilføje event listeners til Is-sidens knapper
        //Jeg går op i min "html2" variable og ser at jeg har 2 knapper, derfor er der 2 elementer 
        //neden stående "if sætning"
        if (id == "sideOmIs") {
            //Første knap kan jeg se er en knap med id "home" derfor tilføjer jeg den
            document.getElementById('home').addEventListener('click', function () {
                //Her siger jeg at hvis knappen bliver trykket på skal den vise side 1
                document.getElementById('page').innerHTML = html1
            })
            //Ligeledes gør jeg her med biler,
            //Det her bliver "et lille pusslespil" jo flere knapper man får
            //men burde være til at håndtere hvis man bygger det stille og roligt op som man laver siden
            //Det er ikke verdens mest tekniske løsning, men den virker og er forståelig når man skal
            //lærer at code.. Så er de nemme løsninger de bedste =))))
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





