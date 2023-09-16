let szam;
let tipp;
let lepesek;

function getRndInteger(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


function start()
{

    szam = getRndInteger(1, 100);
    lepesek = 0;
    document.getElementById("indit").disabled = true;
    document.getElementById("tipp").value = "";
    document.getElementById("vegered").innerHTML = '';

    
}

function ellen()
{
    tipp = document.getElementById("tipp").value;
    if (szam == tipp) 
    {
        //alert('Eltaláltad! Lépések száma "+lepesek+"');
        document.getElementById("vegered").innerHTML = 'Eltaláltad! Lépések száma: '+lepesek+'';
        document.getElementById("indit").disabled = false;

    }
    else if (szam > tipp)
    {
        //alert("Írj nagyobb számot!")
        document.getElementById("vegered").innerHTML = 'Írj nagyobb számot!';
        lepesek++;
    }
    else if (szam < tipp)
    {
        //alert("Írj kissebb számot!")
        document.getElementById("vegered").innerHTML = 'Írj kissebb számot!';
        lepesek++;
    }

    
}