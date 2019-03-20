; (function () {
    var fields = document.getElementById('menu').children;
    console.log(fields);
    men = [];
    document.getElementById('menu').onmouseover = function (event) {
        for(var i = 0; i < fields.length; i++){
            if(event.target == fields[i]){
                // a = new menu(i);
                // men = a;
                // a.init();

            }
        }
    }

    document.getElementById('menu').onmouseout = function (event) {
        for (var i = 0; i < fields.length; i++) {
            if (event.target == fields[i]) {
                // men.deleteMenu();
            }
        }
    }

    function menu(menu_number) {

        var actions = [
            "pages/desk1/desk1.html",
            "pages/desk2/desk2.html",
            "pages/desk3/desk3.html",
        ];

        var fieldsID = [
            'field1',
            'field2',
            'field3',
        ];

        var modes = [
            [
                "режим1",
                "режим2",
                "режим3",
                "режим4",
            ],
            [
                "режим1",
                "режим2",
            ],
            [
                "режим1",
                "режим2",
            ],
        ];

        var names = [
            "первый пульт",
            "Второй пульт",
            "Третий пульт",
        ];

        var content = document.createElement('div');

        this.init = function(){
            // var content = document.createElement('div');
            content.classList.add('content');

            var form = document.createElement('form');
            content.appendChild(form);

            form.action = actions[menu_number];
            form.method = 'get';
            //добавление тега p
            var tempItem = document.createElement('p');            
            tempItem.innerHTML = names[menu_number];
            tempItem.classList.add('skewX25');
            form.appendChild(tempItem);
            //добавление тега span
            tempItem = document.createElement('span');
            tempItem.innerHTML = "Выберите режим";
            tempItem.classList.add('skewX25');
            form.appendChild(tempItem);

            var select = document.createElement('select');
            select.name = 'mode';

            for(var i = 0;i < modes[menu_number].length ;i++){
                tempItem = document.createElement('option');
                tempItem.value = String(i);
                tempItem.innerHTML = modes[menu_number][i];
                select.appendChild(tempItem);
            }

            form.appendChild(document.createElement('br'));

            tempItem = document.createElement('span');
            tempItem.innerHTML = 'Тренировка';
            tempItem.classList.add('skewX25');
            form.appendChild(tempItem);

            tempItem = document.createElement('input');
            tempItem.type = "radio";
            tempItem.name = 'option';
            tempItem.classList.add('skewX25');
            form.appendChild(tempItem);

            form.appendChild(document.createElement('br'));

            tempItem = document.createElement('span');
            tempItem.innerHTML = 'Экзамен';
            tempItem.classList.add('skewX25');
            form.appendChild(tempItem);

            tempItem = document.createElement('input');
            tempItem.type = "radio";
            tempItem.name = 'option';
            tempItem.classList.add('skewX25');
            form.appendChild(tempItem);

            form.appendChild(document.createElement('br'));

            tempItem = document.createElement('button');
            tempItem.type = 'submit';
            tempItem.classList.add('skewX25');
            form.appendChild(tempItem);
            document.getElementById(fieldsID[menu_number]).appendChild(content);
        };

        this.deleteMenu = function(){
            document.getElementById(fieldsID[menu_number]).innerHTML = '';
        };

    };

    // window.menu = menu;
})();