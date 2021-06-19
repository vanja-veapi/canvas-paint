window.onload = function()
{
    document.querySelector(".el_olovke").style.display = "none";
    //Constants
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    const btn2 = document.getElementById("btn2");
    

    //Vars
    var pravougaonik = document.getElementById("pravougaonik");
    var olovka = document.getElementById("olovka");
    var btn = document.querySelector("#btn");
    var isAactive = false;





    //Listeners
    pravougaonik.addEventListener("click", Pravougaonik);
    olovka.addEventListener("click", Olovka);
    btn.addEventListener("click", NacrtajPravougaonik);
    btn2.addEventListener("click", Ocisti);



    //Functions
    function Olovka() 
    {
        isAactive = true;
        if(isAactive == true)
        {
            console.log("Olovka je aktivna");
            document.querySelector(".el_pravougaonika").style.display = "none";
            document.querySelector(".el_olovke").style.display = "block";
            Crtaj();
        }
        
    }
    var isDrawing = false;
    function Test(e)
        {
            x = e.offsetX
            y = e.offsetY
            isDrawing = true;
        }
    
    function Crtaj()
    {
    
        
        canvas.addEventListener("mousedown", Test)
        // {
        //     x = e.offsetX;
        //     y = e.offsetY
        //     isDrawing = true;
        // });
    
        canvas.addEventListener("mousemove", function(e)
        {
            if(isDrawing === true)
            {
                DrawLine(ctx, x, y, e.offsetX, e.offsetY);
                x = e.offsetX;
                y = e.offsetY; // Bez y ose dobije se barkod efekat
                console.log(x);
            }
        });
       
        canvas.addEventListener("mouseup", function(e)
        {
            if(isDrawing === true)
            {
                DrawLine(ctx, x, y, e.offsetX, e.offsetY);
                x = 0;
                y = 0;
                isDrawing = false;

                //Ako je u mouseup-u x = e.offsetX on ce da zapamti njegovu poslednju poziciju i dobicemo vezne linije
            }
        });
    
        function DrawLine(ctx, x1, y1, x2, y2)
        {
            let vrednost = document.getElementById("select").value;
            let boja = document.getElementById("color").value

            ctx.beginPath();
            ctx.strokeStyle = boja;
            ctx.lineWidth = vrednost;
            ctx.lineCap = "round";
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2,y2);
            ctx.stroke();
            ctx.closePath();
        }
    }

    function Pravougaonik() 
    {
        isAactive = false;
        if(isAactive == false)
        {
            document.querySelector(".el_pravougaonika").style.display = "block";
            document.querySelector(".el_olovke").style.display = "none";
            canvas.removeEventListener("mousedown", Test);
            console.log("Pravougaonik je aktivan");
        }  
    }

    function NacrtajPravougaonik(x, y, duzina, visina)    
    {
        var x_osa = document.getElementById("x-anchor").value;
        var y_osa = document.getElementById("y-anchor").value
        var duzina = document.getElementById("duzina").value;
        var visina = document.getElementById("visina").value;
        let boja = document.getElementById("color").value;

        ctx.fillStyle = boja;
        ctx.fillRect(x_osa, y_osa, duzina, visina);
        console.log("Kliknuo si na dugme");
        console.log("Duzina: " + duzina);
        console.log("Visina: " + visina);
        console.log("X osa: " + x_osa);
        console.log("Y-osa: " + y_osa);
        console.log("Boja: " + boja);
    }


    function Ocisti()
    {
        ctx.clearRect(0,0,1280,500);
        console.log("Ocistio si platno");
    }







    
    

}