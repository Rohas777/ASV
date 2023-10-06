$('.filter__head').click(function (event) {
    $(this).parent('.filter').toggleClass('active');
});

$('.pagination-button').click(function (event) {
    if ($('.pagination-button').hasClass('active')) {
        $('.pagination-button').removeClass('active')
    }
    $(this).toggleClass('active');
});


$('.full-goods__check').click(function (event) {
    if ($('.full-goods__check').hasClass('active')) {
        $('.full-goods__check').removeClass('active')
    }
    $(this).toggleClass('active');
});


$('.card__add').click(function (event) {
    const text = $(this).text()
    $(this).toggleClass('button_added');
    $(this).toggleClass('button_transparent');
    if ($(this).hasClass('button_added')) {
        $(this).html('Добавлено');
    } else {
        $(this).html('Добавить в корзину');
    }

});