const pSelect = document.querySelectorAll('div.countries p')
const countries = document.querySelectorAll('div.background div')
pSelect.forEach(item => item.addEventListener('mouseover', showCountry))

// funkcja pokazująca kraje po najechaniu
function showCountry() {
    document.querySelector('div.countries').classList.add('move')
    document.querySelector('div.title').style.display = 'none';
    document.querySelector('div.description').style.display = 'none';

    pSelect.forEach(item => {
        item.classList.remove('active')
        item.style.color = '#222'
    })
    countries.forEach(item => {
        item.style.display = 'none'
    })
    const name = this.className
    this.style.color = "white"
    countries.forEach(item => {
        if (item.className == name) {
            item.style.display = 'block'
        }
    })
}


// Funkcja centrująca na mobilki

function mobileCenter() {
    const width = window.innerWidth
    if (width < 771) {
        const background = document.querySelector('div.background')
        pSelect.forEach(item => {
            item.addEventListener('mouseover', center)
        })
        function center() {
            countries.forEach(item => {
                if (item.offsetLeft > 0) {
                    background.scroll({
                        left: item.offsetLeft - window.innerWidth / 2
                    })
                }
            })
        }
    }
}

mobileCenter()
window.addEventListener('click', mobileCenter)
