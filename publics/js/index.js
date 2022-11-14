const box_main = document.querySelector(".main")
const content_read_book = document.querySelector(".content_read_book")


const btn_setting = document.querySelector(".btn_setting")
const box_setting = document.querySelector(".box_setting")

const theme_setting = {
    color_main: "",
    color_text: "",
    font_text: "",
    font_size: "",
    width_text: "",
    line_height: ""
}

const get_theme = JSON.parse(localStorage.getItem('setting_theme'))
console.log(get_theme)


if (get_theme) {
    // color main
    box_main.style = `background-color: #${get_theme.color_main}`;
    // color text
    content_read_book.style = `color: #${get_theme.color_text}`;
    // font family
    content_read_book.style = `font-family: '${get_theme.font_text}`;
    // font size
    content_read_book.style = `font-size: ${get_theme.font_size}px;`;
    // width content
    content_read_book.style = `width: ${get_theme.width_text}px;`;
    // line height
    content_read_book.style = `line-height: ${get_theme.line_height}%`;
}





btn_setting.addEventListener("click", () => {
    box_setting.style = 'display: block'
    const btn_hidden = document.querySelector(".btn_hidden")

    const btn_color_main = document.querySelectorAll(".btn_color_main")
    const btn_color_text = document.querySelectorAll(".btn_color_text")

    // color main
    btn_color_main.forEach(item => {
        item.addEventListener("click", () => {
            box_main.style = `background-color: #${item.value}`
            theme_setting.color_main = item.value
            localStorage.setItem('setting_theme', JSON.stringify(theme_setting))
        })
    })

    // color text
    btn_color_text.forEach(item => {
        item.addEventListener("click", () => {
            content_read_book.style = `color: #${item.value}`
            theme_setting.color_text = item.value
            localStorage.setItem('setting_theme', JSON.stringify(theme_setting))
        })
    })

    // Size text
    const value_text_size = document.querySelector(".value_text_size")

    value_text_size.addEventListener("change", () => {
        content_read_book.style = `font-size: ${value_text_size.value}px`
        theme_setting.font_size = value_text_size.value
        localStorage.setItem('setting_theme', JSON.stringify(theme_setting))
    })

    // Width content
    const value_with_size = document.querySelector(".value_with_size")

    value_with_size.addEventListener("change", () => {
        content_read_book.style = `width: ${value_with_size.value}px;`
        theme_setting.width_text = value_with_size.value
        localStorage.setItem('setting_theme', JSON.stringify(theme_setting))
    })

    // Line-height text
    const value_line_hight = document.querySelector(".value_line_hight")

    value_line_hight.addEventListener("change", () => {
        content_read_book.style = `line-height: ${value_line_hight.value}%;`
        theme_setting.line_height = value_line_hight.value
        localStorage.setItem('setting_theme', JSON.stringify(theme_setting))
    })


    // Font text
    const font_text = document.querySelector(".font")
    font_text.addEventListener("change", () => {
        content_read_book.style = `font-family: '${font_text.value}'`;
        theme_setting.font_text = font_text.value
        localStorage.setItem('setting_theme', JSON.stringify(theme_setting))
    })





    // hidden box
    btn_hidden.addEventListener("click", () => {
        box_setting.style = 'display: none'
    })

})