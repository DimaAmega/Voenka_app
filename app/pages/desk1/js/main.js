;
(
    function () {
        //////////
        ///СЖАТИЕ
        //////////
        scale = 0.72
        ///////////////////////////////////////////////////////////////
        //Создание динамических элементов последовательности
        ///////////////////////////////////////////////////////////////
        var speed1 = new Speedo({
            geometry: "510.67,104,240,240",
            scale:scale,
            path: "images/buttons/Pointer.png",
            startAngle: -30,
            number: 0,
            parametrsOfMoving: {
                OnRight: 1,
                speed: 1,
            }
        });
        var speed2 = new Speedo({
            geometry: "840,106.66,240,240",
            scale:scale,
            path: "images/buttons/Pointer1.png",
            startAngle: 152,
            number: 1,
            parametrsOfMoving: {
                OnRight: 1, //step
                speed: 2, //fps
            }
        });
        var speed3 = new Speedo({
            geometry: "1253.33,189.33,162.66,162.66",
            scale:scale,
            path: "images/buttons/Pointer2.png",
            startAngle: 155,
            number: 2,
            parametrsOfMoving: {
                OnRight: 1,
                speed: 1,
            }
        });



        document.getElementById("speedometers").appendChild(speed1.getElem());
        document.getElementById("speedometers").appendChild(speed2.getElem());
        document.getElementById("speedometers").appendChild(speed3.getElem());

        var buttons = сreateAndPlantElem({
            parentElem: {
                tagName: 'div',
                idName: 'buttons',
                className: ''
            },
            childElem: {
                tagName: 'button',
                objectName: 'button',
                className: 'cristal-button',
                constructor: buttonClass,
                scale: scale,
            },
            coords: coords.cristalButtons,
        });
        //лампы
        var lamps = сreateAndPlantElem({
            parentElem: {
                tagName: 'div',
                idName: 'lamps',
                className: '',
            },
            childElem: {
                tagName: 'img',
                className: 'lamp',
                name: 'Lamp',
                mode: '0',
                constructor: lampsWithShadow,
                scale: scale,
            },
            coords: coords.lamps,
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
                scale: scale,
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
                scale: scale,
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
                name: 'Tumb',
                mode: '1',
                constructor: variationPictureClass,
                scale: scale,
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
                scale: scale,
            },
            coords: coords.anvils,
        });


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


        //////////////////////////////////////////////////
        //НАЧАЛЬНЫЕ ПОЛОЖЕНИЯ ЭЛЛЕМЕНТОВ И САМИ ЭЛЛЕМЕНТЫ/
        //////////////////////////////////////////////////
        var startSettings = {
            elements:{
                speedometrs: [
                        speed1,
                        speed2,
                        speed3,
                        ],
                buttons: buttons,
                lamps: lamps,
                tumbs: tumbs,
                anvills: anvills,
            },
            order1:{ 
                //формат: имя, положение
                anvilsArr:[
                    [1,2],
                    [2,0],
                ],
            },
            order2:{
                //формат: номер, положение
                lampsArr:[
                    [0,1],
                    [1,1],
                    [2,1],
                    [3,1],
                    [5,3],
                ],
                tumbsArr:[
                    [3,2],
                    [4,0],
                    [7,2],
                    [2,2],
                ],
                anvilsArr:[
                    [1,1],
                    [2,2],
                ],
                speedoArr:[
                    [0,255],
                    [1,240],
                    [2,390],
                ]
            },
            order3:{ 
                //формат: имя, положение
                anvilsArr:[
                    [1,1],
                    [2,0],
                ],
            },
            order4:{ 
                //формат: номер, положение
                lampsArr:[
                    [3,1],
                    [14,1],
                    [15,3],
                ],
                tumbsArr:[
                    [3,2],
                    [4,0],
                    [7,1],
                    [2,2],
                ],
                anvilsArr:[
                    [1,2],
                    [2,2],
                ],
            },
            order5:{ 
                anvilsArr:[
                    [1,2],
                    [2,0],
                ],
                lampsArr:[
                    [10,1]
                ],
            },
            order6:{ 
                tumbsArr:[
                    [4,0],
                    [3,2],
                ],
                anvilsArr:[
                    [1,0],
                    [2,0],
                ],
                lampsArr:[
                    [3,1],
                    [10,1],
                    [8,3],
                ],
                speedoArr:[
                    [2,270],
                ]
            },
        };
        window.startSettings = startSettings;
    }
)();