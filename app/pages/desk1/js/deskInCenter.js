;(function () {

    
            var img  = document.getElementById('main-img');
            var wrapper  = img.parentNode;
        
            window.globalScale = document.documentElement.clientWidth * 0.000550;
    
            img.style.transform = `scale(${window.globalScale},${window.globalScale})`;

        
            var newHeight = 979;
            var newWidth = 1438;
        
    
        var newHeight = 979;
        var newWidth = 1438;
    
        wrapper.style.height = newHeight * window.globalScale + 'px';
        wrapper.style.width = newWidth * window.globalScale + 'px';

})();