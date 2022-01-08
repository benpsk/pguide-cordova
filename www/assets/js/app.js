AOS.init();

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: {
        0: {
            items: 1
        },
        500: {
            items: 2
        },
        800: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})

$(function () {

    $('.web-detail').hide();
    $('.front-end-detail').hide();
    $('.db-detail').hide();
    $('.php-detail').hide();
    $('.node-detail').hide();
    $('.react-detail').hide();


    function enter(title) {
        $(`.${title}-time`).hide(500);
        $(`.${title}-detail`).show(600);
    }

    function out(title) {
        $(`.${title}-detail`).hide(500);
        $(`.${title}-time`).show(600);
    }

    $('.web').hover(
        function () {
            enter('web');
        },
        function () {
            out('web');
        }
    );

    $('.front-end').hover(
        function () {
            enter('front-end');
        },
        function () {
            out('front-end');
        }
    );

    $('.db').hover(
        function () {
            enter('db');
        },
        function () {
            out('db');
        }
    );

    $('.php').hover(
        function () {
            enter('php');
        },
        function () {
            out('php');
        }
    );

    $('.node').hover(
        function () {
            enter('node');
        },
        function () {
            out('node');
        }
    );

    $('.react').hover(
        function () {
            enter('react');
        },
        function () {
            out('react');
        }
    );

});