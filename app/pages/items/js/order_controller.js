;(function(){
    // получение всех параметров
    //номер пульта
    var deskNumber = getAllUrlParams().deskNumber;
    //номер задания
    var mode1 = getAllUrlParams().mode1;
    //режим обучение/контроль
    var mode2 = getAllUrlParams().mode2;
    //первый пульт
    if (deskNumber == '1') {
        if(mode1 == '1'){
            if(mode2 == '1'){
                //режим обучения
            }
            else if (mode2 == '2'){
                //режим экзамена
            }
        }
    }
    else if (deskNumber == '1') {

    }

})();