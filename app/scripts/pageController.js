$(function () {

    $(window).scroll(function () {

    });

    var mousePointer1 = $('.block--block-two .img-element.img-element-1');
    var mousePointer2 = $('.block--block-two .img-element.img-element-2');
    var mousePointer3 = $('.block--block-two .img-element.img-element-3');
    var mousePointer4 = $('.block--block-two .img-element.img-element-4');
    var mousePointer5 = $('.block--block-two .img-element.img-element-5');
    var mousePointer6 = $('.block--block-two .img-element.img-element-6');

    $(window).mousemove(function (e) {

        var x = e.pageX / window.innerHeight;
        var y = e.pageY / window.innerWidth;
        x = x * -60;
        y = y * -100;
        var transfromPosition1 = 'translate3d(' + x + '%, ' + y + '%, 0)';
        var transfromPosition2 = 'translate3d(' + (x/2) + '%, 0, 0)';
        var transfromPosition3 = 'translate3d(' + x + '%, ' + (-y*2) + '%, 0)';
        var transfromPosition4 = 'translate3d(' + (x-10) + '%, ' + y + '%, 0)';
        var transfromPosition5 = 'translate3d(' + (x+25) + '%, ' + 0 + '%, 0)';
        mousePointer1.css('transform', transfromPosition1);
        mousePointer2.css('transform', transfromPosition2);
        mousePointer3.css('transform', transfromPosition3);
        mousePointer4.css('transform', transfromPosition4);
        mousePointer5.css('transform', transfromPosition5);
        mousePointer6.css('transform', transfromPosition4);
    })

});