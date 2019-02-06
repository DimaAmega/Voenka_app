;(function (){

    function sequence(settings){
        var buttonQueue = getButtonQueue();
        var currentButtonNum = 0;
        var allButtons = settings.elements.buttons;
        var allSpedometers = settings.elements.speedometrs;
        var allLamps = settings.elements.lamps;


        function getButtonQueue(){
            var result = [];
            for(var i = 0; i < settings.queue.length; i++){
                result.push(settings.queue[i].butNumber);
            }
            return result;
        }

        function bindAllButtonsToModalWindow(){
            for(var i = 0; i < settings.elements.buttons.length; i++){
                settings.elements.buttons[i].elem.onclick = bindButtonToModalWindow;
            }

        };

        function bindButtonToModalWindow(event) {
            alert(`нажата кнопка ${this.number}`);
        };

        function setModeForLampsArr(currentButNum){
            if (settings.queue[currentButNum].arrLamps != undefined ){
                var currentLamps = settings.queue[currentButNum].arrLamps;
            }
            else{
                var currentLamps = [];
            }

            for (var i = 0; i < currentLamps.length; i++){
                allLamps[currentLamps[i].lampNum].setMode(currentLamps[i].mode);
            }
        };

        function activateSpeedo(currentButtonNum){
    
            if( settings.queue[currentButtonNum].arrSpedometrs != undefined ){
                var currentSpeedometers = settings.queue[currentButtonNum].arrSpedometrs;
            }
            else{
                var currentSpeedometers = [];
            }
            // console.log(allSpedometers);
            console.log(currentSpeedometers);

            for (var i = 0; i < currentSpeedometers.length; i++){
                allSpedometers[currentSpeedometers[i].speedNumber].endRotation().setParametrsOfMoving({
                    speed: currentSpeedometers[i].speed,
                    OnRight: currentSpeedometers[i].OnRight,
                    endAngle: currentSpeedometers[i].endAngle,
                }).startRotation();
            }

        };

        function handler() {
            //do action

            setModeForLampsArr(currentButtonNum); 
            activateSpeedo(currentButtonNum);






            //bind curent to modal
            this['onclick'] = null;
            this['onmouseup'] = null;
            this['onmousedown'] = null;
            if (settings.queue[currentButtonNum].nameEvent == 'onmousedown'){
                this['onclick'] = function (e) { this['onclick'] = bindButtonToModalWindow;};
            } else {
                this[settings.queue[currentButtonNum].nameEvent] = bindButtonToModalWindow;
            }




            //bint next to handler
            ++currentButtonNum; //next
            allButtons[settings.queue[currentButtonNum].butNumber].elem[settings.queue[currentButtonNum].nameEvent] = handler; // next 
        };

        this.init = function(){

            bindAllButtonsToModalWindow();


            allButtons[settings.queue[currentButtonNum].butNumber].elem['onclick'] = handler;


            // lamps = getLampsArr(0);
            // console.log(lamps)
            // setModeForLampsArr(1);
        };

    }



    window.sequence = sequence;
})();