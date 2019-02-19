
;(
    function(){

    var speed1 = new Speedo(
    {
        geometry:"396,104,100,100",
        path:"images/buttons/Pointer.png",
        startAngle:0,
        number: 0,
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
        number: 1,
        parametrsOfMoving:
        {
            OnRight:1, //step
            speed:2, //fps
        }
    });
        var speed3 = new Speedo(
            {
                geometry: "906,150,80,80",
                path: "images/buttons/Pointer.png",
                startAngle: 180,
                number: 2,
                parametrsOfMoving:
                {
                    OnRight: 1,
                    speed: 1,
                }
            });

        // var videoOpen = new Video({
        //     src : 'videos/videoOpen.mp4',
        // });

        document.getElementById("speedometers").appendChild(speed1.getElem());
        document.getElementById("speedometers").appendChild(speed2.getElem());
        document.getElementById("speedometers").appendChild(speed3.getElem());

        //кнопки
        var buttons = сreateAndPlantElem({
            parentElem:{
                tagName:'div',
                idName:'buttons',
                className:''
            },
            childElem:{
                tagName:'button',
                objectName:'button',
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

        // var seq1 = new sequence({
        //     elements:{              //массивы всех эллементов, которые будут меняться
        //         speedometrs: [
        //             speed1,
        //             speed2
        //         ],
        //         buttons:
        //             buttons,
        //         lamps:
        //             lamps,
        //         // тумберы наковальни
        //     },
        //     queue:[    //массив объектов последовательности, в которыъ то, что надо поменять
        //         {
        //             butNumber:5,
        //             arrLamps:[
        //                 {
        //                     lampNum:1,
        //                     mode:1
        //                 },
        //                 {
        //                     lampNum: 2,
        //                     mode: 2
        //                 },
        //                 {
        //                     lampNum: 4,
        //                     mode: 2
        //                 },
        //                 {
        //                     lampNum: 9,
        //                     mode: 0
        //                 },
        //             ],
        //             nameEvent:'onclick',
        //         },
        //         {
        //             butNumber:15,
        //             arrLamps:[],
        //             arrSpedometrs:[
        //                 {
        //                     speedNumber:0,
        //                     endAngle: 70,
        //                     speed:20,
        //                     OnRight:0.3,
        //                 }
        //             ],
        //             nameEvent:'onclick',
        //         },
        //         {
        //             butNumber:9,
        //             arrSpedometrs:[
        //                 {
        //                     speedNumber:0,
        //                     endAngle: 20,
        //                     speed:20,
        //                     OnRight:0.4,
        //                     isReturn: false
        //                 },
        //                 {
        //                     speedNumber: 1,
        //                     endAngle: 380,
        //                     speed: 120,
        //                     OnRight: 0.4,
        //                     isReturn: true,
        //                 },
        //             ],
        //             arrLamps: [
        //                 {
        //                     lampNum: 5,
        //                     mode: 1
        //                 },
        //                 {
        //                     lampNum: 1,
        //                     mode: 2
        //                 },
        //                 {
        //                     lampNum: 7,
        //                     mode: 2
        //                 },
        //                 {
        //                     lampNum: 11,
        //                     mode: 0
        //                 },
        //             ],
        //             nameEvent: 'onmousedown',
        //         },
        //         {
        //             butNumber: 9,
        //             arrSpedometrs: [
        //                 {
        //                     speedNumber: 0,
        //                     endAngle: 0,
        //                     speed: 40,
        //                     OnRight: -0.4,
        //                 },
        //                     {
        //                     speedNumber: 1,
        //                     endAngle: 180,
        //                     speed: 120,
        //                     OnRight: -0.4,
        //                 },
        //             ],
        //             nameEvent: 'onmouseup',
        //         },
        //         {
        //             butNumber: 0,
        //             arrLamps: [
        //                 {
        //                     lampNum: 1,
        //                     mode: 0
        //                 },
        //                 {
        //                     lampNum: 5,
        //                     mode: 2
        //                 },
        //                 {
        //                     lampNum: 9,
        //                     mode: 1
        //                 },
        //                 {
        //                     lampNum: 7,
        //                     mode: 2
        //                 },
        //             ],
        //             nameEvent: 'onclick',
        //         },
        //     ],

        //     });
        //     seq1.init();
            var settings = {
                elements: {
                    speedometrs: [
                        speed1,
                        speed2,
                        speed3,
                    ],
                    buttons:
                        buttons,
                    lamps:
                        lamps,
                },
                queue:[
                    {
                        eventObject:'button',
                        number: 5,
                        changeObject:{
                            arrLamps:[
                                {
                                    num:0,
                                    mode:2
                                },
                                {
                                    num:4,
                                mode:1
                                },
                            ],
                            //добавить потом тумберы
                        }
                    },
                    {
                        eventObject:'button',
                        number: 18,
                        changeObject:{
                        video:{
                            options:{
                                src:'videos/videoOpen.mp4',
                                width:500,
                                height:500,
                            },
                        }
                     }
                    },
                    {
                        eventObject:'video',
                        changeObject:{},
                        number: 0,
                    },
                    {
                        eventObject:'button',
                        number: 17,
                        changeObject:{
                            arrSpedometrs:[
                                {
                                    speedNumber: 0,
                                    endAngle: 70,
                                    speed: 20,
                                    OnRight: 0.7,
                                }
                            ],
                        },
                    },
                    {
                        eventObject:'speedo',
                        number: 0,
                        changeObject: {
                            arrLamps: [
                                {
                                    num: 7,
                                    mode: 2,
                                },
                                {
                                    num: 9,
                                    mode: 2,
                                },
                            ],
                        }
                    },
                    {
                        eventObject:'button',
                        number:16,
                        changeObject: {
                            arrSpedometrs: [
                                {
                                    speedNumber: 0,
                                    endAngle: 0,
                                    speed: 20,
                                    OnRight: -0.7,
                                }
                            ],
                        },
                    },
                    {
                        eventObject: 'speedo',
                        number: 0,
                        changeObject: {
                            arrLamps: [
                                {
                                    num: 4,
                                    mode: 2,
                                },
                                {
                                    num: 13,
                                    mode: 2,
                                },
                            ],
                        }
                    },
                    {
                    eventObject: 'button',
                    number: 15,
                    changeObject: {
                        arrSpedometrs: [
                            {
                                speedNumber: 0,
                                endAngle: 285,
                                speed: 20,
                                OnRight: 1,
                            },
                            {
                                speedNumber: 1,
                                endAngle: 270,
                                speed: 20,
                                OnRight: 0.8,
                            }
                        ],
                    },
                    },
                    {
                        eventObject: 'speedo',
                        number: 1,
                        changeObject: {
                        }
                    },
                    {
                        eventObject: 'speedo',
                        number: 0,
                        changeObject: {
                            arrLamps: [
                                {
                                    num: 14,
                                    mode: 2,
                                },
                                {
                                    num: 15,
                                    mode: 2,
                                },
                            ],
                        }
                    },
                    {
                        eventObject: 'button',
                        number: 25,
                        changeObject: {
                            arrSpedometrs: [
                                {
                                    speedNumber: 2,
                                    endAngle: 360,
                                    speed: 120,
                                    OnRight:4,
                                },
                            ],

                        }
                    },
                    {
                        eventObject: 'speedo',
                        number: 2,
                        changeObject: {
                        }
                    },
                    {
                        eventObject: 'button',
                        number: 28,
                        changeObject: {
                            arrSpedometrs: [
                                {
                                    speedNumber: 2,
                                    endAngle: 320,
                                    speed: 120,
                                    OnRight: -1,
                                },
                            ],
                        }
                    },
                    {
                        eventObject: 'speedo',
                        number: 2,
                        changeObject: {
                        }
                    },
                    {
                        eventObject: 'button',
                        number: 29,
                        changeObject: {
                            arrSpedometrs: [
                                {
                                    speedNumber: 2,
                                    endAngle: 300,
                                    speed: 120,
                                    OnRight: -1,
                                },
                            ],
                        }
                    },
                    {
                        eventObject: 'speedo',
                        number: 2,
                        changeObject: {
                        }
                    },
                    {
                        eventObject: 'button',
                        number: 32,
                        changeObject: {
                        }
                    },


                    
                ],
            }

            var  seq2 = new Sequence(settings);


    }


)();

