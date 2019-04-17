var settinsForOrders = window.startSettings;
// order1 - единственная последовательность


var order1 = {
    elements: settinsForOrders.elements,
    ListPointsOfMark: [0, 0, 3, 5],
    PointsForError: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    minusTime:0,
    expectedTime:18,
    startSettings:settinsForOrders.order1,
    LearningMessege: [
        // '<p>Установите тумблер выбора вида управления  в положение МЕСТН</p>',
        // '<p>Переведите тумблер ПИТ УПР в положение ВКЛ</p>',
        // '<p>Закройте люки</p>',
        // '<p>Откройте люки</p>',
        // '<p>Проведите холодную прокрутку. <br> Дождитесь пока частота вращения ротора достигнет <br> 20-25%</p>',
        // '<p>Переведите тумблер в среднее положение. <br> Дождитесь, пока частота вращения ротора изделия плавно упадёт до 0% </p>',
        // '<p>Переведите переключатель запуска и холодной прокрутки в положение ЗАП</p>',
        // '<p>Включите нагрузку от ГАП, При этом вольтметр должен зарегистрировать напряжение на фазе A-B</p>',
        // '<p>Проверьте фазу B-C</p>',
        // '<p>Проверьте фазу C-A</p>',
        // '<p>Включите нагрузки, нажав на кнопку ВКЛЮЧЕНИЕ НАГРУЗОК ГАП</p>'
    ],
    queue: [
        {
            eventObject: 'button',
            number: 34,
            changeObject: {
                arrTumbs:[{num:0,mode:1}],
                // arrLamps:[{
                //     num:1,
                //     mode:4,
                // }],
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
                arrTables:[{num:2,mode:1}],                
            }
        },
        {
            eventObject: 'button',
            number: 21,
            changeObject: {
                arrButs: [{
                    num: 1,
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
                arrButs: [{
                    num: 3,
                    mode: 1
                }],
                arrLamps:[{num:3,mode:3},
                          {num:4,mode:3},
                          {num:5,mode:3},
                          {num:6,mode:3}],

            }
        },
        {
            eventObject: 'button',
            number: 27,
            changeObject: {
                arrButs: [{
                    num: 4,
                    mode: 1
                }],
                arrLamps:[{num:7,mode:3},
                          {num:8,mode:3},
                          {num:9,mode:3},
                          {num:10,mode:3}],

            }
        },
        {
            eventObject: 'button',
            number: 29,
            changeObject: {
                arrButs: [{
                    num: 5,
                    mode: 1
                }],
                arrLamps:[{num:11,mode:3},
                          {num:12,mode:3},
                          {num:13,mode:3},
                          {num:14,mode:3}],
            }
        },
        {
            eventObject: 'button',
            number: 31,
            changeObject: {
                arrButs: [{
                    num: 6,
                    mode: 1
                }],
                arrLamps:[{num:15,mode:3},
                          {num:16,mode:3},
                          {num:17,mode:3},
                          {num:18,mode:3}],
                arrTables:[{num:11,mode:1}],
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
    expectedTime:18,
    startSettings:settinsForOrders.order1,
    LearningMessege: [
        // '<p>Установите тумблер выбора вида управления  в положение МЕСТН</p>',
        // '<p>Переведите тумблер ПИТ УПР в положение ВКЛ</p>',
        // '<p>Закройте люки</p>',
        // '<p>Откройте люки</p>',
        // '<p>Проведите холодную прокрутку. <br> Дождитесь пока частота вращения ротора достигнет <br> 20-25%</p>',
        // '<p>Переведите тумблер в среднее положение. <br> Дождитесь, пока частота вращения ротора изделия плавно упадёт до 0% </p>',
        // '<p>Переведите переключатель запуска и холодной прокрутки в положение ЗАП</p>',
        // '<p>Включите нагрузку от ГАП, При этом вольтметр должен зарегистрировать напряжение на фазе A-B</p>',
        // '<p>Проверьте фазу B-C</p>',
        // '<p>Проверьте фазу C-A</p>',
        // '<p>Включите нагрузки, нажав на кнопку ВКЛЮЧЕНИЕ НАГРУЗОК ГАП</p>'
    ],
    queue: [
        {
            eventObject: 'button',
            number: 34,
            changeObject: {
                arrTumbs:[{num:0,mode:1}],
                // arrLamps:[{
                //     num:1,
                //     mode:4,
                // }],
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
                arrButs: [{
                    num: 1,
                    mode: 1
                }],
            }
        },
        {
            eventObject: 'button',
            number: 17,
            changeObject: {  
                arrLamps:[{num:1,mode:4}],
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
                arrButs: [{
                    num: 3,
                    mode: 1
                }],
                arrLamps:[{num:3,mode:3},
                          {num:4,mode:3},
                          {num:5,mode:3},
                          {num:6,mode:3}],

            }
        },
        {
            eventObject: 'button',
            number: 27,
            changeObject: {
                arrButs: [{
                    num: 4,
                    mode: 1
                }],
                arrLamps:[{num:7,mode:3},
                          {num:8,mode:3},
                          {num:9,mode:3},
                          {num:10,mode:3}],

            }
        },
        {
            eventObject: 'button',
            number: 29,
            changeObject: {
                arrButs: [{
                    num: 5,
                    mode: 1
                }],
                arrLamps:[{num:11,mode:3},
                          {num:12,mode:3},
                          {num:13,mode:3},
                          {num:14,mode:3}],
            }
        },
        {
            eventObject: 'button',
            number: 31,
            changeObject: {
                arrButs: [{
                    num: 6,
                    mode: 1
                }],
                arrLamps:[{num:15,mode:3},
                          {num:16,mode:3},
                          {num:17,mode:3},
                          {num:18,mode:3}],
                arrTables:[{num:11,mode:1}],
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