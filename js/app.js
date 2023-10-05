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
// CREARE COSTANTE MESSAGGIO ERROR:
const invalidInputNaN = 'Valore non valido, inserisci un NUMERO';
const invalidInputNeg = 'Valore non valido, inserisci un NUMERO MAGGIORE DI ZERO';
// Creare funzione con 'click listener':
btnDOMElement.addEventListener('click', function () {
    // - rilevare il dato inserito dal cliente nel input
    const km = parseFloat(inputDOMElement.value);
    // - calcolare il prezzo base a seconda del dato inserito dal cliente nell'input
    const basePrice = (parseFloat(inputDOMElement.value) * 0.21);
    // Calcolare lo sconto applicato a seconda della scelta:
    // - calcolare il prezzo per utenti minorenni
    if (inputDOMElement.value < 0) {
        priceDOMElement.innerHTML = invalidInputNeg;
    }
    else if (isNaN(inputDOMElement.value)) {
        priceDOMElement.innerHTML = invalidInputNaN;
    }

    else if (!isNaN(inputDOMElement.value)) {
        {
            if (selDOMElement.value === 'underage') {
                discountedPrice = (basePrice - basePrice * 0.2);
            }
            // - calcolare il prezzo per utenti adulti
            else if (selDOMElement.value === 'adult') {
                discountedPrice = basePrice;
            }
            // - calcolare il prezzo per utenti anziani
            else if (selDOMElement.value === 'over65') {
                discountedPrice = (basePrice - basePrice * 0.4);
            }
            priceDOMElement.innerHTML = discountedPrice.toFixed(2) + '&euro;';
        }
    }
})