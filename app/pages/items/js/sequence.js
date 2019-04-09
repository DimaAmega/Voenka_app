;
(function () {
    /////////////////////////////////////////////////////////////// 
    //Служебные функции для обработки очереди в последовательности 
    /////////////////////////////////////////////////////////////// 
    function setModeForLamps(D) {
        var currentLamps = [];
        if (D.queue[D.currentIteration].changeObject.arrLamps) currentLamps = D.queue[D.currentIteration].changeObject.arrLamps;

        for (var i = 0; i < currentLamps.length; i++) {
            D.allLamps[currentLamps[i].num].setMode(currentLamps[i].mode);
        }
    };

    function setModeForAnvills(D) {
        var currenAnvills = [];
        if (D.queue[D.currentIteration].changeObject.arrAnvills) currenAnvills = D.queue[D.currentIteration].changeObject.arrAnvills;

        for (var i = 0; i < currenAnvills.length; i++) {
            D.allAnvills[currenAnvills[i].num].setMode(currenAnvills[i].mode);
        }
    };

    function getMessage() {
    return `Молодцы, ваше время - ${Number((D.timer.stopTimer()-D.minusTime).toFixed(2))} секунды <br> 
    Ваша оценка - ${D.check.getMark()} <br> 
    Вы совершили - ${D.check.getMistake()} ошибок`;
    };

    function showVideo(D) {
        var video;
        if (D.queue[D.currentIteration].changeObject.video) video = D.queue[D.currentIteration].changeObject.video;

        if (video) {
            var v_obj = new Video(video.options);
            document.getElementById('videos').appendChild(v_obj.getElem());
            v_obj.setPosition();
            v_obj.play();
        }

    };

    function showDialog(message) {
        $('#dialog').html(message).dialog({
            modal: true,
            draggable: false,
            buttons: [{
                text: "В Меню",
                click: function () {
                    $(this).dialog("close");
                    //редирект на главную 
                    window.location.href = '/../';
                }
            }],
            width: 500,
            resizable: false,
            show: {
                effect: "blind",
                duration: 1000
            },
            hide: {
                effect: "drop",
                duration: 1000
            },
        });
    };

    function activateSpeedo(D) {
        var currentSpeedometers = [];
        if (D.queue[D.currentIteration].changeObject.arrSpedometrs) currentSpeedometers = D.queue[D.currentIteration].changeObject.arrSpedometrs;
        for (var i = 0; i < currentSpeedometers.length; i++) {
            D.allSpedometers[currentSpeedometers[i].speedNumber].endRotation().setParametrsOfMoving({
                speed: currentSpeedometers[i].speed,
                OnRight: currentSpeedometers[i].OnRight,
                endAngle: currentSpeedometers[i].endAngle,
            }).startRotation();
        }
    };

    function setModeForTumbs(D) {
        var currentTumbs = [];
        if (D.queue[D.currentIteration].changeObject.arrTumbs) currentTumbs = D.queue[D.currentIteration].changeObject.arrTumbs;

        for (var i = 0; i < currentTumbs.length; i++) {
            D.allTumblers[currentTumbs[i].num].setMode(currentTumbs[i].mode);
        }
    };

    function getLocalVariables(settings) {
        return {
            parentElement: document.getElementById('parentElement'),
            currentIteration: 0,
            allButtons: settings.elements.buttons,
            allTumblers: settings.elements.tumbs,
            allLamps: settings.elements.lamps,
            allAnvills: settings.elements.anvills,
            queue: settings.queue,
            allSpedometers: settings.elements.speedometrs,
            ListPointsOfMark: settings.ListPointsOfMark,
            PointsForError: settings.PointsForError,
            timer: new Timer(),
            check: new Check(settings.ListPointsOfMark),
            elemToolTip: document.getElementById('tooltip'),
            LearningMessege: settings.LearningMessege,
            butCount: 0,
            prevIteration: 0,
            elemWarning: document.getElementById('warning'),
            startSettings:settings.startSettings,
            minusTime:settings.minusTime,
        };
    };

    function setPositionTooltip(x, y) {
        D.elemToolTip.style.left = x;
        // elemToolTip.style.top = `${Number(y.slice(0,-2))-100}px`; 
        D.elemToolTip.style.top = y;

    };

    function InspectButton(D) {
        D.allButtons[D.queue[D.currentIteration].number].elem.style.animation = 'clickOnMe 1s infinite ease-in-out';
        D.allButtons[D.queue[D.prevIteration].number].elem.style.animation = '';
        D.prevIteration = D.currentIteration;
    };

    function ShowToolTip(D) {
        D.elemToolTip.style.opacity = 0.75;
        D.elemToolTip.style.transform = 'translate(0,-120px)';
        D.elemToolTip.innerHTML = D.LearningMessege[D.butCount];
    };

    function HideToolTip(D) {
        D.elemToolTip.style.opacity = 0;
        D.elemToolTip.style.transform = 'translate(0,0px)';
    };

    function UnInspectButton(D) {
        D.allButtons[D.queue[D.prevIteration].number].elem.style.animation = '';
    };

    function showWarning(message) {
        D.elemWarning.innerHTML = message;
        D.elemWarning.style.top = '10px';
        D.elemWarning.style.opacity = '1';
        setTimeout(() => {
            D.elemWarning.style.opacity = '0';
            D.elemWarning.style.top = '-110px';
        }, 2000);
    };

    function setModeInBegin(D,startSettings){
        // лампы 
        var tmpElArr = startSettings['lampsArr'];
        if(tmpElArr) 
        for (var changeLamp = 0; changeLamp < tmpElArr.length; changeLamp++) {
            var number = tmpElArr[changeLamp][0];
            var mode = tmpElArr[changeLamp][1];
            D.allLamps[number].setMode(mode);
        }
        // тумблеры 
        var tmpElArr = startSettings['tumbsArr'];
        if(tmpElArr)
        for (var changeTumb = 0; changeTumb < tmpElArr.length; changeTumb++) {
            var number = tmpElArr[changeTumb][0];
            var mode = tmpElArr[changeTumb][1];
            D.allTumblers[number].setMode(mode);
        }
        //наковальни
        var tmpElArr = startSettings['anvilsArr'];
        if(tmpElArr)
        for (var changeAnvils = 0; changeAnvils < tmpElArr.length; changeAnvils++) {
            var number = tmpElArr[changeAnvils][0];
            var mode = tmpElArr[changeAnvils][1];
            D.allAnvills[number].setMode(mode);
        }
        var tmpElArr = startSettings['speedoArr'];
        if(tmpElArr)
        for (var changespeedo = 0; changespeedo < tmpElArr.length; changespeedo++) {
            var number = tmpElArr[changespeedo][0];
            var startAngle = tmpElArr[changespeedo][1];
            D.allSpedometers[number].setStartAngle(startAngle)
        }
    };


    //сделаем настройки для всех элементов
    function setModeForAllelements(D){
        setModeForLamps(D);
        activateSpeedo(D);
        showVideo(D);
        setModeForTumbs(D);
        setModeForAnvills(D)
    };
    ////////////////////////////////////////////////////////// 
    // РЕЖИМ ЭКЗАМЕНА 
    ////////////////////////////////////////////////////////// 
    function Exam(settings) {
        D = getLocalVariables(settings);
        setModeInBegin(D, D.startSettings);
        ////////////////////////////////////////////////////////// 
        //Установка всех кнопок на клик обращаться к обработчику 
        ////////////////////////////////////////////////////////// 
        for (var i = 0; i < D.allButtons.length; i++) {
            D.allButtons[i].elem.onclick = function (event) {
                var event = new Event('myEvent', {
                    'bubbles': true,
                    cancelable: false
                });
                this.dispatchEvent(event);
            }
        };
        ////////////////////////////////////////////////////////// 
        //Сам обработчик - сердце программы 
        ////////////////////////////////////////////////////////// 
        parentElement.addEventListener('myEvent', function (event) {
            if (D.queue[D.currentIteration].number == event.target.number &&
                D.queue[D.currentIteration].eventObject == event.target.objectName) {

                // setModeForLamps(D);
                // activateSpeedo(D);
                // showVideo(D);
                // setModeForTumbs(D);
                // setModeForAnvills(D);

                setModeForAllelements(D);

                if (D.currentIteration == 0) D.timer.startTimer();
                if (D.currentIteration == D.queue.length - 1) showDialog(getMessage());

                ++D.currentIteration;
            } else {
                D.check.addMistake(D.PointsForError[D.currentIteration]);
                if (D.check.getMark() == 2) showDialog("Завалился");
            }
        });

    };

    ////////////////////////////////////////////////////////// 
    // РЕЖИМ ОБУЧЕНИЯ 
    ////////////////////////////////////////////////////////// 
    function Training(settings) {
        D = getLocalVariables(settings);
        setModeInBegin(D, D.startSettings);
        ////////////////////////////////////////////////////////// 
        //Установка всех кнопок на клик обращаться к обработчику 
        ////////////////////////////////////////////////////////// 
        for (var i = 0; i < D.allButtons.length; i++) {
            D.allButtons[i].elem.onclick = function (event) {
                var event = new Event('myEvent', {
                    'bubbles': true,
                    cancelable: false
                });
                this.dispatchEvent(event);
            }
        };

        D.allButtons[D.queue[0].number].elem.style.animation = 'clickOnMe 1s infinite ease-in-out'; //подсвет первой кнопки 
        setPositionTooltip(D.allButtons[D.queue[0].number].elem.style.left, D.allButtons[D.queue[0].number].elem.style.top);

        ShowToolTip(D);
        D.elemToolTip.style.display = 'flex';
        ////////////////////////////////////////////////////////// 
        //Сам обработчик - сердце программы 
        ////////////////////////////////////////////////////////// 
        parentElement.addEventListener('myEvent', function (event) {

            if (D.queue[D.currentIteration].number == event.target.number &&
                D.queue[D.currentIteration].eventObject == event.target.objectName) {

                // setModeForLamps(D);
                // activateSpeedo(D);
                // showVideo(D);
                // setModeForTumbs(D);
                // setModeForAnvills(D);
                setModeForAllelements(D);

                if (D.currentIteration == D.queue.length - 1) showDialog('Вы успешно прошли режим обучения!');


                ++D.currentIteration;

                if (D.currentIteration != D.queue.length && D.queue[D.currentIteration].eventObject == 'button') {
                    D.butCount++;
                    InspectButton(D); //подсветить кнопку 
                    ShowToolTip(D); //показать подсказку 
                    setPositionTooltip(D.allButtons[D.queue[D.currentIteration].number].elem.style.left, D.allButtons[D.queue[D.currentIteration].number].elem.style.top); //переместить над кнопкой 
                } else {
                    HideToolTip(D);
                    UnInspectButton(D);
                }
            }
             else {
                showWarning('Вы совершили ошибку, не нажимайте на неподсвеченные клавиши!')
            }
        });

    };

    window.Exam = Exam;
    window.Training = Training;

})();

