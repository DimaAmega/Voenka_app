;(function () {
    // var coeff = 0.72;

    var img  = document.getElementById('main-img');
    var wrapper  = img.parentNode;

    window.globalScale = document.documentElement.clientWidth * 0.000550;
    img.style.transform = `scale(${window.globalScale},${window.globalScale})`

    var imgCompStyle = getComputedStyle(img);

    var newHeight = Number(imgCompStyle.height.slice(0, -2));
    var newWidth = Number(imgCompStyle.width.slice(0, -2));


    console.log(newHeight*window.globalScale);
    console.log(newWidth*window.globalScale);


    wrapper.style.height = newHeight * window.globalScale + 'px';
    wrapper.style.width = newWidth * window.globalScale + 'px';

})();