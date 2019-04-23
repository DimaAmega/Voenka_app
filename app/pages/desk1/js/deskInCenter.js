;(function () {

    // window.onload = function(){

        var coeff = 0.72;
    
        var img  = document.getElementById('main-img');
        var wrapper  = img.parentNode;
    
        window.globalScale = document.documentElement.clientWidth * 0.000550;

        img.style.transform = `scale(${window.globalScale},${window.globalScale})`
    
        var imgCompStyle = getComputedStyle(img);
    
        var newHeight = Number(imgCompStyle.height.slice(0, -2));
        var newWidth = Number(imgCompStyle.width.slice(0, -2));
    
        newHeight = newHeight > 0 ? newHeight : 700;
        newHeight = newWidth > 0 ? newWidth : 1200;

        wrapper.style.height = newHeight * window.globalScale + 'px';
        wrapper.style.width = newWidth * window.globalScale + 'px';

})();