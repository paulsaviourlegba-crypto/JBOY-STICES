$(document).ready(function () {

    // Fade in social icons one by one
    $(".social-icons a").each(function (index) {
        $(this).css("opacity", 0);
        setTimeout(() => {
            $(this).animate({ opacity: 1 }, 600);
        }, index * 200);
    });

    // Hover glow animation
    $(".footer-section ul li a").hover(
        function () {
            $(this).animate({ paddingLeft: "10px" }, 200);
        },
        function () {
            $(this).animate({ paddingLeft: "0px" }, 200);
        }
    );

});