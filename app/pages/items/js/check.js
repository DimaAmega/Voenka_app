;(function(){

function check(ListPointsOfMark){
    var mistakePoints = 0,
        ListPointsOfMark = ListPointsOfMark,
        currentMark = 5,
        countMistake = 0;
    ///////////
    ///private
    ///////////
    function getIndexonMark() {
        var i = 0;
        while(ListPointsOfMark[i]<mistakePoints&&ListPointsOfMark[i+1]<=mistakePoints) i++;
        return i;
    }
    ///////////
    ///public
    ///////////
    this.addMistake = function(w){
        mistakePoints+=w; 
        countMistake++;  
        currentMark = 5 - getIndexonMark();
    };
    this.getMistakeCount = function() {
        return countMistake;
    };
    this.getPointMistake = function() {
        return mistakePoints;
    }
    this.getMark = function(){
        return currentMark;
    }
}

 window.Check = check;

})()