;(function(){

    
    /* settings = {
        parentElem:{ родительский элемент
            tagName:имя тега ('buttons', 'img')
            idName: тег id если нужно
            className:какие классы из CSS добавить
        },
        childElem:{
            tagName:имя тега
            className:класс для CSS
            coords:Координаты в порядке top,left,height,width
            number: номер элемента среди подобных
            constructor: конструктор для класса
            ...
            Другие элементы
        }
    } */    
    //абстрактный класс
    function myElement(settings){
        //сам элемент в DOM
        var elem;
        function createElement(tagName,className, coord) {
            this.elem = document.createElement(tagName);
            this.elem.classList.add(className);
            var [left, top, width, height] = coord.split(',');
            var style = this.elem.style;
            //задание размеров и позиционирования
            if(settings.scale != undefined){
                [style.top, style.left, style.height, style.width] = [
                Number(top)*settings.scale + 'px',
                Number(left) * settings.scale + 'px',
                Number(height) * settings.scale + 'px',
                Number(width) * settings.scale + 'px'];
            }
            else{
                [style.top, style.left, style.height, style.width] = [top + 'px', left + 'px', height + 'px', width + 'px'];
            }
            if(settings.name != undefined){
                this.name = settings.name;
            }
            this.elem.number = settings.number;
            this.elem.objectName = settings.objectName;
        };
        // this.elem = settings.number;//получаем номер виджета
        this.elem = elem;
        this.createElement = createElement;
    };

    function buttonClass(settings){
        //функциональное наследование
        myElement.call(this, settings);//вызов конструктора родителя
        this.createElement(settings.tagName,settings.className, settings.coord);
    };

    //общий класс для наковален тумблеров и лампочек
    function variationPictureClass(settings){
        myElement.call(this, settings);
        this.createElement(settings.tagName, settings.className, settings.coord);

        this.mode = settings.mode; //начальное положение
        // this.deskNumber = settings.deskNumber;//номер пульта

        function setMode(mode){

            // правильно
                this.elem.setAttribute('src', `images/buttons/${this.name}${this.elem.number}_mode_${mode}.png`);
                if(this.name = 'Lamp'){
                    if(mode == '1'){
                        // this.elem.style['box-shadow'] = '0px 0px 100px red, inset -0px -0px 50px red';
                    }
                }
            // добавление тени у кнопок(чтобы раз и красиво)
            // не правильно
            // this.elem.setAttribute('src', `images/buttons/Lamp0_mode_${mode}.png`);
        };

        this.setMode = setMode;
        this.setMode(settings.mode);
    };


    function сreateAndPlantElem(settings){

        var parentInfo = settings.parentElem;//родитель
        var childInfo = settings.childElem;//ребенок
        var coords = settings.coords;//координаты

        var parent = document.getElementById(parentInfo.idName);
        var elements = [];

        for(var i = 0 ; i < settings.coords.length; i++){
            childInfo.number = i;
            childInfo.coord = coords[i];
            elements.push(new childInfo.constructor(childInfo) );
            parent.appendChild(elements[i].elem);
        }
        return elements;
    };

    //конструкторы 
    window.buttonClass = buttonClass;
    window.variationPictureClass = variationPictureClass;

    //декоратор для создания элементов
    window.сreateAndPlantElem = сreateAndPlantElem;
    
})();