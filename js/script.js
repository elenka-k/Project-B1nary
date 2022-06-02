$(document).ready(function() {
    $(".about__burger").click(function(event) {
        $(".about__burger,.about__menu").toggleClass("active");
        $("body").toggleClass("lock");
    });
    $(".portfolio__burger").click(function (event) {
        $(".portfolio__burger,.portfolio__menu").toggleClass("active");
        $("body").toggleClass("lock");
    });
});