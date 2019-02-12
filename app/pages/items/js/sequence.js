;(function (){

    //////////////////////////////////////////////////////////////
    //Функция создания последовательности
    //////////////////////////////////////////////////////////////
    function sequence(settings){
        // var buttonQueue = getButtonQueue();
        var currentButtonNum = 0;
        var allButtons = settings.elements.buttons;
        var allSpedometers = settings.elements.speedometrs;
        var allLamps = settings.elements.lamps;
        var Queue = settings.queue;
        var IsNext = true;


    //////////////////////////////////////////////////////////////
    //Служебные функции для обработки очереди в последовательности
    //////////////////////////////////////////////////////////////

    // function getButtonQueue(){
    //     var result = [];
    //     for(var i = 0; i < settings.queue.length; i++){
    //         result.push(settings.queue[i].butNumber);
    //     }
    //     return result;
    // }

     function bindAllButtonsToModalWindow(){
        for(var i = 0; i < allButtons.length; i++){
            allButtons[i].elem.onclick = bindButtonToModalWindow;
        }
    };

    function bindButtonToModalWindow(event) {
        alert(`нажата кнопка ${this.number}`);
    };

        function setModeForLamps(currentButNum){
            var currentLamps = [];
            if (Queue[currentButNum].arrLamps) currentLamps = Queue[currentButNum].arrLamps;

            for (var i = 0; i < currentLamps.length; i++){
                allLamps[currentLamps[i].lampNum].setMode(currentLamps[i].mode);
            }
        };

        function activateSpeedo(currentButtonNum){
            var currentSpeedometers = [];
    
            if( Queue[currentButtonNum].arrSpedometrs) currentSpeedometers = Queue[currentButtonNum].arrSpedometrs;

            for (var i = 0; i < currentSpeedometers.length; i++){
                allSpedometers[currentSpeedometers[i].speedNumber].endRotation().setParametrsOfMoving({
                    speed: currentSpeedometers[i].speed,
                    OnRight: currentSpeedometers[i].OnRight,
                    endAngle: currentSpeedometers[i].endAngle,
                }).startRotation();
            }
        };






        function handler() {  //обработчик
            //do action

            setModeForLamps(currentButtonNum); 
            activateSpeedo(currentButtonNum);


            //bind curent to modal
            this['onclick'] = null;
            this['onmouseup'] = null;
            this['onmousedown'] = null;
            if (Queue[currentButtonNum].nameEvent == 'onmousedown'){
                this['onclick'] = function (e) { this['onclick'] = bindButtonToModalWindow;};
            } else {
                this[Queue[currentButtonNum].nameEvent] = bindButtonToModalWindow;
            }



            //bint next to handler
            if(IsNext) ++currentButtonNum; //next
            allButtons[Queue[currentButtonNum].butNumber].elem[Queue[currentButtonNum].nameEvent] = handler; // next 
        };

        this.init = function() {
            bindAllButtonsToModalWindow();  //всё на модальное 
            allButtons[Queue[currentButtonNum].butNumber].elem[Queue[currentButtonNum].nameEvent] = handler; //установка начальной кнопки
        };

    }



    window.sequence = sequence;
})();