const appName = "Algo-e Tech";
$(document).ready(function () {
    parseAndRender();
    $('title[id="pageTitle"]').html(appName);
    $('body').removeClass('d-none').addClass('d-block');

    // stick nav
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var navbar = $(".navbar");

        (scroll > 50)? navbar.addClass("sticky"): navbar.removeClass("sticky");
       
    });

});
function parseAndRender() {
    var elements = $("*");
    elements.each(function () {
        var attributes = this.attributes;
        for (var i = 0; i < attributes.length; i++) {
            var attributeName = attributes[i].name;
            var attributeValue = attributes[i].value;
            if (/\{{2}\s*print\('([^']+)'\)\s*\}{2}/.test(attributeValue)) {
                var renderedValue = parseAttributeValue(attributeValue);
                $(this).attr(attributeName, renderedValue);
            }
        }
    });
}

function parseAttributeValue(attributeValue) {
    var renderedValue = attributeValue.replace(/\{{2}\s*print\('([^']+)'\)\s*\}{2}/g, function (match, p1) {
        return p1;
    });

    return renderedValue;
}