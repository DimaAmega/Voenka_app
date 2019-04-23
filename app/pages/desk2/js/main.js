;
(
    function () {
        //////////
        ///СЖАТИЕ
        //////////
        scale = window.globalScale;
        ///////////////////////////////////////////////////////////////
        //Создание динамических элементов последовательности
        ///////////////////////////////////////////////////////////////
        
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
                constructor: returnModeClass,
                scale: scale,
            },
            coords: coords.red,
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
                buttons: buttons,
                lamps: lamps,
                tumbs: tumbs,
                anvills: anvills,
                redBut: red_but,
            },
            order1:{ 
                //формат: имя, положение
                // anvilsArr
                // lampsArr
                // tumbsArr
            },
            order2:{
                lampsArr:[[0,1],[5,1],[6,1]],
                tumbsArr:[[0,2],[1,2]],
            },
        };
        window.startSettings = startSettings;
    }
)();