$('nav ul li a').click(function () {
    var thissection = $(this).attr('href');
    var thislink = $(this);

    $('html').stop().animate({ scrollTop: $(thissection).offset().top - 200 }, 1000,
        'easeOutCirc');

        return false;

});

$(window).on('load', function () {
    var alllinks = $('nav ul li a');
    var posts = $('section');
    var pagetop;
    var postpos;
    var counter = 0;
    var prevcounter = 0;
    var doneresizing;

    var postTops = [];
    resetpageposition();


    // console.log(postTops);
    $(window).scroll(function () {
        pagetop = $(window).scrollTop() + 210;
        if (pagetop > postTops[counter + 1]) {
            counter++;
            /* console.log(`${pagetop}`); */
            console.log(`scrolling down ${counter}`);
        }
        else if (counter > 0 && pagetop < postTops[counter]) {
            counter--;
            /* console.log(`${pagetop}`); */
            console.log(`scrolling up ${counter}`);
        }
        if (counter != prevcounter) {
            $(alllinks).removeAttr('class');
            $('nav ul li a').eq(counter).addClass('selected');
            prevcounter = counter;
        }
    });

    $(window).on('resize', function () {
        clearTimeout(doneresizing);
        doneresizing = setTimeout(function () {
            resetpageposition();

        }, 500);
    });

    function resetpageposition() {
        postTops = [];

        posts.each(function () {
            postTops.push(Math.floor($(this).offset().top));
        });

        var pageposition = $(window).scrollTop() + 210;
        counter = 0;

        for (var i = 0; i < postTops.length; i++) {
            if (pageposition > postTops[i]) { counter++; }
        }
        counter--;

        $(alllinks).removeAttr('class');
        $('nav ul li a').eq(counter).addClass('selected');
    }
});