;(function(){

    function timer()    {
        var timer = 0,
            timerId;
            
        ///////////
        ///private
        ///////////
        function updateTimer(){
            timer +=0.1;
            timer = Number(timer.toFixed(2));
            // console.log(timer);
        }
        ///////////
        ///public
        ///////////
        this.startTimer = function()  {
            timerId = setInterval(updateTimer.bind(this),100);
        };
        this.stopTimer = function() {  
            clearTimeout(timerId);
            var res = Number((timer - 0.1).toFixed(2));
            console.log(res);
            return res;
        };
    }
     window.Timer = timer;
    
    })()