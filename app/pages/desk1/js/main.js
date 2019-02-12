
;(
    function(){

    var speed1 = new Speedo(
    {
        geometry:"396,104,100,100",
        path:"images/buttons/Pointer.png",
        startAngle:0,
        parametrsOfMoving:
        {
            OnRight:1, 
            speed:1,
        }
    });
    var speed2 = new Speedo(
    {
        geometry:"629,104,100,100",
        path:"images/buttons/Pointer.png",
        startAngle:180,
        parametrsOfMoving:
        {
            OnRight:1, //step
            speed:2, //fps
        }
    });

        document.getElementById("speedometers").appendChild(speed1.getElem());
        document.getElementById("speedometers").appendChild(speed2.getElem());

        //кнопки
        var buttons = сreateAndPlantElem({
            parentElem:{
                tagName:'div',
                idName:'buttons',
                className:''
            },
            childElem:{
                tagName:'button',
                className:'cristal-button',
                constructor:buttonClass,
            },
            coords: coords.cristalButtons,
        });

        //лампы
        var lamps = сreateAndPlantElem({
            parentElem:{
                tagName:'div',
                idName:'lamps',
                className:'',
            },
            childElem:{
                tagName:'img',
                className:'lamp',
                mode:'0',
                constructor:variationPictureClass,
            },
            coords:coords.lamps,
        });

        var seq1 = new sequence({
            elements:{
                speedometrs: [
                    speed1,
                    speed2
                ],
                buttons:
                    buttons,
                lamps:
                    lamps,
                // тумберы наковальни
            },
            queue:[
                {
                    butNumber:5,
                    arrLamps:[
                        {
                            lampNum:1,
                            mode:1
                        },
                        {
                            lampNum: 2,
                            mode: 2
                        },
                        {
                            lampNum: 4,
                            mode: 2
                        },
                        {
                            lampNum: 9,
                            mode: 0
                        },
                    ],
                    nameEvent:'onclick',
                    // спидометры если нужно удерживать
                },
                {
                    butNumber:9,
                    arrSpedometrs:[
                        {
                            speedNumber:0,
                            endAngle: 20,
                            speed:20,
                            OnRight:0.4,
                            isReturn: false
                        },
                        {
                            speedNumber: 1,
                            endAngle: 380,
                            speed: 120,
                            OnRight: 0.4,
                            isReturn: true,
                        },
                    ],
                    arrLamps: [
                        {
                            lampNum: 5,
                            mode: 1
                        },
                        {
                            lampNum: 1,
                            mode: 2
                        },
                        {
                            lampNum: 7,
                            mode: 2
                        },
                        {
                            lampNum: 11,
                            mode: 0
                        },
                    ],
                    nameEvent: 'onmousedown',
                },
                {
                    butNumber: 9,
                    arrSpedometrs: [
                        {
                            speedNumber: 0,
                            endAngle: 0,
                            speed: 40,
                            OnRight: -0.4,
                            isReturn: false
                        },
                        {
                            speedNumber: 1,
                            endAngle: 180,
                            speed: 120,
                            OnRight: -0.4,
                            isReturn: true,
                        },
                    ],
                    nameEvent: 'onmouseup',
                },
                {
                    butNumber: 0,
                    arrLamps: [
                        {
                            lampNum: 1,
                            mode: 0
                        },
                        {
                            lampNum: 5,
                            mode: 2
                        },
                        {
                            lampNum: 9,
                            mode: 1
                        },
                        {
                            lampNum: 7,
                            mode: 2
                        },
                    ],
                    nameEvent: 'onclick',
                    // спидометры если нужно удерживать
                },
            ],

            });
            seq1.init();
    }
)();

