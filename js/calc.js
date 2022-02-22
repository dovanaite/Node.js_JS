const sudetis = document.querySelector('#sudetis')
const atimtis = document.querySelector('#atimtis');
const dalyba = document.querySelector('#dalyba');
const daugyba = document.querySelector('#daugyba');
const veiksmas = document.querySelector('#action')
const skaiciuoti = document.querySelector('.button');
const rezultatas = document.querySelector('.result');


skaiciuoti.addEventListener('click', function() {
    let pirmasSkaicius = Number(document.querySelector('#first_number').value);
    console.log(pirmasSkaicius);
    let antrasSkaicius = Number(document.querySelector('#second_number').value);

    console.log('VEIKSMAS', veiksmas.value);
    let apskaiciuotasRezultatas

    const matematika = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '/': (a, b) => a / b,
        '*': (a, b) => a * b,
    };

    function rezultatoTekstas(e) {
        return rezultatas.textContent = `${pirmasSkaicius} ${e} ${antrasSkaicius} = ${matematika[e](pirmasSkaicius, antrasSkaicius)}`;
    }
    console.log(rezultatoTekstas('-'));


    if (veiksmas.value === '+') {
        apskaiciuotasRezultatas = pirmasSkaicius + antrasSkaicius;
        console.log('SUDĖTIS', Number(apskaiciuotasRezultatas));
        rezultatoTekstas('+');
    } else if (veiksmas.value === '-') {
        apskaiciuotasRezultatas = pirmasSkaicius - antrasSkaicius;
        console.log('ATIMTIS', Number(apskaiciuotasRezultatas));
        rezultatoTekstas('-');
    } else if (veiksmas.value === '/') {
        apskaiciuotasRezultatas = (pirmasSkaicius / antrasSkaicius).toFixed(2);
        console.log('DALYBA', Number(apskaiciuotasRezultatas));
        rezultatoTekstas('/');
    } else if (veiksmas.value === '*') {
        apskaiciuotasRezultatas = pirmasSkaicius * antrasSkaicius;
        console.log('DAUGYBA', Number(apskaiciuotasRezultatas));
        rezultatoTekstas('*');
    }
})