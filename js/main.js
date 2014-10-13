function changeBlock(el) {
    $(el).attr("class", "block block--color-" + (Math.floor(Math.random() * 30) + 1) + " block--size-" + (Math.floor(Math.random() * 30) + 1) + " block--spacing-" + (Math.floor(Math.random() * 30) + 1));
}

$(".block").click(function() {
    changeBlock(this);
});