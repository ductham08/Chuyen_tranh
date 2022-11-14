const btn_setting = document.querySelector(".btn_setting")
const box_setting = document.querySelector(".box_setting")

try {
    let initTheme = JSON.parse(localStorage.getItem('setting_theme'));
    loadTheme(initTheme);
} catch (error) {
    console.log(error);
}

btn_setting.addEventListener("click", () => {
    box_setting.style = 'display: block'
    const btn_hidden = document.querySelector(".btn_hidden")


    // hidden box
    btn_hidden.addEventListener("click", () => {
        box_setting.style = 'display: none'
    })

})


$('.event_change_value').on('change', (e) => {

    let data = {};
    let nameInp = e.target.getAttribute('name');
    let valueLocalStorage = localStorage.getItem('setting_theme');
    let value = $(`[name=${nameInp}]:checked`).val();

    console.log(nameInp);

    if (!value) {
        value = $(`[name=${nameInp}]`).val();
    }

    if (valueLocalStorage) {
        data = JSON.parse(valueLocalStorage)
    }

    data[nameInp] = value;


    localStorage.setItem('setting_theme', JSON.stringify(data))
    loadTheme(data);
});


function loadTheme(data) {
    if (data) {
        // color main
        if (data.bg_color) {
            $('.read_book').css('background-color', data.bg_color);
        }

        // color text
        if (data.text_color) {
            console.log(data.text_color)
            $('.read_book').css('color', data.text_color);
        }

        // font family
        if (data.font) {
            $('.content_read_book').css('font-family', data.font);
            $(`.font option[value=${data.font}]`).attr('selected', 'selected');
        }

        // font size
        if (data.value_text_size) {
            $('.content_read_book').css('font-size', data.value_text_size + "px");
            $(".value_text_size").val(data.value_text_size);
        }

        // width content
        if (data.value_with_size) {
            $('.content_read_book').css('width', data.value_with_size + "px");
            $(".value_with_size").val(`${data.value_with_size}`);
        }

        // line height
        if (data.value_line_hight) {
            $('.content_read_book').css('line-height', data.value_line_hight + "%");
            $(".value_line_hight").val(data.value_line_hight);
        }

    }

}