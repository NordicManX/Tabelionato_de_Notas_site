// Remover img sem imagens
$(window).bind('load', function() {
  $('img').each(function() {
    if( (typeof this.naturalWidth != "undefined" && this.naturalWidth == 0) 
    ||  this.readyState == 'uninitialized') {
	    var $ahref =$(this).parent( ".hide" );
        $ahref.remove();
        $(this).remove();
    }
  });
});


$(function(){
	 $(".table").on("click", "tr[role=\"button\"]", function (e) {
	      window.location = $(this).data("href");
	 });
	 
	 
	// MaskInputs
	var SPMaskBehavior = function (val) {
		return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
	},
	spOptions = {
		onKeyPress: function (val, e, field, options) {
			field.mask(SPMaskBehavior.apply({}, arguments), options);
		}
	};
	$('.phone').mask(SPMaskBehavior, spOptions);
	$(".data").mask("99/99/9999");
	$(".credit_card_exp").mask("99");
	$(".cep").mask("99999-999");
	$(".fixo").mask("(99) 9999-9999");
	$(".celular").mask("(99) 99999-9999");
	$(".cpf").mask("000.000.000-00");
	$(".rg").mask("00.000.000-0");
	$(".creditcard").mask("0000-0000-0000-0000");
	$(".cnpj").mask("00.000.000/0000-00");
	$(".decimal").mask('000.000.000.000.000,00', { reverse: true });
	$(".decimal3").mask('000.000.000.000.000,000', { reverse: true });	 

	//faq
	$(".collapse-item").on("click", function () {
		var target = $(this).closest('h2');
		if ($(this).hasClass('collapsed')) {
			target.removeClass('panel-title-off');
			target.addClass('panel-title');
		} else {
			target.addClass('panel-title-off');
			target.removeClass('panel-title');

		}
	});		
});