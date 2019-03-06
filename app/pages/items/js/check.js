;(function(){

function check(ListPointsOfMark){
    var mistakePoints = 0,
        MaxPoints,
        ListPointsOfMark = ListPointsOfMark,
        currentMark = 5;

    ///////////
    ///private
    ///////////
    function getIndexonMark() {
        var i = 0;
        while(ListPointsOfMark[i]<mistakePoints&&ListPointsOfMark[i+1]<=mistakePoints){
            i++;
        }
        return i;
    }
    ///////////
    ///public
    ///////////
    this.addMistake = function(w){
        mistakePoints+=w;   
        currentMark = 5 - getIndexonMark();
    };
    this.getMistake = function() {
        return mistakePoints;
    };
    this.getMark = function(){
        return currentMark;
    }
}

 window.Check = check;

})()