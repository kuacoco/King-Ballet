function $(selector) {
    return document.querySelector(selector)
}

const body = $('body')
const movies = []
let aes = body.querySelectorAll('a')
aes = Array.prototype.slice.apply(aes)

aes.forEach(ae => {
    let title = ae.innerText
    let href = ae.href
    let i = title.indexOf(' ')
    title = title.slice(i + 1)
    movies.push({
        title,
        href,
    })
});

console.log(JSON.stringify(movies.reverse()))