;(function (){

    function Sequence(settings)
    {
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
        function getMessage() {
            return `Молодцы, ваше время -  ${timer.stopTimer()} секунды <br>
            Ваша оценка - ${check.getMark()} <br>
            Вы совершили  - ${check.getMistake()} ошибок`;
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
            
        };
        function showDialog(message) {
            $('#dialog').html(message).dialog({
                modal:true,
                draggable:false,
                buttons: [{text: "В Меню", click:function() {
                    $(this).dialog("close");
                    //редирект на главную
                }}],
                width:500,
                resizable:false,
                show: { effect: "blind",duration: 1000 },
                hide: { effect: "explode", duration: 1000 },
            });
        };
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
    //Сам обработчик - сердце программы
    //////////////////////////////////////////////////////////
        parentElement.addEventListener('myEvent', function(event){

            if (queue[currentIteration].number == event.target.number &&
             queue[currentIteration].eventObject == event.target.objectName){

                setModeForLamps(currentIteration);
                activateSpeedo(currentIteration);
                showVideo(currentIteration);

                if(currentIteration==0) timer.startTimer();
                if(currentIteration==queue.length-1) showDialog(getMessage());



                ++currentIteration; 
            }
            else{
                check.addMistake(PointsForError[currentIteration]);
                if(check.getMark()==2)  showDialog("Завалился");
            }  
        });

    };



    function Sequence2(settings)
    {
        var parentElement = document.getElementById('parentElement');
        var currentIteration = 0;
        var allButtons = settings.elements.buttons;
        var allLamps = settings.elements.lamps;
        var queue = settings.queue;
        var allSpedometers = settings.elements.speedometrs;
        var prevIteration = 0;
        var LearningMessege = settings.LearningMessege;
        var elemToolTip = document.getElementById('tooltip');
        var butCount = 0;


        
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
        function getMessage() {
            return `Молодцы, вы успешно прошли режим обучения`;
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
            
        };
        function showDialog2(message) {
            $('#dialog').html(message).dialog({
                modal:true,
                draggable:false,
                buttons: [{text: "В Меню", click:function() {
                    $(this).dialog("close");
                    //редирект на главную
                }}],
                width:500,
                resizable:false,
                show: { effect: "blind",duration: 1000 },
                hide: { effect: "explode", duration: 1000 },
            });
        };
        function showDialog(message) {
            $('#dialog').html(message).dialog({
                modal:true,
                draggable:false,
                buttons: [{text: "Хорошо", click:function() {
                    $(this).dialog("close");
                    //редирект на главную
                }}],
                width:500,
                resizable:false,
                show: { effect: "blind",duration: 1000 },
                hide: { effect: "explode", duration: 1000 },
            });
        };
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
        function setPositionTooltip(x,y) {
            elemToolTip.style.left = x;
            // elemToolTip.style.top = `${Number(y.slice(0,-2))-100}px`;
            elemToolTip.style.top = y;

        }
    //////////////////////////////////////////////////////////
    //Установка всех кнопок на клик обращаться к обработчику
    //////////////////////////////////////////////////////////
        for(var i=0;i < allButtons.length;i++){
            allButtons[i].elem.onclick = function(event){
                var event = new Event('myEvent', { 'bubbles': true, cancelable:false});
                this.dispatchEvent(event);
            }
        }



        allButtons[queue[0].number].elem.style.animation = 'clickOnMe 1s infinite ease-in-out';
        setPositionTooltip(allButtons[queue[0].number].elem.style.left,allButtons[queue[0].number].elem.style.top);
        elemToolTip.innerHTML = LearningMessege[butCount];
        elemToolTip.style.transform = 'translate(0,-120px)';



    //////////////////////////////////////////////////////////
    //Сам обработчик - сердце программы
    //////////////////////////////////////////////////////////
        parentElement.addEventListener('myEvent', function(event){

            if (queue[currentIteration].number == event.target.number &&
             queue[currentIteration].eventObject == event.target.objectName){

                setModeForLamps(currentIteration);
                activateSpeedo(currentIteration);
                showVideo(currentIteration);

                if(currentIteration==queue.length-1){
                    showDialog2(getMessage());
                } 

                ++currentIteration; 

                if(currentIteration!=queue.length&&queue[currentIteration].eventObject=='button'){
                    butCount++;

                    elemToolTip.style.opacity = 1;
                    elemToolTip.style.transform = 'translate(0,-120px)';
                    elemToolTip.innerHTML = LearningMessege[butCount];



                    allButtons[queue[currentIteration].number].elem.style.animation = 'clickOnMe 1s infinite ease-in-out';
                    allButtons[queue[prevIteration].number].elem.style.animation = '';
                    prevIteration = currentIteration;

                    setPositionTooltip(allButtons[queue[currentIteration].number].elem.style.left,allButtons[queue[currentIteration].number].elem.style.top);

                }
                else {
                    elemToolTip.style.opacity = 0;
                    elemToolTip.style.transform = 'translate(0,0px)';

                    allButtons[queue[prevIteration].number].elem.style.animation = '';
                }

            }
            else{
                showDialog('Вы совершили ошибку, не нажимайте на неподсвеченные клавиши!')
            }  
        });

    };

    window.Sequence = Sequence;
    window.Sequence2 = Sequence2;

})();