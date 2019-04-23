;(function () {
    
        var img  = document.getElementById('main-img');
        var wrapper  = img.parentNode;
    
        window.globalScale = document.documentElement.clientWidth * 0.000350;

        img.style.transform = `scale(${window.globalScale},${window.globalScale})`;

        var newHeight = 1619;
        var newWidth = 996;
    
        wrapper.style.height = newHeight * window.globalScale + 'px';
        wrapper.style.width = newWidth * window.globalScale + 'px';

})();