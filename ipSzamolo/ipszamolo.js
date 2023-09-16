let eredetiMaszk;
let kettesMaszk;
let kettesHalo;
let ujMaszk;
let ujBinMaszk;
let egeszHalozati;
let reszHalozati;
let ujIP = [];
let egeszIpk;

function Szamolas()
{
    ujIP = []
    let halozat = document.getElementById("felosztando").value;
    let reszek = halozat.trim().split("/");
    eredetiMaszk = reszek[1];
    let eredetiHalo = reszek[0].split(".");
    let reszre = document.getElementById("reszre").value;
    let pluszHalozati;

    kettesMaszk = KettesKiegeszito(eredetiMaszk);
    kettesHalo = HaloAtalakitas(eredetiHalo);

    ujBinMaszk = UjMaszk(reszre);

    HalozatiReszKereso();

    if (reszre % 2 == 0)
    {
        pluszHalozati = Number(reszre / 2);
        ujMaszk = String(Number(eredetiMaszk) + Number(pluszHalozati));

        for (let f = 0; f < 2; f++)
        {
            let modositas = kettesHalo.slice();
            let modositando = [];
            modositando =  Array.from(modositas[egeszHalozati]);
            modositando[reszHalozati + pluszHalozati - 1] = String(f);
            modositas[egeszHalozati] = Lista2string(modositando);
            ujIP.push(modositas);
        }
    }

    egeszIpk = "";
    ujIP.forEach(element => {element.forEach(ipResz => {egeszIpk += kettes2tizedes(ipResz) + "."}); console.log(egeszIpk); egeszIpk = ""});

    let kulonbseg = Number(kettes2tizedes(ujIP[1][egeszHalozati])) - Number(kettes2tizedes(ujIP[0][egeszHalozati]));
    for(let i = 0; i < (reszre - 2); i++)
    {
        let kovetkezoIP = ujIP[ujIP.length - 1];
        let modositottOktett = Number(kettes2tizedes(kovetkezoIP[egeszHalozati])) + kulonbseg;
        kovetkezoIP[egeszHalozati] = tizedes2kettes(modositottOktett);
        console.log(kovetkezoIP[egeszHalozati]);
        ujIP.push(kovetkezoIP);
    }

    console.log(ujIP);
}

function UjMaszk(resz)
{
    let maszk = "";
    for (let i = 0; i < resz; i++)
    {
        maszk += "1"
    }
    return String(maszk);
}

function tizedes2kettes(dec)
{
    return (dec >>> 0).toString(2);
}

function kettes2tizedes(bin)
{
    return parseInt(bin, 2).toString(10);
}

function KettesKiegeszito(decimal)
{
    let ujKettes = String(tizedes2kettes(decimal));
    let hossz = ujKettes.length;
    if (hossz < 8)
    {
        for (let i  = 0; i < (8 - hossz); i++)
        {
            ujKettes = "0" + ujKettes;
        }
    }
    return ujKettes;
}

function HaloAtalakitas(halo)
{
    for (let i = 0; i < halo.length; i++)
    {
        halo[i] = KettesKiegeszito(halo[i]);
    }
    return halo;
}

function HalozatiReszKereso()
{
    egeszHalozati = Number(Math.floor(eredetiMaszk / 8)); //teljes oktett +1 (vagyis a módosítandó oktett indexe)
    reszHalozati = Number(eredetiMaszk % 8); // rész oktett, a módosítandó
}

function Lista2string(lista)
{
    let ujString = "";
    for (let i = 0; i < lista.length; i++)
    {
        ujString += String(lista[i]);
    }
    return ujString;
}