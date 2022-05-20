const africa = ['Zebras', 'Liūtas',  '', 'Raganosis', '','Raganosis', 'Begemotas'];
const australia = ['Kengūra', 'Ančiasnapis', 'Dingo', 'Atsirado', 'Strutis'];

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//1. Tiesiogiai HTML faile rankiniu būdu sukurkite du tuščius <h2> tagus ir vieną mygtuką. (2 taškai)
//a. Paspaudus mygtuką kiekvienam tagui sugeneruotkite rand() atskirą skaičių nuo 1 iki 6 ir jį įrašykite 
//į tago vidų naudojant innerText() metodą. (4 taškai)
//b. Paspaudus mygtuką skaičiai turi būti pergeneruojami iš naujo. Jeigu sugeneruoti skaičiai yra vienodi, juos 
//nudažyti raudonai. (4 taškai)

const h2 = document.querySelector('h2');
const h22 = document.querySelector('h2 + h2');
const button = document.querySelector('button');

  button.addEventListener('click', () => {
    h2.innerText = (rand(1,6))
    h22.innerText = (rand(1,6))

    if(h2.innerText == h22.innerText){
        h2.style.color = 'red';
        h22.style.color = 'red';
    } else{
        h2.style.color = 'black';
        h22.style.color = 'black';
    }
});


//2. Tiesiogiai HTML faile rankiniu būdu sukurkite <h3> tagą ir vieną mygtuką. Susikurkite tuščią masyvą, skaičiams
//saugoti. (2 taškai)
//a. Paspaudus mygtuką, sugeneruokite rand() skaičių nuo 1 iki 10. Sugeneruotą skaičių pridėkite į masyvą, o tą 
//masyvą atspausdinkite konsolėle. (4 taškai)
//b. <h3> tage skaičiuokite ir su innerText() metodu rašykite visų sugeneruotų skaičių sumą. (4 taškai)

const skaiciai = [];
const h3 = document.querySelector('h3')
let skaiciuSuma = 0;
let skaicius = 0;
const button2 = document.querySelector('#button2');
console.log(button2)

button2.addEventListener('click', () => {
    let skaicius = rand(1,10);
    skaiciai.push(skaicius);
    console.log(skaiciai)
    skaiciuSuma = skaiciuSuma + skaicius
    console.log(skaiciuSuma)
    
    h3.innerText =(skaiciuSuma)

});


//3. Tiesiogiai HTML faile rankiniu būdu sukurkite <ul> tagą. (2 taškai)
//a. JS pagalba perskaitykite masyvą africa. (4 taškai)
//b. Naudodami createElement() ir kitus reikalingus metodus sukurkite kiekvienam masyvo elementui po <li> 
//tagą su elemento stringu viduje ir juos įrašykite į <ul> tago vidų. (5 taškai)
//c. Elementus su tuščiais stringais praleiskite ir jiems <li> elementų nekurkite. (4 taškai)

//4. Tiesiogiai HTML faile rankiniu būdu sukurkite du tuščius input laukelius, vieną <h5> tagą ir du mygtukus: “+” 
//ir “-”. (2 taškai)
//a. Suprogramuokite kalkuliatorių taip, kad įrašius skaičius į abu input laukelius ir paspaudus atitinkamą mygtuką
// su skaičiais būtų atlikta atitinkama aritmetinė operacija. (10 taškai)
//b. Jos rezultatas būtų atvaizduotas <h5> tage. (3 taškai)
//Pasirinkite patys sau patogiausius metodus tai atlikti.

//5. Tiesiogiai HTML faile rankiniu būdu sukurkite <ul> tagą. (2 taškai)
//a. JS pagalba perskaitykite masyvą australia ir kiekvieną masyvo elementą įrašykite į strigą su <li> 
//tagais iš abiejų pusių, o visus gautus stringus sudėkite į vieną bendrą stringą. (8 taškai)
//b. Tą stringą naudodami innerHTML() metodą įdėkite į <ul> tago vidų. (5 taškai)
//c. Generavimo metu “Dingo” background’ą nuspalvinkite mėlynai. (5 taškai)
//