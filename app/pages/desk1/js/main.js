;(
    function(){

        //кнопки
        buttons = сreateAndPlantElem({
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
        lamps = сreateAndPlantElem({
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
    }
)();