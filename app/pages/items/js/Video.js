;(()=>{

    function Video(settings) {
        var elem;
        var sourseElem;

        this.getElem = function() {
            if (!elem) elem = createElem(settings);
            return elem;
        }
        this.setPosition = function() { //устанавливает видео на середину окна
            var wrapper =  document.getElementsByClassName('wrapper')[0];

            var cw = wrapper.clientWidth,
                ch = wrapper.clientHeight;
            elem.style.top = `${ch/2 - settings.height/2}px`;
            elem.style.left = `${cw/2 - settings.width/2}px`;
            elem.setAttribute('width',`${settings.width}px`);
        };

        this.play = function() { // воспроизводит видео и добавление события на отключение

            // var media = document.getElementsByClassName("video")[0];
            // const playPromise = media.play();

            // if (playPromise !== null){
            // playPromise.catch(() => {
            //     console.log(media);
            //      media.pause();
            //      media.play();})
            // };


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
            },600)
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


