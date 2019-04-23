;(function () {

    // window.onload = function(){

        var coeff = 0.72;
    
        var img  = document.getElementById('main-img');
        var wrapper  = img.parentNode;
    
        window.globalScale = document.documentElement.clientWidth * 0.000550;

        img.style.transform = `scale(${window.globalScale},${window.globalScale})`
    
        var imgCompStyle = getComputedStyle(img);
    
        var newHeight = 979;
        var newWidth = 1438;
    

        wrapper.style.height = newHeight * window.globalScale + 'px';
        wrapper.style.width = newWidth * window.globalScale + 'px';

})();