;(()=>{

    function Video(settings) {
        var elem;

        this.getElem = function() {
            if (!elem) elem = createElem(settings);
            return elem;
        }
        this.setPosition = function() { //устанавливает видео на середину окна
            var cw = document.documentElement.clientWidth,
                ch = document.documentElement.clientHeight;
            
            elem.style.top = `${ch/2 - settings.height/2}px`;
            elem.style.left = `${cw/2 - settings.width/2}px`;      
            elem.setAttribute('width',`${settings.width}px`);
        };

        this.play = function() { // воспроизводит видео и добавление события на отключение
            elem.play();

            elem.addEventListener('ended',function(e){ 
                this.dissapire();
                this.getElem().dispatchEvent(new Event('myEvent', { 'bubbles': true, cancelable: false }));
            }.bind(this));

        };


        this.dissapire = function() { //Скрывает эллемент и удаляет его после 5 секунд.

            elem.style.top = `0`;
            elem.style.left = `0`;  
            elem.setAttribute('class',`transition`);
            elem.setAttribute('width',`0`);

            setTimeout(function(){
                elem.remove();
            },5000)
        }

        function createElem(settings) {
            elem = document.createElement('video');
            elem.setAttribute('class',`video transition`);
            elem.setAttribute('src',settings.src);
            elem.setAttribute('width',`0`);
            elem.objectName = 'video';
            elem.number = 0;
            elem.style.top = `0`;
            elem.style.left = `0`; 

            return elem;
        }

    }
    window.Video = Video;
})()


