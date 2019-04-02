;(function(){
    /* 
    данный файл отвечает за запуск той или иной последовательности, того или иного режима
    */
    var deskNumber = Number(getAllUrlParams().desk);
    //номер задания
    var mode = Number(getAllUrlParams().mode);
    //режим обучение/контроль
    var type = Number(getAllUrlParams().type);
    //первый пульт

    console.log(deskNumber);
    console.log(mode);
    console.log(type);
    // deskNumber - номер пульта
    // mode - последовательность
    // type - режим -  обучение или экзамен
    var orders = window.orders;

    var types = [
        window.Training,
        window.Exam,
    ];

    //запустить режим type с последовательностью mode
    types[type](orders[mode]);
})();