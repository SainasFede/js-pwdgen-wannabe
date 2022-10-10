let output;

const nomeUtente = prompt('Come ti chiami?')
const cognomeUtente = prompt('Qual è il tuo cognome?')
const colorePreferito = prompt('Qual e il tuo colore preferito?')

output = `
${nomeUtente}${cognomeUtente}${colorePreferito}22
`
console.log(output);

document.getElementById('passwordUser').innerHTML += output;