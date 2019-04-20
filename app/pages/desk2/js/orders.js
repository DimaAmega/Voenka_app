;(function(){
    var settinsForOrders = window.startSettings;
    // order1 -включение
    // order2 -отключение 
   

    var order1 = {
        elements: settinsForOrders.elements,
        ListPointsOfMark: [0, 0, 3, 5],
        PointsForError: [5, 5, 5, 5, 5, 5],
        minusTime:0,
        expectedTime:3,
        startSettings:settinsForOrders.order1,
        LearningMessege: [
            '<p>Установите тумблер ПИТ УПР в положение ВКЛ</p>',
            '<p>Включите контроль сигнальных ламп</p>',
            '<p>Отключите контроль сигнальных ламп</p>',
            '<p>Включите нагрузку ГОМ</p>'],
        queue: [
            {
                eventObject: 'button',
                number: 0,
                changeObject: {
                    arrTumbs: [{
                        num: 0,
                        mode: 2
                    }],
                    arrLamps: [{
                        num: 0,
                        mode: 1
                    },
                    {
                        num: 5,
                        mode: 1
                    }],
                }
            },
            {
                eventObject: 'button',
                number: 4,
                changeObject: {
                    arrAnvills:[{num:0,mode:1}],
                    arrLamps:[
                        {num:1,mode:2},
                        {num:2,mode:1},
                        {num:3,mode:1},
                        {num:4,mode:1},
                        {num:6,mode:1},


                    ]
                }
            },
            {
                eventObject: 'button',
                number: 3,
                changeObject: {
                    arrAnvills:[{num:0,mode:0}],
                    arrLamps:[
                        {num:1,mode:0},
                        {num:2,mode:0},
                        {num:3,mode:0},
                        {num:4,mode:0},
                        {num:6,mode:0},

                    ]
                }
            },
            {
                eventObject: 'button',
                number: 5,
                changeObject: {
                    arrTumbs: [{
                        num: 1,
                        mode: 2
                    }],
                    arrLamps:[
                        {num:6,mode:1},
                    ]
                }
            },
        ],
    };
    var order2 = {
        elements: settinsForOrders.elements,
        ListPointsOfMark: [0, 0, 2.05, 4],
        PointsForError: [5, 5, 5, 5],
        minusTime:0,
        expectedTime:2,
        startSettings:settinsForOrders.order2,
        LearningMessege: [
        '<p>Отключите нагрузку ГОМ </p>',
        '<p>Переведите тумблер ПИТ УПР в положение ВЫКЛ</p>',
    ],
        queue: [
            {
                eventObject: 'button',
                number: 8,
                changeObject: {
                    arrRedBut:[{num:0,mode:1}],
                    arrLamps: [{
                        num: 6,
                        mode: 0
                    }
                ],
                }
            },
            {
                eventObject: 'button',
                number: 2,
                changeObject: {
                    arrTumbs:[{num:0,mode:0}],
                    arrLamps: [{
                        num: 5,
                        mode: 0
                    },
                    {
                        num:0,
                        mode:0,
                    }
                ],
                }
            },
           
        ]
    };

    //выносим настройки на уровень выше
    window.orders = [
        order1,
        order2,
    ];
})();