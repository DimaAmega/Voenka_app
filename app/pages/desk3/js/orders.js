var settinsForOrders = window.startSettings;
//order 1 - ДЭС
//order 2 - CВЭП

var order1 = {
    elements: settinsForOrders.elements,
    ListPointsOfMark: [0, 0, 3, 5],
    PointsForError: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    minusTime:0,
    expectedTime:27,
    startSettings:settinsForOrders.order1,
    LearningMessege: [
        '<p>Установите тумблер в положение  <br> ПИТ ЦЕПЕЙ УПР</p>',
        '<p>Переключатель РЕЖИМ установите в положение ПОЛН</p>',
        '<p>Выберите первичный источник питания <br> т.к. выбран режим питания от ДЭС, нажмите на кнопку <br> ВКЛ ДЭС+РПУ</p>',
        '<p>Включите электроснабжение РПН <br> Для этого нажмите на кнопку ВКЛ САЭС</p>',
        '<p>Включите средства автономного электроснабжения для пусковых комплексов<br> Для этого нажмите на кнопку ВКЛ ДЭС+РПУ</p>',
        '<p>Включите электроснабжение первого пускового комплекса</p>',
        '<p>Включите электроснабжение второго пускового комплекса</p>',
        '<p>Включите электроснабжение третьего пускового комплекса</p>',
        '<p>Включите электроснабжение четвёртого пускового комплекса</p>',
        '<p>Включите электроснабжение для аппаратуры НВО</p>',
    ],
    queue: [
        {
            eventObject: 'button',
            number: 34,
            changeObject: {
                arrTumbs:[{num:0,mode:1}],
                arrTables:[{
                    num:0,
                    mode:1,
                },
                {
                    num:1,
                    mode:1,
                }]
            }
        },
        {
        eventObject: 'button',
        number: 40,
        changeObject: {
            arrAnvills:[{
                num:0,
                mode:1,
            }],
            },
        },
        {
            eventObject: 'button',
            number: 3,
            changeObject: {
                arrLamps:[{num:0,mode:4}],
            }
        },
        {
            eventObject: 'lamp',
            number: 0,
            changeObject: {
                arrButs: [{
                    num: 0,
                    mode: 1
                }],
                arrLamps:[{num:0,mode:0}], 
                arrTables:[{num:10,mode:1}],                
            }
        },
        {
            eventObject: 'button',
            number: 5,
            changeObject: {
                arrLamps:[{num:20,mode:4}],
            }
        },
        {
            eventObject: 'lamp',
            number: 20,
            changeObject: {
                arrLamps:[{num:20,mode:0},
                    {num:21,mode:3},
                    {num:22,mode:3}],

                arrButs: [{
                    num: 10,
                    mode: 1
                }],          
            }
        },
        {
            eventObject: 'button',
            number: 1,
            changeObject: {  
                arrLamps:[{num:1,mode:4}],
              }
        },
        {
            eventObject: 'lamp',
            number: 1,
            changeObject: {
                arrButs: [{
                    num: 2,
                    mode: 1
                }],
                arrLamps:[{num:1,mode:0}],
                arrTables:[{num:12,mode:1},
                            {num:13,mode:1},
                            {num:14,mode:1},                
                            {num:15,mode:1}]
            }
        },
        {
            eventObject: 'button',
            number: 9,
            changeObject: {
                arrLamps:[{num:23,mode:4}]
            }
        },
        {
            eventObject: 'lamp',
            number: 23,
            changeObject: {
                    arrButs: [{
                        num: 12,
                        mode: 1
                    }],
                    arrLamps:[{num:23,mode:0},
                                {num:3,mode:3},
                                {num:4,mode:3},
                                {num:5,mode:3},
                                {num:6,mode:3}],
            } 
        },
        {
            eventObject: 'button',
            number: 11,
            changeObject: {
                arrLamps:[{num:24,mode:4}]
            }
        },
        {
            eventObject: 'lamp',
            number: 24,
            changeObject: {
                    arrButs: [{
                        num: 13,
                        mode: 1
                    }],
                    arrLamps:[{num:24,mode:0},
                                {num:7,mode:3},
                                {num:8,mode:3},
                                {num:9,mode:3},
                                {num:10,mode:3}],
            } 
        },
        {
            eventObject: 'button',
            number: 13,
            changeObject: {
                arrLamps:[{num:25,mode:4}]
            }
        },
        {
            eventObject: 'lamp',
            number: 25,
            changeObject: {
                    arrButs: [{
                        num: 14,
                        mode: 1
                    }],
                    arrLamps:[{num:25,mode:0},
                                {num:11,mode:3},
                                {num:12,mode:3},
                                {num:13,mode:3},
                                {num:14,mode:3}],
            } 
        },
        {
            eventObject: 'button',
            number: 15,
            changeObject: {
                arrLamps:[{num:26,mode:4}],
                arrTables:[{num:11,mode:1}],  
            }
        },
        {
            eventObject: 'lamp',
            number: 26,
            changeObject: {
                    arrButs: [{
                        num: 15,
                        mode: 1
                    }],
                    arrLamps:[{num:26,mode:0},
                                {num:15,mode:3},
                                {num:16,mode:3},
                                {num:17,mode:3},
                                {num:18,mode:3}],
            } 
        },
        {
            eventObject: 'button',
            number: 7,
            changeObject: {
                arrLamps:[{num:2,mode:4}],
                
            }
        },
        {
            eventObject: 'lamp',
            number: 2,
            changeObject: {
                arrButs: [{
                    num: 12,
                    mode: 1
                }],
                arrLamps:[{num:2,mode:0},
                            {num:19,mode:3},], 
                arrButs:[{num:11,mode:1}],                
            }
        },

    ]
};
var order2 = {
    elements: settinsForOrders.elements,
    ListPointsOfMark: [0, 0, 3, 5],
    PointsForError: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    minusTime:0,
    expectedTime:27,
    startSettings:settinsForOrders.order1,
    LearningMessege: [
        '<p>Установите тумблер в положение  <br> ПИТ ЦЕПЕЙ УПР</p>',
        '<p>Переключатель РЕЖИМ установите в положение ПОЛН</p>',
        '<p>Выберите первичный источник питания <br> т.к. выбран режим питания от СЕТИ, нажмите на кнопку <br> ВКЛ СЕТЬ+РПУ</p>',
        '<p>Включите электроснабжение РПН <br> Для этого нажмите на кнопку ВКЛ СВЭП</p>',
        '<p>Включите средства внешнего электропитания для пусковых комплексов<br> Для этого нажмите на кнопку ВКЛ СЕТЬ+РПУ</p>',
        '<p>Включите электроснабжение первого пускового комплекса</p>',
        '<p>Включите электроснабжение второго пускового комплекса</p>',
        '<p>Включите электроснабжение третьего пускового комплекса</p>',
        '<p>Включите электроснабжение четвёртого пускового комплекса</p>',
        '<p>Включите электроснабжение для аппаратуры НВО</p>',
    ],
    queue: [
        {
            eventObject: 'button',
            number: 34,
            changeObject: {
                arrTumbs:[{num:0,mode:1}],
                arrTables:[{
                    num:9,
                    mode:1,
                },
                {
                    num:8,
                    mode:1,
                }]
            }
        },
        {
        eventObject: 'button',
        number: 40,
        changeObject: {
            arrAnvills:[{
                num:0,
                mode:1,
            }],
            },
        },
        {
            eventObject: 'button',
            number: 19,
            changeObject: {
                arrLamps:[{num:0,mode:4}],
            }
        },
        {
            eventObject: 'lamp',
            number: 0,
            changeObject: {
                arrButs: [{
                    num: 9,
                    mode: 1
                }],
                arrLamps:[{num:0,mode:0}], 
                arrTables:[{num:2,mode:1}],                
            }
        },
        {
            eventObject: 'button',
            number: 21,
            changeObject: {
                arrLamps:[{num:20,mode:4}]
            }
        },
        {
          eventObject:'lamp',
          number:20,
          changeObject:{
            arrButs: [{
                num: 1,
                mode: 1
            }],
            arrLamps:[{num:22,mode:3},{num:21,mode:3}],
          }  
        },
        {
            eventObject: 'button',
            number: 17,
            changeObject: {  
                arrLamps:[{num:1,mode:4},{num:20,mode:0}],
              }
        },
        {
            eventObject: 'lamp',
            number: 1,
            changeObject: {
                arrButs: [{
                    num: 8,
                    mode: 1
                }],
                arrLamps:[{num:1,mode:0}],
                arrTables:[{num:3,mode:1},
                            {num:4,mode:1},
                            {num:5,mode:1},                
                            {num:6,mode:1}]
            }
        },
        {
            eventObject: 'button',
            number: 25,
            changeObject: {
                arrLamps:[{num:23,mode:4}]
            }
        },
        {
            eventObject: 'lamp',
            number: 23,
            changeObject: {
                    arrButs: [{
                        num: 3,
                        mode: 1
                    }],
                    arrLamps:[{num:23,mode:0},
                                {num:3,mode:3},
                                {num:4,mode:3},
                                {num:5,mode:3},
                                {num:6,mode:3}],
            } 
        },
        {
            eventObject: 'button',
            number: 27,
            changeObject: {
                arrLamps:[{num:24,mode:4}]
            }
        },
        {
            eventObject: 'lamp',
            number: 24,
            changeObject: {
                    arrButs: [{
                        num: 4,
                        mode: 1
                    }],
                    arrLamps:[{num:24,mode:0},
                                {num:7,mode:3},
                                {num:8,mode:3},
                                {num:9,mode:3},
                                {num:10,mode:3}],
            } 
        },
        {
            eventObject: 'button',
            number: 29,
            changeObject: {
                arrLamps:[{num:25,mode:4}]
            }
        },
        {
            eventObject: 'lamp',
            number: 25,
            changeObject: {
                    arrButs: [{
                        num: 5,
                        mode: 1
                    }],
                    arrLamps:[{num:25,mode:0},
                                {num:11,mode:3},
                                {num:12,mode:3},
                                {num:13,mode:3},
                                {num:14,mode:3}],
            } 
        },
        {
            eventObject: 'button',
            number: 31,
            changeObject: {
                arrLamps:[{num:26,mode:4}]
            }
        },
        {
            eventObject: 'lamp',
            number: 26,
            changeObject: {
                    arrButs: [{
                        num: 6,
                        mode: 1
                    }],
                    arrLamps:[{num:26,mode:0},
                                {num:15,mode:3},
                                {num:16,mode:3},
                                {num:17,mode:3},
                                {num:18,mode:3}],
            } 
        },
        {
            eventObject: 'button',
            number: 23,
            changeObject: {
                arrLamps:[{num:2,mode:4}],
                
            }
        },
        {
            eventObject: 'lamp',
            number: 2,
            changeObject: {
                arrButs: [{
                    num: 12,
                    mode: 1
                }],
                arrLamps:[{num:2,mode:0},
                            {num:19,mode:3},], 
                arrButs:[{num:7,mode:1}],                
            }
        },

    ]
};
window.orders = [
    order1,
    order2,
];