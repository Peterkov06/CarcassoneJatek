let pontszam = 0;



function ellen()
{
    pontszam = 0;
    
    //1
    szulev = document.getElementById("szuletesiev").value;
    szulhely = document.getElementById("szulhely").value;
    
    

    if (szulev == 1868 && szulhely == "Kenderes")
    {
        pontszam++;
        pontszam++;
        document.getElementById("szulpont").innerHTML="Helyes megoldás! 2 pont"
        console.log(pontszam)
    }
    else if(szulev == 1868)
    {
        pontszam++;
        document.getElementById("szulpont").innerHTML="Jó dátum, rossz helyszín! 1 pont"
        console.log(pontszam)
    }
    else if(szulhely == "Kenderes")
    {
        pontszam++;
        document.getElementById("szulpont").innerHTML="Rossz dátum, jó helyszín! 1 pont"
        console.log(pontszam)
    }
    else
    {
        document.getElementById("szulpont").innerHTML="Helytelen megoldás! 0 pont"
        console.log(pontszam)
    }

    //2
    pecs = document.getElementById("pecs").checked;
    debrecen = document.getElementById("debrecen").checked;
    pest = document.getElementById("pest").checked;
    sopron = document.getElementById("soproni").checked;

    if(debrecen == true && sopron == true)
    {
        pontszam++;
        pontszam++;
        document.getElementById("iskola").innerHTML="Helyes megoldás! 2 pont"
        console.log(pontszam)
    }
    else
    {
        document.getElementById("iskola").innerHTML="Helytelen megoldás! 0 pont"
        console.log(pontszam)
    }

    //3
    feles = document.getElementById("feles").value;

    if(feles == "Purgly Magdolna")
    {
        pontszam++;
        document.getElementById("felespont").innerHTML="Helyes megoldás! 1 pont"
        console.log(pontszam)
    }
    else
    {

        document.getElementById("felespont").innerHTML="Helytelen megoldás! 0 pont"
    }

    //4
    hajo = document.getElementById("hajo").value;

    if(hajo == "Novara")
    {
        pontszam++;
        document.getElementById("hajopont").innerHTML="Helyes megoldás! 1 pont"
        console.log(pontszam)
    }
    else if(hajo == "Novara gyorscirkáló")
    {
        pontszam++;
        document.getElementById("hajopont").innerHTML="Helyes megoldás! 1 pont"
        console.log(pontszam)
    }
    else
    {
        document.getElementById("hajopont").innerHTML="Helytelen megoldás! 0 pont"
    }

    //5
    otranto = document.getElementById("otranto").value;

    if(otranto == 1917)
    {
        pontszam++;
        document.getElementById("otpont").innerHTML="Helyes megoldás! 1 pont"
        console.log(pontszam)
    }
    else
    {
        document.getElementById("otpont").innerHTML="Helytelen megoldás! 0 pont"
    }

    //6
    fopar = document.getElementById("fopar").value;

    if(fopar == 1918)
    {
        pontszam++;
        document.getElementById("foparpont").innerHTML="Helyes megoldás! 1 pont"
        console.log(pontszam)
    }
    else
    {
        document.getElementById("foparpont").innerHTML="Helytelen megoldás! 0 pont"
    }

    //7
    esku = document.getElementById("esku").value;

    if(esku == "Jozsef foherceg")
    {
        pontszam++;
        document.getElementById("eskupont").innerHTML="Helyes megoldás! 1 pont"
        console.log(pontszam)
    }
    else
    {
        document.getElementById("eskupont").innerHTML="Helytelen megoldás! 0 pont"
    }

    //8
    tron = document.getElementById("tron").value;

    if(tron == 2)
    {
        pontszam++;
        document.getElementById("tronpont").innerHTML="Helyes megoldás! 1 pont"
        console.log(pontszam)
    }
    else
    {
        document.getElementById("tronpont").innerHTML="Helytelen megoldás! 0 pont"
    }
    
    //9
    rend = document.getElementById("rend").value;

    if(rend == "Vitéz")
    {
        pontszam++;
        document.getElementById("rendpont").innerHTML="Helyes megoldás! 1 pont"
        console.log(pontszam)
    }
    else if(rend == "Vitézi")
    {
        pontszam++;
        document.getElementById("rendpont").innerHTML="Helyes megoldás! 1 pont"
        console.log(pontszam)
    }
    else
    {
        document.getElementById("rendpont").innerHTML="Helytelen megoldás! 0 pont"
    }

    //10
    minisz = document.getElementById("minisz").value;

    if(minisz == "Gömbös Gyula")
    {
        pontszam++;
        document.getElementById("miniszpont").innerHTML="Helyes megoldás! 1 pont"
        console.log(pontszam)
    }
    else
    {
        document.getElementById("miniszpont").innerHTML="Helytelen megoldás! 0 pont"
    }

    //11
    esem = document.getElementById("esem").value;

    if(esem == "KassaBombazasa")
    {
        pontszam++;
        document.getElementById("esempont").innerHTML="Helyes megoldás! 1 pont"
        console.log(pontszam)
    }
    else
    {
        document.getElementById("esempont").innerHTML="Helytelen megoldás! 0 pont"
    }

    //12
    nemzetv = document.getElementById("nemzetv").value;

    if(nemzetv == "Szálasi Ferenc")
    {
        pontszam++;
        document.getElementById("nemzetvpont").innerHTML="Helyes megoldás! 1 pont"
        console.log(pontszam)
    }
    else if(nemzetv == "Szálasi Ferencnek")
    {
        pontszam++;
        document.getElementById("nemzetvpont").innerHTML="Helyes megoldás! 1 pont"
        console.log(pontszam)
    }
    else
    {
        document.getElementById("nemzetvpont").innerHTML="Helytelen megoldás! 0 pont"
    }
    
    //13
    kulf = document.getElementById("kulf").value;

    if(kulf == "Portu")
    {
        pontszam++;
        document.getElementById("kpont").innerHTML="Helyes megoldás! 1 pont"
        console.log(pontszam)
    }
    else
    {
        document.getElementById("kpont").innerHTML="Helytelen megoldás! 0 pont"
    }




    document.getElementById("opont").innerHTML="Összesen elért pontszámod: "+pontszam+" pont"
}