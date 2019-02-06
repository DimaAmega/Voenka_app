
var elem = new Speedo(
    {
        geometry:"210,44,100,100",
        path:"images/buttons/Pointer.png",
        startAngle:180,
        parametrsOfMoving:
        {
            OnRight:1, 
            speed:1,
        }
    });
var elem2 = new Speedo(
    {
        geometry:"349,44,100,100",
        path:"images/buttons/Pointer.png",
        startAngle:40,
        parametrsOfMoving:
        {
            OnRight:1, //step
            speed:2, //fps
        }
    });

    document.getElementById("main").appendChild(elem.getElem());
    document.getElementById("main").appendChild(elem2.getElem());
