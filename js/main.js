$(".block").click(function() {
    $(this).attr("class", "block block--color-" + (Math.floor(Math.random() * 30) + 1) + " block--position-" + (Math.floor(Math.random() * 30) + 1) + " block--size-" + (Math.floor(Math.random() * 30) + 1));
});