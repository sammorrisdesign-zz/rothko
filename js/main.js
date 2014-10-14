function changeBlock(el) {
    $(el).attr("class", "block block--color-" + (Math.floor(Math.random() * 30) + 1) + " block--size-" + (Math.floor(Math.random() * 30) + 1) + " block--spacing-" + (Math.floor(Math.random() * 30) + 1));
}

$(".block").click(function() {
    changeBlock(this);
});

window.setInterval(function() {
    var block = $(".block:nth-of-type(" + (Math.floor(Math.random() * 4) + 1) + ")");
    changeBlock(block);
}, 5000);

window.setInterval(function() {
    $("body").attr("class", function(i, c){
        return c.replace(/(^|\s)body--color-\S+/g, "body--color-" + (Math.floor(Math.random() * 30) + 1));
    });
}, 8000);

$(".about-link--open").click(function() {
    $("body").addClass("body--about");
});

$(".about-link--close").click(function() {
    $("body").removeClass("body--about");
});

Modernizr.load();