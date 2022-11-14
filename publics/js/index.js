const box_main = document.querySelector(".main")
const content_read_book = document.querySelector(".content_read_book")


const btn_setting = document.querySelector(".btn_setting")
const box_setting = document.querySelector(".box_setting")

const theme_setting = {
    color_main: "",
    color_text: "",
    font_text: "",
    font_size: 16,
    width_text: 980,
}

const get_theme = JSON.parse(localStorage.getItem('setting_theme'))
console.log(get_theme)


if (get_theme) {
    box_main.style = `background-color: #${get_theme.color_main}`;
    content_read_book.style = `color: #${get_theme.color_text}`
    content_read_book.style = `font-family: '${get_theme.font_text}`
    content_read_book.style = `font-family: '${get_theme.font_text}`
    content_read_book.style = `width: ${get_theme.width}px;`
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
    const btn_apart_text_size = document.querySelector(".btn_apart_text_size")
    const btn_add_text_size = document.querySelector(".btn_add_text_size")
    const value_text_size = document.querySelector(".value_text_size")

    btn_apart_text_size.addEventListener("click", () => {
        const font_size = 14;

    })
    btn_add_text_size.addEventListener("click", () => {
        content_read_book.style = `font-size: 18px`
    })

    // Width content
    const btn_apart_width = document.querySelector(".btn_apart_width")
    const btn_add_width = document.querySelector(".btn_add_width")

    btn_apart_width.addEventListener("click", () => {
        content_read_book.style = `width: 800px;margin: auto`
    })
    btn_add_width.addEventListener("click", () => {
        content_read_book.style = `width: 1000px;margin: auto`
    })

    // Line-height text
    const btn_apart_padding = document.querySelector(".btn_apart_padding")
    const btn_add_padding = document.querySelector(".btn_add_padding")

    btn_apart_padding.addEventListener("click", () => {
        content_read_book.style = `line-height: 100%`
    })
    btn_add_padding.addEventListener("click", () => {
        content_read_book.style = `line-height: 150%`
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