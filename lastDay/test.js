let html1 = `<h2> Mathias kan ikke spise en hel pizza </h2>`
let html2 = `
<table>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th> 
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td> 
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td> 
    <td>94</td>
  </tr>
</table>`
let html3 = `<h1> Hej Klasse </h1><br><br> 
    <p> Hvordan går det i dag </p>
    <p> Hos mig er det fint </p>
    <p> Hva med jer </p>
`

document.getElementById('b1').addEventListener('click', function(){
    document.getElementById('magic').innerHTML = html1
})
document.getElementById('b2').addEventListener('click', function(){
    document.getElementById('magic').innerHTML = html2
})
document.getElementById('b3').addEventListener('click', function(){
    document.getElementById('magic').innerHTML = html3
})

document.getElementById('b4').addEventListener('click', function(){
    document.getElementById('krop').innerHTML = html1 + html2 + html3
})