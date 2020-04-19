document.addEventListener("DOMContentLoaded", function () {

    $(document).ready(function () {
        $(".toggle").on('click', function () {
            if ($('#checkbox3').prop("checked")) {
                $('.menu__mobile').addClass('toggle_menu_active');


            } else {
                $('.menu__mobile').removeClass('toggle_menu_active');
            }
        });

    });
    $(document).ready(function () {
        $('#main .owl-carousel').owlCarousel({
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                578: {
                    items: 2,
                    nav: false
                },
                992: {
                    items: 3,
                    dots: true,
                    loop: false
                }
            }
        });

        $('#partner .owl-carousel').owlCarousel({
            items: 1,
            dots: true,
            loop: false
        })
    });
    $(document).ready(function () {
        const $height = $('#contacts').innerHeight();
        $('.g_map iframe').height($height);
        $(window).resize(function () {
            const $height = $('#contacts').innerHeight();
            $('.g_map iframe').height($height);
        });


        for (let i = 1; i <= 13; i++) { // выведет 0, затем 1, затем 2
            $("#" + i).hover(function () {
                $(this).css('cursor', 'pointer');
                $('#partner .ul li').removeClass('active');
                $('#partner .ul .for' + i).addClass('active');
            });
        }

        $(function () {
            $(".menu__ul li>a").click(function () {
                const _href = $(this).attr("href");
                let scroll_bt;
                if ($(window).width() > 992) {
                    scroll_bt = ($(_href).offset().top) + "px";
                } else {
                    scroll_bt = ($(_href).offset().top) + "px";
                    $('.menu__mobile ').removeClass('toggle_menu_active');
                    $('#checkbox3').prop("checked", false);
                }
                $("html, body").animate({
                    scrollTop: scroll_bt
                });
                return false;
            });

            $(".btn_go").click(function () {
                const _href = $(this).attr("href");
                let scroll_bt;
                if ($(window).width() > 992) {
                    scroll_bt = ($(_href).offset().top) + "px";
                } else {
                    scroll_bt = ($(_href).offset().top) + "px";
                    $('.menu__mobile').removeClass('toggle_menu_active');
                    $('#checkbox3').prop("checked", false);

                }
                $("html, body").animate({
                    scrollTop: scroll_bt
                });
                return false;
            });



            jQuery(function ($) {
                $(".phone").mask("+7 (999) 999-9999");
            });


            let lastScrollTop = 150;
            if ($(window).width() > 992) {
                $(window).scroll(function (event) {
                    const st = $(this).scrollTop();
                    $('header').toggleClass('scrolled', st > lastScrollTop);
                    if (st > lastScrollTop) {
                        // downscroll code
                    } else {
                        // upscroll code
                    }
                });
            }


        });


    });


});
