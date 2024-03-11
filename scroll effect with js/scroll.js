const navlinks = document.querySelectorAll('nav ul li a');

navlinks.forEach(element => {
    element.addEventListener('click', smoothscroll);
});

function smoothscroll(event) {
    event.preventDefault();

    const targetdid = event.target.getAttribute('href');
    const targetsection = document.querySelector(targetid);
    const originaltop = Math.floor(targetsection.getBoundingClientRect().top) - 200;
    window.scrollBy({ top: originaltop, left: 0, behaviour: 'smooth' });

}

window.addEventListener('load', function () {
    const posts = document.querySelectorAll('section');
    let posttops = [];
    let counter = 1;
    let prevcounter = 1;
    let pagetop;
    let doneresizing;


    resetpageposition();
    //console.log(posttops);

    window.addEventListener('scroll', function () {
        pagetop = window.pageYOffset + 250;

        if (pagetop > posttops[counter]) {
            counter++;
        }
        else if (counter > 1 && pagetop < posttops[counter - 1]) {
            counter--;
        }
        if (counter != prevcounter) {
            navlinks.forEach(function (link) {
                link.removeAttribute('class');
            });
            const thislink = document.querySelector(`nav ul li:nth-child(${counter}) a`);
            thislink.className = 'selected';
            prevcounter = counter;
        }
    });

    window.addEventListener('resize', function () {
        clearTimeout(doneresizing);
        doneresizing = setTimeout(function () {
            resetpageposition();
        }, 500);
    });

    function resetpageposition() {
        posttops = [];
        posts.forEach(function (post) {

            posttops.push(Math.floor(post.getBoundingClientRect().top + window.pageYOffset));
        });
        var pageposition = window.pageYOffset + 250;
        counter = 1;
        for (var i = 0; i < posttops.length; i++) {
            if (pageposition > posttops[i]) { counter++; }
        }
        counter--;

        navlinks.forEach(function (link) {
            link.removeAttribute('class');
        });
        const thislink = document.querySelector(`nav ul li:nth-child(${counter}) a`);
        thislink.className = 'selected';
    }
});