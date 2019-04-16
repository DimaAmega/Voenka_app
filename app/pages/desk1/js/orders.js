;(function(){
    var settinsForOrders = window.startSettings;
    // order1 - работа от гап - включение
    // order2 - работа от гап - отключение 
    // order3 - работа от гом - включение
    // order4 - работа от гом - выключение
    // order5 - работа от свэп - включение
    // order6 - работа от свэп - выключение

    var order1 = {
        elements: settinsForOrders.elements,
        ListPointsOfMark: [0, 0, 3, 5],
        PointsForError: [10, 2, 2, 10, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        minusTime:40,
        expectedTime:30,
        startSettings:settinsForOrders.order1,
        LearningMessege: [
            '<p>Установите тумблер выбора вида управления  в положение МЕСТН</p>',
            '<p>Переведите тумблер ПИТ УПР в положение ВКЛ</p>',
            '<p>Закройте люки</p>',
            '<p>Откройте люки</p>',
            '<p>Проведите холодную прокрутку. <br> Дождитесь пока частота вращения ротора достигнет <br> 20-25%</p>',
            '<p>Переведите тумблер в среднее положение. <br> Дождитесь, пока частота вращения ротора изделия плавно упадёт до 0% </p>',
            '<p>Переведите переключатель запуска и холодной прокрутки в положение ЗАП</p>',
            '<p>Включите нагрузку от ГАП, При этом вольтметр должен зарегистрировать напряжение на фазе A-B</p>',
            '<p>Проверьте фазу B-C</p>',
            '<p>Проверьте фазу C-A</p>',
            '<p>Включите нагрузки, нажав на кнопку ВКЛЮЧЕНИЕ НАГРУЗОК ГАП</p>'
        ],
        queue: [
            // Проверка красной и черной кнопки
            /* {
                eventObject: 'button',
                number: 33,
                changeObject: {
                    arrRedBut: [{
                        num:0,
                        mode:1,
                    }],
                },
            },
            {
                eventObject: 'button',
                number: 33,
                changeObject: {
                    arrBlackBut: [{
                        num: 0,
                        mode: 1,
                    }],
                },
            }, */
            
            {
                eventObject: 'button',
                number: 5,
                changeObject: {
                    arrTumbs: [{
                        num: 4,
                        mode: 0
                    }],
                }
            },
            {
                eventObject: 'button',
                number: 6,
                changeObject: {
                    arrLamps: [{
                        num: 3,
                        mode: 1
                    }],
                    arrTumbs: [{
                        num: 3,
                        mode: 2
                    }],
                }
            },
            {
                eventObject: 'button',
                number: 20,
                changeObject: {
                    video: {
                        options: {
                            src: 'videos/videoOpen.mp4',
                            width: 500,
                            height: 500,
                        },
                    },
                    arrTumbs: [{
                        num: 7,
                        mode: 0
                    }],
                }
            },
            {
                eventObject: 'video',
                changeObject: {
                    arrLamps: [{
                        num: 4,
                        mode: 1
                    }],
                },
                number: 0,
            },
            {
                eventObject: 'button',
                number: 18,
                changeObject: {
                    arrLamps: [{
                        num: 4,
                        mode: 0
                    }],
                    arrTumbs: [{
                        num: 7,
                        mode: 2
                    }],

                    video: {
                        options: {
                            src: 'videos/videoOpen.mp4',
                            width: 500,
                            height: 500,
                        },
                    }

                }
            },
            {
                eventObject: 'video',
                changeObject: {
                    arrLamps: [{
                        num: 2,
                        mode: 1
                    }],

                },
                number: 0,
            },
            {
                eventObject: 'button',
                number: 17,
                changeObject: {
                    arrSpedometrs: [{
                        speedNumber: 0,
                        endAngle: 40,
                        speed: 20,
                        OnRight: 0.7,
                    }],
                    arrTumbs: [{
                        num: 2,
                        mode: 0
                    }],
                },
            },
            {
                eventObject: 'speedo',
                number: 0,
                changeObject: {}
            },
            {
                eventObject: 'button',
                number: 16,
                changeObject: {
                    arrSpedometrs: [{
                        speedNumber: 0,
                        endAngle: -30,
                        speed: 20,
                        OnRight: -0.7,
                    }],
                    arrTumbs: [{
                        num: 2,
                        mode: 1
                    }],
                },
            },
            {
                eventObject: 'speedo',
                number: 0,
                changeObject: {}
            },
            {
                eventObject: 'button',
                number: 15,
                changeObject: {
                    arrSpedometrs: [{
                            speedNumber: 0,
                            endAngle: 255,
                            speed: 20,
                            OnRight: 1,
                        },
                        {
                            speedNumber: 1,
                            endAngle: 240,
                            speed: 20,
                            OnRight: 0.8,
                        }
                    ],
                    arrTumbs: [{
                        num: 2,
                        mode: 2
                    }],
                },
            },
            {
                eventObject: 'speedo',
                number: 1,
                changeObject: {}
            },
            {
                eventObject: 'speedo',
                number: 0,
                changeObject: {
                    arrLamps: [{
                            num: 0,
                            mode: 1,
                        },
                        {
                            num: 1,
                            mode: 1,
                        },
                    ],
                }
            },
            {
                eventObject: 'button',
                number: 25,
                changeObject: {
                    arrSpedometrs: [{
                        speedNumber: 2,
                        endAngle: 330,
                        speed: 90,
                        OnRight: 4,
                    }],
                    arrAnvills: [{
                        num: 1,
                        mode: 1,
                    }],
                }
            },
            {
                eventObject: 'speedo',
                number: 2,
                changeObject: {}
            },
            {
                eventObject: 'button',
                number: 28,
                changeObject: {
                    arrSpedometrs: [{
                        speedNumber: 2,
                        endAngle: 390,
                        speed: 120,
                        OnRight: 1,
                    }, ],
                    arrAnvills: [{
                        num: 2,
                        mode: 1,
                    }],

                }
            },
            {
                eventObject: 'speedo',
                number: 2,
                changeObject: {}
            },
            {
                eventObject: 'button',
                number: 29,
                changeObject: {
                    arrSpedometrs: [{
                        speedNumber: 2,
                        endAngle: 270,
                        speed: 120,
                        OnRight: -1,
                    }, ],
                    arrAnvills: [{
                        num: 2,
                        mode: 2,
                    }],
                }
            },
            {
                eventObject: 'speedo',
                number: 2,
                changeObject: {}
            },
            {
                eventObject: 'button',
                number: 31,
                changeObject: {
                    arrLamps:[{num:5,mode:3}]
                 }
            },
        ],
    };
    var order2 = {
        elements: settinsForOrders.elements,
        ListPointsOfMark: [0, 0, 2.05, 4],
        PointsForError: [2, 2, 2, 2],
        minusTime:15,
        expectedTime:18,
        startSettings:settinsForOrders.order2,
        LearningMessege: [
        '<p>Отключите нагрузку ГАП </p>',
        '<p>Остановите ротор двигателя. <br> Дождитесь, пока указатель тахометра ОБОРОТЫ опустится до нуля </p>',
        '<p>Закройте люки</p>',
        '<p>Переведите тумблер ПИТ УПР в положение ОТКЛ</p>',
    ],
        queue: [{
                eventObject: 'button',
                number: 34,
                changeObject: {
                    arrLamps: [{
                        num: 5,
                        mode: 0,
                    }],
                }
            },
            {
                eventObject: 'button',
                number: 33,
                changeObject: {
                    arrLamps: [{
                        num: 0,
                        mode: 0,
                    },
                    {
                        num: 1,
                        mode: 0,
                    }],
                    arrSpedometrs: [{
                        speedNumber: 0,
                        endAngle: -30,
                        speed: 20,
                        OnRight: -1,
                    },
                    {
                        speedNumber: 1,
                        endAngle: 152,
                        speed: 10,
                        OnRight: -0.8,
                    }, 
                    {
                        speedNumber: 2,
                        endAngle: 155,
                        speed: 40,
                        OnRight: -10,
                    },
                ],
                }
            },
            {
                eventObject: 'speedo',
                number: 2,
                changeObject: { }
            },
            {
                eventObject: 'speedo',
                number: 1,
                changeObject: { }
            },
            {
                eventObject: 'speedo',
                number: 0,
                changeObject: { }
            },
            {
                eventObject: 'button',
                number: 20,
                changeObject: {
                    arrLamps: [{
                        num: 2,
                        mode: 0,
                    }],
                    arrTumbs:[{
                        num:7,
                        mode:0
                        },
                    ],
                    video: {
                        options: {
                            src: 'videos/videoOpen.mp4',
                            width: 500,
                            height: 500,
                        },
                    },
                }
            },
            {
                eventObject: 'video',
                number: 0,
                changeObject: {
                    arrLamps: [{
                        num: 4,
                        mode: 1,
                    }],
                },
            },
            {
                eventObject: 'button',
                number: 8,
                changeObject: {
                    arrLamps: [{
                        num: 3,
                        mode: 0,
                    }],
                    arrTumbs:[
                        {
                            num:3,
                            mode:0,
                        }
                    ]
                }
            },
        ]
    };
    var order3 = {
        elements: settinsForOrders.elements,
        ListPointsOfMark: [0, 0, 3, 5],
        PointsForError: [2, 2, 2, 2, 2, 2],
        minusTime:0,
        expectedTime:4.5,
        startSettings:settinsForOrders.order3,
        LearningMessege: [             
        '<p>Установите тумблер выбора вида управления  в положение МЕСТН</p>',
        '<p>Переведите тумблер ПИТ УПР в положение ВКЛ</p>',
        '<p>Проведите контроль сигнальных ламп</p>',
        '<p>Отключите контроль сигнальных ламп</p>',
        '<p>Переведите переключатель ВКЛ НАГР ГОМ - ВОЗБ. в положение ВОЗБ.</p>',
        '<p>Включите нагрузку, переведя переключатель ВКЛ НАГР ГОМ - ВОЗБ. в положение ВКЛ НАГР ГОМ</p>',
    ],
        queue: [{
                eventObject: 'button',
                number: 5,
                changeObject: {
                    arrTumbs: [{
                        num: 4,
                        mode: 0,
                    }],
                }
            },
            {
                eventObject: 'button',
                number: 6,
                changeObject: {
                    arrLamps: [{
                        num: 3,
                        mode: 1
                    }],
                    arrTumbs: [{
                        num: 3,
                        mode: 2
                    }],
                }
            },
            {
                eventObject: 'button',
                number: 23,
                changeObject: {
                    arrAnvills: [{
                        num: 0,
                        mode: 2,
                    }],
                    arrLamps: [{
                            num: 4,
                            mode: 2
                        },
                        {
                            num: 5,
                            mode: 3
                        },
                        {
                            num: 6,
                            mode: 2
                        },
                        {
                            num: 7,
                            mode: 2
                        },
                        {
                            num: 0,
                            mode: 1
                        },
                        {
                            num: 1,
                            mode: 1
                        },
                        {
                            num: 8,
                            mode: 3
                        },
                        {
                            num: 9,
                            mode: 3
                        },
                        {
                            num: 14,
                            mode: 1
                        },
                        {
                            num: 2,
                            mode: 1
                        },
                        {
                            num: 15,
                            mode: 3
                        },
                        {
                            num: 16,
                            mode: 3
                        },
                        {
                            num: 17,
                            mode: 3
                        },
                        {
                            num: 18,
                            mode: 2
                        },
                        {
                            num: 10,
                            mode: 1
                        },
                        {
                            num: 11,
                            mode: 2
                        },
                        {
                            num: 12,
                            mode: 1
                        },
                        {
                            num: 13,
                            mode: 2
                        },
                    ],
                }
            },
            {
                eventObject: 'button',
                number: 21,
                changeObject: {
                    arrAnvills: [{
                        num: 0,
                        mode: 0,
                    }],
                    arrLamps: [{
                            num: 4,
                            mode: 0
                        },
                        {
                            num: 5,
                            mode: 0
                        },
                        {
                            num: 6,
                            mode: 0
                        },
                        {
                            num: 7,
                            mode: 0
                        },
                        {
                            num: 0,
                            mode: 0
                        },
                        {
                            num: 1,
                            mode: 0
                        },
                        {
                            num: 8,
                            mode: 0
                        },
                        {
                            num: 9,
                            mode: 0
                        },
                        {
                            num: 14,
                            mode: 0
                        },
                        {
                            num: 15,
                            mode: 0
                        },
                        {
                            num: 2,
                            mode: 0
                        },
                        {
                            num: 15,
                            mode: 0
                        },
                        {
                            num: 16,
                            mode: 0
                        },
                        {
                            num: 17,
                            mode: 0
                        },
                        {
                            num: 18,
                            mode: 0
                        },
                        {
                            num: 10,
                            mode: 0
                        },
                        {
                            num: 11,
                            mode: 0
                        },
                        {
                            num: 12,
                            mode: 0
                        },
                        {
                            num: 13,
                            mode: 0
                        },
                    ],
                }
            },
            {
                eventObject: 'button',
                number: 38,
                changeObject: {
                    arrLamps: [{
                        num: 14,
                        mode: 1
                    }],
                    arrTumbs: [{
                        num: 6,
                        mode: 0
                    }],
                }
            },
            {
                eventObject: 'button',
                number: 36,
                changeObject: {
                    arrLamps: [{
                        num: 15,
                        mode: 3
                    }],
                    arrTumbs: [{
                        num: 6,
                        mode: 2
                    }],
                }
            },
        ],
    };
    var order4 = {
        elements: settinsForOrders.elements,
        ListPointsOfMark: [0, 0, 0.1, 0.2],
        PointsForError: [3, 3],
        minusTime:0,
        expectedTime:1,
        startSettings:settinsForOrders.order4,
        LearningMessege: ['Кнопка 1 Эта кнопка предназначена для...',
        'Кнопка 2 Эта кнопка предназначена для...',
    ],
        queue: [{
                eventObject: 'button',
                number: 35,
                changeObject: {
                    arrLamps: [{
                        num: 15,
                        mode: 0
                    }],
                }
            },
            {
                eventObject: 'button',
                number: 8,
                changeObject: {
                    arrLamps: [{
                        num: 3,
                        mode: 0
                    },
                    {
                        num: 14,
                        mode: 0
                    }],
                }
            },

        ]
    };
    var order5 = {
        elements: settinsForOrders.elements,
        ListPointsOfMark: [0, 0, 2, 3],
        PointsForError: [1, 1, 1, 1, 1, 1, 1, 1],
        minusTime:0,
        expectedTime:9,
        startSettings:settinsForOrders.order5,
        LearningMessege: [
        '<p>Установите тумблер выбора вида управления  в положение МЕСТН</p>',
        '<p>Переведите тумблер ПИТ УПР в положение ВКЛ</p>',
        '<p>Проведите контроль сигнальных ламп</p>',
        '<p>Отключите контроль сигнальных ламп</p>',
        '<p>Включите нагрузку от ВВОД1 При этом вольтметр должен зарегистрировать напряжение на фазе A-B</p>',
        '<p>Проверьте фазу B-C</p>',
        '<p>Проверьте фазу C-A</p>',
        '<p>Нажмите на кнопку ВКЛЮЧЕНИЕ НАГРУЗОК  ВВОД1</p>',
    ],
    queue: [{
        eventObject: 'button',
        number: 5,
        changeObject: {
            arrTumbs: [{
                num: 4,
                mode: 0
            }],
        }
    },
    {
        eventObject: 'button',
        number: 6,
        changeObject: {
            arrLamps: [{
                num: 3,
                mode: 1
            }],
            arrTumbs: [{
                num: 3,
                mode: 2
            }],
        }
    },
    {
        eventObject: 'button',
        number: 23,
        changeObject: {
            arrAnvills: [{
                num: 0,
                mode: 2,
            }],
            arrLamps: [{
                    num: 4,
                    mode: 2
                },
                {
                    num: 5,
                    mode: 3
                },
                {
                    num: 6,
                    mode: 2
                },
                {
                    num: 7,
                    mode: 2
                },
                {
                    num: 0,
                    mode: 1
                },
                {
                    num: 1,
                    mode: 1
                },
                {
                    num: 8,
                    mode: 3
                },
                {
                    num: 9,
                    mode: 3
                },
                {
                    num: 14,
                    mode: 1
                },
                {
                    num: 15,
                    mode: 3
                },
                {
                    num: 2,
                    mode: 1
                },
                {
                    num: 16,
                    mode: 3
                },
                {
                    num: 17,
                    mode: 3
                },
                {
                    num: 18,
                    mode: 2
                },
                {
                    num: 10,
                    mode: 2
                },
                {
                    num: 11,
                    mode: 2
                },
                {
                    num: 12,
                    mode: 2
                },
                {
                    num: 13,
                    mode: 2
                },
            ],
        }
    },
    {
        eventObject: 'button',
        number: 21,
        changeObject: {
            arrAnvills: [{
                num: 0,
                mode: 0,
            }],
            arrLamps: [{
                    num: 4,
                    mode: 0
                },
                {
                    num: 5,
                    mode: 0
                },
                {
                    num: 6,
                    mode: 0
                },
                {
                    num: 7,
                    mode: 0
                },
                {
                    num: 0,
                    mode: 0
                },
                {
                    num: 1,
                    mode: 0
                },
                {
                    num: 8,
                    mode: 0
                },
                {
                    num: 9,
                    mode: 0
                },
                {
                    num: 14,
                    mode: 0
                },
                {
                    num: 15,
                    mode: 0
                },
                {
                    num: 2,
                    mode: 0
                },
                {
                    num: 15,
                    mode: 0
                },
                {
                    num: 16,
                    mode: 0
                },
                {
                    num: 17,
                    mode: 0
                },
                {
                    num: 18,
                    mode: 0
                },
                {
                    num: 10,
                    mode: 0
                },
                {
                    num: 11,
                    mode: 0
                },
                {
                    num: 12,
                    mode: 0
                },
                {
                    num: 13,
                    mode: 0
                },
            ],
        }
    },
    {
        eventObject: 'button',
        number: 24,
        changeObject: {
            arrSpedometrs: [{
                speedNumber: 2,
                endAngle: 180,
                speed: 120,
                OnRight: 0.7,
            }, ],
            arrAnvills: [{
                num: 1,
                mode: 0,
            }],

        }
    },
    {
        eventObject: 'speedo',
        number: 2,
        changeObject: {}
    },
    {
        eventObject: 'button',
        number: 28,
        changeObject: {
            arrSpedometrs: [{
                speedNumber: 2,
                endAngle: 390,
                speed: 120,
                OnRight: 1,
            }, ],
            arrAnvills: [{
                num: 2,
                mode: 1,
            }],

        }
    },
    {
        eventObject: 'speedo',
        number: 2,
        changeObject: {}
    },
    {
        eventObject: 'button',
        number: 29,
        changeObject: {
            arrSpedometrs: [{
                speedNumber: 2,
                endAngle: 270,
                speed: 120,
                OnRight: -1,
            }, ],
            arrAnvills: [{
                num: 2,
                mode: 2,
            }],
        }
    },
    {
        eventObject: 'speedo',
        number: 2,
        changeObject: {}
    },
    {
        eventObject: 'button',
        number: 30,
        changeObject: {
            arrLamps: [{
                num:8,
                mode:3,
                }
            ],
        }
    },
    ]

    };
    var order6 = {
        elements: settinsForOrders.elements,
        ListPointsOfMark: [0, 0, 0.1, 0.2],
        PointsForError: [3,3],
        minusTime:0,
        expectedTime:1.5,        
        startSettings:settinsForOrders.order6,
        LearningMessege: [
        '<p>Отключите нагрузку ГАП </p>',
        '<p>Переведите тумблер ПИТ УПР в положение ОТКЛ</p>',
    ],
    queue: [
    {
        eventObject: 'button',
        number: 34,
        changeObject: {
            arrLamps:[
                {num:8,mode:0}
            ]
        }
    },
    {
        eventObject: 'button',
        number: 8,
        changeObject: {
            arrTumbs:[{num:3,mode:0}],
            arrSpedometrs: [{
                speedNumber: 2,
                endAngle: 155,
                speed: 20,
                OnRight: -9.7,
            }],
        }
    },
    {
        eventObject: 'speedo',
        number: 2,
        changeObject: {
            arrLamps:[
            {  num:10,mode:0},
            ]
        }
    },
]
    };

    //выносим настройки на уровень выше
    window.orders = [
        order1,
        order2,
        order3,
        order4,
        order5,
        order6,
    ];
})();