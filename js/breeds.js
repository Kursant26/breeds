const breeds = document.querySelector(".breeds")
const breedsImg = document.querySelector(".breed-img")
const select = document.querySelector(".select-red ")
const searchInp1 = document.querySelector(".search-input")
const searchBtn = document.querySelector(".search-btn")

select.addEventListener("change", (e) => {
    fetchImg(e.target.value)
})

searchBtn.addEventListener("click", () => {
    fetchImg(searchInp1.value.trim())
})

function fetchAll() {
    axios(`https://dog.ceo/api/breeds/list/all`)
        .then((res) => {
            Object.keys(res.data.message).map((el) => (
                breeds.innerHTML += `<button class="breed-btn btn btn-success m-1">${el}</button>`
            ))
            Object.keys(res.data.message).map((el) => {
                select.innerHTML += `<option value="${el}">${el}</option>`
            })
        })
        .then(() => getBtn())
}

fetchAll()


function getBtn() {
    const buttons = document.querySelectorAll(".breed-btn")
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            fetchImg(btn.innerHTML)
        })
    })
}

function fetchImg(name) {
    axios(`https://dog.ceo/api/breed/${name}/images/random`)
        .then((res) => {
            breedsImg.innerHTML = `<img src="${res.data.message}">`
        })
}

