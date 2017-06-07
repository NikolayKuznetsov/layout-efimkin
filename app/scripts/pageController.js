$(function () {

    $(window).scroll(function () {

    });

    var mousePointerBlockTwo1 = $('.block--block-two .img-element.img-element-1');
    var mousePointerBlockTwo2 = $('.block--block-two .img-element.img-element-2');
    var mousePointerBlockTwo3 = $('.block--block-two .img-element.img-element-3');
    var mousePointerBlockTwo4 = $('.block--block-two .img-element.img-element-4');
    var mousePointerBlockTwo5 = $('.block--block-two .img-element.img-element-5');
    var mousePointerBlockTwo6 = $('.block--block-two .img-element.img-element-6');

    var mousePointerBlockThree1 = $('.block--block-three .img-element.img-element-1');
    var mousePointerBlockThree2 = $('.block--block-three .img-element.img-element-2');
    var mousePointerBlockThree3 = $('.block--block-three .img-element.img-element-3');
    var mousePointerBlockThree4 = $('.block--block-three .img-element.img-element-4');
    var mousePointerBlockThree5 = $('.block--block-three .img-element.img-element-5');
    var mousePointerBlockThree6 = $('.block--block-three .img-element.img-element-6');
    var mousePointerBlockThree7 = $('.block--block-three .img-element.img-element-7');
    var mousePointerBlockThree8 = $('.block--block-three .img-element.img-element-8');

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

        mousePointerBlockTwo1.css('transform', transfromPosition1);
        mousePointerBlockTwo2.css('transform', transfromPosition2);
        mousePointerBlockTwo3.css('transform', transfromPosition3);
        mousePointerBlockTwo4.css('transform', transfromPosition4);
        mousePointerBlockTwo5.css('transform', transfromPosition5);
        mousePointerBlockTwo6.css('transform', transfromPosition4);

        transfromPosition2 = 'translate3d(' + (x/2) + '%, 0, 0)';
        transfromPosition3 = 'translate3d(' + (x+25) + '%, ' + 0 + '%, 0)';
        transfromPosition4 = 'translate3d(' + (x-10) + '%, ' + (y+18) + '%, 0)';
        transfromPosition5 = 'translate3d(' + x/2 + '%, ' + (y*3) + '%, 0)';


        mousePointerBlockThree1.css('transform', transfromPosition1);
        mousePointerBlockThree2.css('transform', transfromPosition4);
        mousePointerBlockThree3.css('transform', transfromPosition2);
        mousePointerBlockThree4.css('transform', transfromPosition3);
        mousePointerBlockThree5.css('transform', transfromPosition2);
        mousePointerBlockThree6.css('transform', transfromPosition5);
        mousePointerBlockThree7.css('transform', transfromPosition4);
        mousePointerBlockThree8.css('transform', transfromPosition2);
    })

});