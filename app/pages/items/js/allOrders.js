// DELETE: старый файл он не нужен

;(function(){
    // order1 - первая последовательность
    // order2 - последовательность от гом
    // order3 - третья последовательность, не помню как называется 
    var settinsForOrders = window.startSettings;

    var order1 = {
            elements: settinsForOrders.elements,
            ListPointsOfMark: [0, 1, 2, 3],
            PointsForError: [10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
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
                        arrLamps: [{
                            num: 14,
                            mode: 0,
                        }, ],

                    }
                },
            ],
            LearningMessege: ['Кнопка 1 Эта кнопка предназначена для...',
                'Кнопка 2 Эта кнопка предназначена для...',
                'Кнопка 3 Эта кнопка предназначена для...',
                'Кнопка 4 Эта кнопка предназначена для...',
                'Кнопка 5 Эта кнопка предназначена для...',
                'Кнопка 6 Эта кнопка предназначена для...',
                'Кнопка 7 Эта кнопка предназначена для...',
                'Кнопка 8 Эта кнопка предназначена для...',
                'Кнопка 9 Эта кнопка предназначена для...',
                'Кнопка 10 Эта кнопка предназначена для...',
                'Кнопка 11 Эта кнопка предназначена для...'
            ],
        }

    var order2 = {
            elements: settinsForOrders.elements,
            ListPointsOfMark: [0, 1, 2, 3],
            PointsForError: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
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
                                mode: 2
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
                                mode: 2
                            },
                            {
                                num: 9,
                                mode: 2
                            },
                            {
                                num: 14,
                                mode: 1
                            },
                            {
                                num: 15,
                                mode: 2
                            },
                            {
                                num: 2,
                                mode: 1
                            },
                            {
                                num: 15,
                                mode: 2
                            },
                            {
                                num: 16,
                                mode: 2
                            },
                            {
                                num: 17,
                                mode: 2
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
                    number: 36,
                    changeObject: {
                        arrLamps: [{
                            num: 14,
                            mode: 1
                        }],
                        arrTumbs: [{
                            num: 6,
                            mode: 2
                        }],
                    }
                },
                {
                    eventObject: 'button',
                    number: 38,
                    changeObject: {
                        arrLamps: [{
                            num: 15,
                            mode: 1
                        }],
                        arrTumbs: [{
                            num: 6,
                            mode: 0
                        }],
                    }
                },
            ],
            LearningMessege: ['Кнопка 1 Эта кнопка предназначена для...',
                'Кнопка 2 Эта кнопка предназначена для...',
                'Кнопка 3 Эта кнопка предназначена для...',
                'Кнопка 4 Эта кнопка предназначена для...',
                'Кнопка 5 Эта кнопка предназначена для...',
                'Кнопка 6 Эта кнопка предназначена для...',
                'Кнопка 7 Эта кнопка предназначена для...',
                'Кнопка 8 Эта кнопка предназначена для...',
                'Кнопка 9 Эта кнопка предназначена для...',
                'Кнопка 10 Эта кнопка предназначена для...',
                'Кнопка 11 Эта кнопка предназначена для...'
            ],
        }
    
    window.desks = {
        desk1:{
            orders:[
                
            ]
        }
    };
}
)();