const seedColor = document.getElementById('seed-color')
const seedMode = document.getElementById('seed-mode')
const btn = document.querySelector('button')

btn.addEventListener('click', () => {
    const url = `https://www.thecolorapi.com/scheme?hex=${seedColor.value.slice(1)}&mode=${seedMode.value.toLowerCase()}&count=5`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            let colorSchemeHtml = ''
            
            // rendering colors
            for (let color of data.colors){
                colorSchemeHtml += `<div style="background-color:#${color.hex.clean}"></div>`
            }
            //rendering names
            for (let color of data.colors){
                colorSchemeHtml += `<span>${color.hex.value}</span>`
            }
            document.getElementById('scheme-container').innerHTML = colorSchemeHtml
        })
})