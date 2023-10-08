// Creare costanti collegate al codice html:
// - creare costante tramite ID del pulsante
const btnDOMElement = document.getElementById('btn-calc');
// - creare costante tramite ID dell'input KM
const inputDOMElement = document.getElementById('km-to-travel');
// - creare costante tramite CLASS del prezzo finale da mostrare
const priceDOMElement = document.querySelector('.price');
// - creare costante tramite ID dell'elemento select
const selDOMElement = document.getElementById('discount');
// Creare costante del prezzo base a seconda dei KM scelti:
const basePrice = (inputDOMElement * 0.21);
// Creare costante in caso di inserimento non valido:
// - costante risposta nel caso di inserimento di lettere
const invalidInputNaN = 'Please insert a NUMBER';
// - costante risposta nel caso di inserimento di numeri negativi
const invalidInputNeg = 'Please insert a NUMBER GREATER THAN ZERO';
// - Variabili username input:
//  - creare costante tramite ID dell'input NOME
const nameDOMElement = document.getElementById('user-name');
//  - creare costante con messaggio da mostrare in caso di NOME errato
const nameDOMError = document.querySelector('.error');
// - creare messaggio in caso di NOME errato
const invalidInputName = 'Please insert your NAME';
const invalidInputNumber = 'Please insert a NUMBER';
// Creare funzione con 'click listener':
btnDOMElement.addEventListener('click', function () {
    // - rilevare il dato inserito dal cliente nel input
    const km = parseFloat(inputDOMElement.value);
    // - calcolare il prezzo base a seconda del dato inserito dal cliente nell'input
    const basePrice = (parseFloat(inputDOMElement.value) * 0.21);
    // Validazione input utente:
    // - risposta in caso di nome non valido
    if (nameDOMElement.value === '') {
        priceDOMElement.innerHTML = invalidInputName;
        exit()
    }
    if (inputDOMElement.value === '') {
        priceDOMElement.innerHTML = invalidInputNumber;
        exit()
    }
    // - risposta in caso di numero negativo
    else if (inputDOMElement.value < 0) {
        priceDOMElement.innerHTML = invalidInputNeg;
    }
    // - risposta in caso di NaN
    else if (isNaN(inputDOMElement.value)) {
        priceDOMElement.innerHTML = invalidInputNaN;
    }
    // Calcolare il numero validato a seconda delle variabili del selettore:
    // - nel caso in cui il numero sia valido
    else if (!isNaN(inputDOMElement.value)) {
        {
            // - calcolare prezzo biglietto per utente underage
            if (selDOMElement.value === 'underage') {
                discountedPrice = (basePrice - basePrice * 0.2);
            }
            // - calcolare prezzo biglietto per utenti adulti
            else if (selDOMElement.value === 'adult') {
                discountedPrice = basePrice;
            }
            // - calcolare prezzo biglietto per utenti anziani
            else if (selDOMElement.value === 'over65') {
                discountedPrice = (basePrice - basePrice * 0.4);
            }
            // - stampare risultato del calcolo
            priceDOMElement.innerHTML = 'ONLY' + ' ' + discountedPrice.toFixed(2) + '&euro;';
        }
    }
})