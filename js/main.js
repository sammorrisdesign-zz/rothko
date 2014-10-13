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
    $("body").attr("class", "body--color-" + (Math.floor(Math.random() * 30) + 1));
}, 5000);

Modernizr.load();