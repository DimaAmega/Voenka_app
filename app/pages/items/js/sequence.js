;(function (){


    function Sequence(settings){
        var parentElement = document.getElementById('parentElement');
        var currentIteration = 0;
        var allButtons = settings.elements.buttons;
        var allLamps = settings.elements.lamps;
        var queue = settings.queue;
        var allSpedometers = settings.elements.speedometrs;
        var ListPointsOfMark = settings.ListPointsOfMark;
        var PointsForError = settings.PointsForError;
        var timer = new Timer();
        var check = new Check(ListPointsOfMark);
        
    ///////////////////////////////////////////////////////////////
    //Служебные функции для обработки очереди в последовательности
    ///////////////////////////////////////////////////////////////
        function setModeForLamps(currentIteration) {
            var currentLamps = [];
            if (queue[currentIteration].changeObject.arrLamps) currentLamps = queue[currentIteration].changeObject.arrLamps;

            for (var i = 0; i < currentLamps.length; i++) {
                allLamps[currentLamps[i].num].setMode(currentLamps[i].mode);
            }
        };

        function showVideo(currentIteration) {
            var video;
            if (queue[currentIteration].changeObject.video) video = queue[currentIteration].changeObject.video;

            if (video) {
                var v_obj = new Video(video.options);
                document.getElementById('videos').appendChild(v_obj.getElem());
                v_obj.setPosition();
                v_obj.play();
            }
            
        }

        function activateSpeedo(currentIteration) {
            var currentSpeedometers = [];

            if (queue[currentIteration].changeObject.arrSpedometrs) currentSpeedometers = queue[currentIteration].changeObject.arrSpedometrs;

            for (var i = 0; i < currentSpeedometers.length; i++) {
                allSpedometers[currentSpeedometers[i].speedNumber].endRotation().setParametrsOfMoving({
                    speed: currentSpeedometers[i].speed,
                    OnRight: currentSpeedometers[i].OnRight,
                    endAngle: currentSpeedometers[i].endAngle,
                }).startRotation();
            }
        };

    //////////////////////////////////////////////////////////
    //Установка всех кнопок на клик обращаться к обработчику
    //////////////////////////////////////////////////////////
        for(var i=0;i < allButtons.length;i++){
            allButtons[i].elem.onclick = function(event){
                var event = new Event('myEvent', { 'bubbles': true, cancelable:false});
                this.dispatchEvent(event);
            }
        }
    //////////////////////////////////////////////////////////
    //Сам обработчик - сердце програмым
    //////////////////////////////////////////////////////////
        parentElement.addEventListener('myEvent', function(event){

            if (queue[currentIteration].number == event.target.number &&
             queue[currentIteration].eventObject == event.target.objectName){

                setModeForLamps(currentIteration);
                activateSpeedo(currentIteration);
                showVideo(currentIteration);

                
                if(currentIteration==0) timer.startTimer();
                if(currentIteration==queue.length-1) {

                    var messege = `Молодцы, ваше время -  ${timer.stopTimer()} секунды <br>
                    Ваша оценка - ${check.getMark()} <br>
                    Вы совершили  - ${check.getMistake()} ошибок`;
                    
                    $('#dialog').html(messege).dialog({
                        modal:true,
                        draggable:false,
                        buttons: [{text: "В Меню", click:function() {
                            $(this).dialog("close");
                            //редирект на главную
                        }}],
                        width:500,
                        resizable:false,
                        show: { effect: "fold",duration: 1000 },
                        hide: { effect: "explode", duration: 1000 }
                    });
                };

                ++currentIteration;
            }
            else{
                check.addMistake(PointsForError[currentIteration]);
            }  
        });

    };

    window.Sequence = Sequence;
})();