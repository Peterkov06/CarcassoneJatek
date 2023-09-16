let hp;
let szam;
let sebzes;
let ero;
let maradthp;

function getRndInteger(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function tamadas()
{
    hp = 50000;
    document.getElementById("korok").innerHTML = '';
    ero = document.getElementById("ero").value;
    for (let index = 1; index <= 20; index++) 
    {
        szam = getRndInteger(1,20)
        if (szam <= 4)
        {
            sebzes = 0;
        }
        else
        {
            sebzes = szam * ero;
        }

        maradthp = hp-sebzes;

        document.getElementById("korok").innerHTML += '<p>'+index+'. körben a generált érték:'+szam+' sebzés: '+sebzes+' maradt életerő: '+maradthp+'</p>';

        hp = maradthp;
    }

}