;(function(){
    // var buttons = cteateAndPlantElem({});

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
            mode: '3',
            constructor: lampsWithShadow,
            scale: 1,
        },
        coords: coords.lamps,
    });

    var anvills = сreateAndPlantElem({
        parentElem:{
            tagName:'div',
            idName:'anvills',
            className:'',
        },
        childElem:{
            tagName:'img',
            className:'anvill',
            name:'Anvill',
            mode:'1',
            constructor: variationPictureClass,
            scale:1,
        },
        coords:coords.anvils,
    });
    
    //какие то аквамариновые кнопки
    var buttons = сreateAndPlantElem({
        parentElem: {
            tagName: 'div',
            idName: 'buttonsZ',
            className: '',
        },
        childElem: {
            tagName: 'img',
            className: 'buttonZ',
            name: 'but',
            mode: '1',
            constructor: variationPictureClass,
            scale: 1,
        },
        coords: coords.buttons,
    });
    
    var table = сreateAndPlantElem({
        parentElem: {
            tagName: 'div',
            idName: 'tables',
            className: '',
        },
        childElem: {
            tagName: 'img',
            className: 'table',
            name: 'tablo',
            mode: '1',
            constructor: variationPictureClass,
            scale: 1,
        },
        coords: coords.tables,
    });

    var tumblers = сreateAndPlantElem({
        parentElem: {
            tagName: 'div',
            idName: 'tumbs',
            className: '',
        },
        childElem: {
            tagName: 'img',
            className: 'tumb',
            name: 'Tumb',
            mode: '0',
            constructor: variationPictureClass,
            scale: 1,
        },
        coords: coords.tumblers,
    });

    var cristalButtons = сreateAndPlantElem({
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
            scale: 1,
        },
        coords: coords.cristalButtons,
    });
})();