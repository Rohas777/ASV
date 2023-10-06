const unregister = `<div class="popup__wrapper">
<h2 class="popup__title title title_center">Аккаунт</h2>
<a href="/login.html" class="popup_button button">Войти</a>
</div>`
const register = `<div class="popup__wrapper">
<h2 class="popup__title title title_center">Аккаунт</h2>
<p class="popup__field"><b>Ваш логин:</b> user1234</p>
<p class="popup__field"><b>Ваш e-mail:</b> example@mail.ru</p>
<span class="popup__exit">Выйти</span>
</div>`

$(document).ready(function () {
    $('.popup').hide()
});

$('.header__link_login').click(function (event) {
    $(this).toggleClass('open')
    $(this).toggleClass('active')
    $('.popup').css('display', 'block')

    if ($(this).hasClass('open')) {
        $('.popup').show()
    } else {
        $('.popup').hide()
    }

    if ($(this).hasClass('unregister')) {
        $('.popup').html(unregister)
    } else {
        $('.popup').html(register)
    }

    //Клик вне элемента
    $(document).mouseup(function (e) {
        if (!e.target.classList.contains('popup')) {
            $(".popup").hide();
            $('.header__link_login').removeClass('open')
        }
    });
})

$(document).on('keyup', function (e) {
    if (e.key == "Escape") {
        $(".popup").hide();
    }
});
