var settinsForOrders = window.startSettings;
// order1 - единственная последовательность


var order1 = {
    elements: settinsForOrders.elements,
    ListPointsOfMark: [2, 0, 3, 5],
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
        {
            eventObject: 'button',
            number: 0,
            changeObject: {
                arrButs: [{
                    num: 0,
                    mode: 0
                }],
                arrLamps:[{
                    num:1,
                    mode:4,
                }]
            }
        },
        {
            eventObject: 'lamp',
            number: 1,
            changeObject: {
                arrButs: [{
                    num: 0,
                    mode: 1
                }],
                arrLamps:[{
                    num:1,
                    mode:0,
                }]
            }
        },
        {
            eventObject: 'button',
            number: 0,
            changeObject: {
                arrTumbs: [{
                    num: 0,
                    mode: 1
                }],
            }
        },
    ]
};

window.orders = [
    order1,
];