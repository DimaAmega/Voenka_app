;
(
    function () {
        ///////////////////////////////////////////////////////////////
        //Создание динамических элементов последовательности
        ///////////////////////////////////////////////////////////////
        var speed1 = new Speedo({
            geometry: "383,78,180,180",
            path: "images/buttons/Pointer.png",
            startAngle: -30,
            number: 0,
            parametrsOfMoving: {
                OnRight: 1,
                speed: 1,
            }
        });
        var speed2 = new Speedo({
            geometry: "630,80,180,180",
            path: "images/buttons/Pointer1.png",
            startAngle: 152,
            number: 1,
            parametrsOfMoving: {
                OnRight: 1, //step
                speed: 2, //fps
            }
        });
        var speed3 = new Speedo({
            geometry: "940,142,122,122",
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
                scale: 0.75,
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
                scale: 0.75,
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
                name: 'Tumb',
                mode: '1',
                constructor: variationPictureClass,
                scale: 0.75,
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
        /* 
        startSettings хранит вспомогательные элементы для последовательностей, будут импортированы во вне для файла AllOrders.js
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
                    [5,1],
                ],
                tumbsArr:[
                    [3,2],
                    [4,0],
                    [7,2],
                    [2,2],
                ],
                anvilsArr:[
                    [1,2],
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
                    [1,2],
                    [2,0],
                ],
            },
        };
        window.startSettings = startSettings;
    }
)();