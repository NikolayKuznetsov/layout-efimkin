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

    var mousePointerBlockFour1 = $('.block--block-four .img-element.img-element-1');
    var mousePointerBlockFour2 = $('.block--block-four .img-element.img-element-2');
    var mousePointerBlockFour3 = $('.block--block-four .img-element.img-element-3');
    var mousePointerBlockFour4 = $('.block--block-four .img-element.img-element-4');
    var mousePointerBlockFour5 = $('.block--block-four .img-element.img-element-5');
    var mousePointerBlockFour6 = $('.block--block-four .img-element.img-element-6');
    var mousePointerBlockFour7 = $('.block--block-four .img-element.img-element-7');
    var mousePointerBlockFour8 = $('.block--block-four .img-element.img-element-8');
    var mousePointerBlockFour9 = $('.block--block-four .img-element.img-element-9');
    var mousePointerBlockFour10 = $('.block--block-four .img-element.img-element-10');
    var mousePointerBlockFour11 = $('.block--block-four .img-element.img-element-11');

    $(window).mousemove(function (e) {

        var x = e.pageX / window.innerHeight;
        var y = e.pageY / window.innerWidth;
        x = x * -60;
        y = y * -100;
        var transfromPosition1 = 'translate3d(' + x + '%, ' + y + '%, 0)';
        var transfromPosition2 = 'translate3d(' + (x / 2) + '%, 0, 0)';
        var transfromPosition3 = 'translate3d(' + x + '%, ' + (-y * 2) + '%, 0)';
        var transfromPosition4 = 'translate3d(' + (x - 10) + '%, ' + y + '%, 0)';
        var transfromPosition5 = 'translate3d(' + (x + 25) + '%, ' + 0 + '%, 0)';

        mousePointerBlockTwo1.css('transform', transfromPosition1);
        mousePointerBlockTwo2.css('transform', transfromPosition2);
        mousePointerBlockTwo3.css('transform', transfromPosition3);
        mousePointerBlockTwo4.css('transform', transfromPosition4);
        mousePointerBlockTwo5.css('transform', transfromPosition5);
        mousePointerBlockTwo6.css('transform', transfromPosition4);

        transfromPosition2 = 'translate3d(' + (x / 2) + '%, 0, 0)';
        transfromPosition3 = 'translate3d(' + (x + 25) + '%, 0, 0)';
        transfromPosition4 = 'translate3d(' + (x - 10) + '%, ' + (y + 18) + '%, 0)';
        transfromPosition5 = 'translate3d(' + x / 2 + '%, ' + (y * 3) + '%, 0)';


        mousePointerBlockThree1.css('transform', transfromPosition1);
        mousePointerBlockThree2.css('transform', transfromPosition4);
        mousePointerBlockThree3.css('transform', transfromPosition2);
        mousePointerBlockThree4.css('transform', transfromPosition3);
        mousePointerBlockThree5.css('transform', transfromPosition2);
        mousePointerBlockThree6.css('transform', transfromPosition5);
        mousePointerBlockThree7.css('transform', transfromPosition4);
        mousePointerBlockThree8.css('transform', transfromPosition2);


        mousePointerBlockFour1.css('transform', transfromPosition1);
        mousePointerBlockFour2.css('transform', transfromPosition2);
        mousePointerBlockFour3.css('transform', transfromPosition3);
        mousePointerBlockFour4.css('transform', transfromPosition4);
        mousePointerBlockFour5.css('transform', transfromPosition5);
        mousePointerBlockFour6.css('transform', transfromPosition2);
        mousePointerBlockFour7.css('transform', transfromPosition3);
        mousePointerBlockFour8.css('transform', transfromPosition1);
        mousePointerBlockFour9.css('transform', transfromPosition3);
        mousePointerBlockFour10.css('transform', transfromPosition2);
        mousePointerBlockFour11.css('transform', transfromPosition4);
    })

});