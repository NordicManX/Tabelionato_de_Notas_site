
function pureFadeIn(e, o) {
    var i = document.getElementById(e);
    i.style.opacity = 0, i.style.display = o || "block",
        function e() {
            var o = parseFloat(i.style.opacity);
            (o += .02) > 1 || (i.style.opacity = o, requestAnimationFrame(e))
        }()
}

function pureFadeOut(e) {
    var o = document.getElementById(e);
    o.style.opacity = 1,
        function e() {
            (o.style.opacity -= .02) < 0 ? o.style.display = "none" : requestAnimationFrame(e)
        }()
}

function setCookie(e, o, i) {

    var t = "";
    if (i) {
        var n = new Date;
        n.setTime(n.getTime() + 24 * i * 60 * 60 * 1e3), t = ";"
    }
    document.cookie = e + "=" + (o || "") + t + " path=/";
}

function getCookie(e) {
    for (var o = e + "=", i = document.cookie.split(";"), t = 0; t < i.length; t++) {
        for (var n = i[t];
            " " == n.charAt(0);) n = n.substring(1, n.length);
        if (0 == n.indexOf(o)) return n.substring(o.length, n.length)
    }
    return null
}

function eraseCookie(e) {
    document.cookie = e + "=;"
}

function cookieConsent() {

    if (getCookie("purecookieDismiss") == null) {
        pureFadeIn("cookieConsentContainer")
    }

}

function purecookieOptions() {

    var painel = $('.painelPanel');
    if (painel.css('display') == 'none') {
        pureFadeOut("cookieConsentContainer");
        pureFadeIn("lgpdCookiesOptions");
    } else {
        pureFadeIn("cookieConsentContainer");
        pureFadeOut("lgpdCookiesOptions");
    }

}

function purecookieDismiss() {
    setCookie("purecookieDismiss", "1", 7);
    pureFadeOut("cookieConsentContainer");
    pureFadeOut("lgpdCookiesOptions");
}

function enableMessageLgpd() {
    if($('.lgpdTextareaMessage').length > 0){
        $(".lgpdTextareaMessage").show();
    }
}

$(function() {

    cookieConsent();

    $('.painelDesc-link, .titulo-item').on('click', function() {

        if ($(this).parent().find('.painelTag.item-' + $(this).data('escope')).hasClass('painelHidden')) {
            $(this).parent().find('.painelTag.item-' + $(this).data('escope')).removeClass('painelHidden');
            $(this).parent().find('.painelSpacer.item-' + $(this).data('escope')).removeClass('painelHidden');
        } else {
            $(this).parent().find('.painelTag.item-' + $(this).data('escope')).addClass('painelHidden');
            $(this).parent().find('.painelSpacer.item-' + $(this).data('escope')).addClass('painelHidden');
        }

    });

    $('.painelSelector').on('click', function() {

        if ($(this).hasClass('item-outside')) {

            if ($(this).hasClass('painelSel-active')) {
                $(this).removeClass('painelSel-active');
                $(this).closest('.painelCategory').find('.item-inside').removeClass('painelSel-active');
            } else {
                $(this).addClass('painelSel-active');
                $(this).closest('.painelCategory').find('.item-inside').addClass('painelSel-active');
            }

        } else {

            if ($(this).closest('.painelCategory').hasClass('painelReq') === false) {

                if ($(this).hasClass('painelSel-active')) {
                    $(this).removeClass('painelSel-active');
                } else {
                    $(this).addClass('painelSel-active');
                }

                var itensTotais = $(this).closest('.painelCategory').find('.item-inside').length;
                var itensSelecionados = $(this).closest('.painelCategory').find('.item-inside.painelSel-active').length;

                if (itensSelecionados > 0) {
                    $(this).closest('.painelCategory').find('.item-outside').addClass('painelSel-active');
                } else {
                    $(this).closest('.painelCategory').find('.item-outside').removeClass('painelSel-active');
                }
            }
        }
    });

});