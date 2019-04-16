;
(function () {


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
    function myElement(settings) {
        var info = settings;
        this.createElement = function () {
            var tagName = info.tagName;
            var className = info.className;
            var coord = info.coord;
            this.elem = document.createElement(tagName);
            this.elem.classList.add(className);
            var [left, top, width, height] = coord.split(',');
            var style = this.elem.style;
            //задание размеров и позиционирования
            var scale = (settings.scale) ? (settings.scale) : 1;
            [style.top, style.left, style.height, style.width] = [
                Number(top) * settings.scale + 'px',
                Number(left) * settings.scale + 'px',
                Number(height) * settings.scale + 'px',
                Number(width) * settings.scale + 'px'
            ];
            if (settings.name != undefined) {
                this.name = settings.name;
            }
            this.elem.number = settings.number;
            this.elem.objectName = settings.objectName;
        };
        this.getHtmlElem = function () {
            return this.elem;
        }
    };

    function buttonClass(settings) {
        //функциональное наследование
        myElement.call(this, settings); //вызов конструктора родителя
    };

    //общий класс для наковален тумблеров и лампочек
    function variationPictureClass(settings) {
        myElement.call(this, settings);

        var parentCreateElement = this.createElement;
        this.createElement = function () {
            parentCreateElement.call(this);
            this.setMode(this.mode);
        }
        this.mode = settings.mode; //начальное положение

        this.setMode = function(mode) {
            this.elem.setAttribute('src', `images/buttons/${this.name}${this.elem.number}_mode_${mode}.png`);

        };
    };
    //кнопки с возвращаемым значением
    function returnModeClass(settings) {
        myElement.call(this, settings);

        var parentCreateElement = this.createElement;
        this.createElement = function(){
            parentCreateElement.call(this);
            this.setMode(this.mode);
        }
        this.mode = settings.mode;

        this.setMode = function(mode){
            if(mode == 0 ){
                this.elem.setAttribute('src', `images/buttons/${this.name}${this.elem.number}_mode_${mode}.png`)
            }
            else if(mode == 1){
                this.elem.setAttribute('src', `images/buttons/${this.name}${this.elem.number}_mode_${mode}.png`)
                //сменить картинку но через несколько секунд вернуть обратно
                setTimeout(() => {
                    this.setMode(0);
                }, 500);
            }
        };
    };

    function lampsWithShadow(settings) {
        info = settings;
        variationPictureClass.call(this, settings);

        var divShadow = document.createElement('div');
        var divContainer = document.createElement('div');

        var parentCreateElement = this.createElement;
        this.createElement = function createElement() {
            //конструктор базового класса 
            parentCreateElement.call(this);
            setStyleForDiv();
            divContainer.appendChild(this.elem);
            divContainer.appendChild(divShadow);
            this.setMode(this.mode);
        }

        this.getHtmlElem = function () {
            return divContainer;
        }

        function setStyleForDiv(){
            var coord = info.coord;
            var [left, top, width, height] = coord.split(',');
            var style = divShadow.style;
            //задание размеров и позиционирования
            var scale = (settings.scale) ? settings.scale : 1;
            [style.top, style.left, style.height, style.width] = [
                (Number(top) * settings.scale ) + 'px',
                (Number(left) * settings.scale ) + 'px',
                Number(height) * settings.scale + 'px',
                Number(width) * settings.scale + 'px',
            ];
            style['position'] = 'absolute';
            style['border-radius'] = '50%';
            style['transform'] = 'scale(0.7, 0.7)';
            style['transition'] = 'box-shadow 0.2s ease-in-out 0.05s';
        }

        //переопределенный setMode
        var parentSetMode = this.setMode;
        this.setMode = function(mode) {

            if (mode!=4) parentSetMode.call(this, mode); //меняем цвет лампы

            //меняем подсветку у div
            if (mode == 0){
                divShadow.style['box-shadow'] = "rgb(0,0,0,0) 0px 0px 0px 0px, rgb(83, 202, 92) 0px 0px 0px 0px inset";
            }
            if (mode == 1){
                divShadow.style['box-shadow'] = "rgb(83, 202, 92) 0px 0px 10px 1px, rgb(83, 202, 92) 0px 0px 30px 1px inset";
            }
            if(mode == 2){
                divShadow.style['box-shadow'] = "rgb(202, 83, 92) 0px 0px 10px 1px, rgb(202, 83, 92) 0px 0px 30px 1px inset";
            }
            if(mode == 3){
                divShadow.style['box-shadow'] = "rgb(255, 218, 53) 0px 0px 10px 1px, rgb(255, 218, 53) 0px 0px 30px 1px inset";
            }
            if(mode == 4){ //специальный режим мигания
                parentSetMode.call(this, 3);
                divShadow.style.animation = 'YellowBackLight 0.5s infinite ease';
                setTimeout(()=>{
                    divShadow.style.animation = '';
                    this.elem.dispatchEvent(new Event('myEvent', { 'bubbles': true, cancelable: false }));
                },2000)
            }                                       
        }
    }

    function сreateAndPlantElem(settings) {

        var parentInfo = settings.parentElem; //родитель
        var childInfo = settings.childElem; //ребенок
        var coords = settings.coords; //координаты

        var parent = document.getElementById(parentInfo.idName);
        var elements = [];

        for (var i = 0; i < settings.coords.length; i++) {
            childInfo.number = i;
            childInfo.coord = coords[i];
            elements.push(new childInfo.constructor(childInfo));
            elements[i].createElement();
            parent.appendChild(elements[i].getHtmlElem());
        }
        return elements;
    };

    //конструкторы 
    window.buttonClass = buttonClass;
    window.variationPictureClass = variationPictureClass;
    window.lampsWithShadow = lampsWithShadow;
    window.returnModeClass = returnModeClass;
    //декоратор для создания элементов
    window.сreateAndPlantElem = сreateAndPlantElem;

})();