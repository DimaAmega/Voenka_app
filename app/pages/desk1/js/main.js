;(
    function(){
    ///////////////////////////////////////////////////////////////
    //Создание динамических элементов последовательности
    ///////////////////////////////////////////////////////////////
    var speed1 = new Speedo(
    {
        geometry:"383,78,180,180",
        path:"images/buttons/Pointer.png",
        startAngle:-30,
        number: 0,
        parametrsOfMoving:
        {
            OnRight:1, 
            speed:1,
        }
    });
    
    var speed2 = new Speedo(
    {
        geometry:"630,80,180,180",
        path:"images/buttons/Pointer1.png",
        startAngle:152,
        number: 1,
        parametrsOfMoving:
        {
            OnRight:1, //step
            speed:2, //fps
        }
    });
    var speed3 = new Speedo(
    {
            geometry: "940,142,122,122",
            path: "images/buttons/Pointer2.png",
            startAngle: 155,
            number: 2,
            parametrsOfMoving:
            {
                OnRight: 1,
                speed: 1,
            }
    });


        document.getElementById("speedometers").appendChild(speed1.getElem());
        document.getElementById("speedometers").appendChild(speed2.getElem());
        document.getElementById("speedometers").appendChild(speed3.getElem());


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
                scale: 0.75,
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
                name:'Lamp',
                mode:'0',
                constructor:variationPictureClass,
                scale: 0.75,
            },
            coords:coords.lamps,
        });

        var black_but = сreateAndPlantElem({
            parentElem: {
                tagName: 'div',
                idName: 'black_but',
                className: '',
            },
            childElem: {
                tagName: 'img',
                className: 'black',
                name: 'Black',
                mode: '0',
                constructor: variationPictureClass,
                scale: 0.75,
            },
            coords: coords.black,
        });

        var red_but = сreateAndPlantElem({
            parentElem: {
                tagName: 'div',
                idName: 'red_but',
                className: '',
            },
            childElem: {
                tagName: 'img',
                className: 'red',
                name: 'Red',
                mode: '0',
                constructor: variationPictureClass,
                scale: 0.75,
            },
            coords: coords.red,
        });

        var tumbs = сreateAndPlantElem({
            parentElem: {
                    tagName: 'div',
                    idName: 'tumbs',
                    className: '',
                },
                childElem: {
                    tagName: 'img',
                    className: 'tumb',
                    name:'Tumb',
                    mode: '1',
                    constructor: variationPictureClass,
                    scale:0.75,
                },
                coords: coords.tumbs,
        });

        var anvills = сreateAndPlantElem({
            parentElem: {
                tagName: 'div',
                idName: 'anvills',
                className: '',
            },
            childElem: {
                tagName: 'img',
                className: 'anvill',
                name: 'Anvil',
                mode: '0',
                constructor: variationPictureClass,
                scale: 0.75,
            },
            coords: coords.anvils,
        });
    
    
    //////////////////////////
    //Последовательность
    //////////////////////////

/*
В объекте настроек есть массив queque - это очередь - последоваательность. 
В этом массиве содержатся объекты, описывающие определённые этапы.
Описание объекта: 
    поля
            eventObject:'', - тип ожидаемого события
            number: 5, '' - номер эллемента - у каждого эллемента есть его id. Это его номер
            changeObject:{} - объект, который хранит объекты, которые должны измениться.
                arrLamps:[] - хранит массив объектов ламп - { num:'номер лампы',mode:'позиция ' - 0,2}
                video:...
                arrSpedometrs:...
*/ 
var settings_true = {
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
        tumbs:
            tumbs,
        anvills:
            anvills
    },
    ListPointsOfMark: [0,5,7,8],
    PointsForError:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    queue:[
        {
            eventObject:'button',
            number: 5,
            changeObject:{
                arrTumbs:[{num:4,mode:0}],
            }
        },
        {
            eventObject:'button',
            number: 6,
            changeObject:{
                arrLamps:[{num:3,mode:1}],
                arrTumbs:[{num:3,mode:2}],
            }
        },
        {
            eventObject:'button',
            number: 20,
            changeObject:{
                video:{
                    options:{
                        src:'videos/videoOpen.mp4',
                        width:500,
                        height:500,
                    },
                },
                arrTumbs:[{num:7,mode:0}],
            }
        },
        {
            eventObject:'video',
            changeObject:{
                arrLamps:[{num:4,mode:1}],
            },
            number: 0,
        },
        {
            eventObject:'button',
            number: 18,
            changeObject:{
            arrLamps:[{num:4,mode:0}],
            arrTumbs:[{num:7,mode:2}],

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
            changeObject:{
                arrLamps:[{num:2,mode:1}],
                
            },
            number: 0,
        },
        {
            eventObject:'button',
            number: 17,
            changeObject:{
                arrSpedometrs:[
                    {
                        speedNumber: 0,
                        endAngle: 40,
                        speed: 20,
                        OnRight: 0.7,
                    }
                ],
                arrTumbs:[{num:2,mode:0}],
            },
        },
        {
            eventObject:'speedo',
            number: 0,
            changeObject: { }
        },
        {
            eventObject:'button',
            number:16,
            changeObject: {
                arrSpedometrs: [
                    {
                        speedNumber: 0,
                        endAngle: -30,
                        speed: 20,
                        OnRight: -0.7,
                    }
                ],
                arrTumbs:[{num:2,mode:1}],
            },
        },
        {
            eventObject: 'speedo',
            number: 0,
            changeObject: { }
        },
        {
        eventObject: 'button',
        number: 15,
        changeObject: {
            arrSpedometrs: [
                {
                    speedNumber: 0,
                    endAngle: 255,
                    speed: 20,
                    OnRight: 1,
                },
                {
                    speedNumber: 1,
                    endAngle: 240,
                    speed: 20,
                    OnRight: 0.8,
                }
            ],
            arrTumbs:[{num:2,mode:2}],
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
                        num: 0,
                        mode: 1,
                    },
                    {
                        num: 1,
                        mode: 1,
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
                        endAngle: 330,
                        speed: 90,
                        OnRight:4,
                    }  
                ],
                arrAnvills:[
                    {
                        num: 1,
                        mode: 1,
                    }
                ],
            }
        },
        {
            eventObject: 'speedo',
            number: 2,
            changeObject: { }
        },
        {
            eventObject: 'button',
            number: 28,
            changeObject: {
                arrSpedometrs: [
                    {
                        speedNumber: 2,
                        endAngle: 390,
                        speed: 120,
                        OnRight:4,
                    },
                ],
                arrAnvills:[
                    {
                        num: 2,
                        mode: 1,
                    }
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
                        endAngle: 270,
                        speed: 120,
                        OnRight: -1,
                    },
                ],
                arrAnvills:[
                    {
                        num: 2,
                        mode: 2,
                    }
                ],
            }
        },
        {
            eventObject: 'speedo',
            number: 2,
            changeObject: { }
        },
        {
            eventObject: 'button',
            number: 31,
            changeObject: {
                arrLamps: [
                    {
                        num: 14,
                        mode: 0,
                    },
                ],

            }
        },
    ],
    LearningMessege: ['Кнопка 1 Эта кнопка предназначена для...',
                    'Кнопка 2 Эта кнопка предназначена для...',
                    'Кнопка 3 Эта кнопка предназначена для...',
                    'Кнопка 4 Эта кнопка предназначена для...',
                    'Кнопка 5 Эта кнопка предназначена для...',
                    'Кнопка 6 Эта кнопка предназначена для...',
                    'Кнопка 7 Эта кнопка предназначена для...',
                    'Кнопка 8 Эта кнопка предназначена для...',
                    'Кнопка 9 Эта кнопка предназначена для...',
                    'Кнопка 10 Эта кнопка предназначена для...',
                    'Кнопка 11 Эта кнопка предназначена для...'],
}

var  seq2 = new Sequence(settings_true);

}
)();

