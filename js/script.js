
const row = document.querySelector(".row")
const searchInp = document.querySelector(".search-input")
const searchBtn = document.querySelector(".search-btn")
const slSort = document.querySelector(".select-sort")
const slReg = document.querySelector(".select-red")
// const head = document.querySelector("#header")



axios(`https://restcountries.com/v2/all`)
.then((task) => {
    console.log(task.data)
    task.data.map((el) => {
        row.innerHTML += `<div class="border py-5">
        <img src="${el.flags.svg}" width="300px" height="200px">
        <h1>${el.name}</h1>
        <h3> Столица : ${el.capital}</h3>
        <h2> Плошадь : ${el.area}КВ<sup>2</sup></h2>
        <h2> Регион : ${el.region}</h2>
        <h3> Наcеленние : ${el.population}</h3>
        </div>`
    })
})

let all = null

function task(API){
    axios(`https://restcountries.com/v3.1/${API}`)
.then((res) => {
        all = res.data
        get(res.data)
    })
}
task("all")
searchInp.addEventListener("keydown",(e) => {
    if (e.key === "Enter"){
        task(`name/${searchInp.value}`)

    }
})
searchInp.addEventListener("input", (e) => {
    task(`name/${e.target.value}`)
})
searchBtn.addEventListener("click", () => {
    task(`name/${searchInp.value}`)

})


function get(data) {
    window.scroll(0,0)
    row.innerHTML = ""
    data.map((el) => {
        row.innerHTML += `<div class="card col-4 py-4 mx-3 my-3 d-flex  flex-wrap text-center bg-primary bg-gradient oferflow-auto" style="width: 400px">
        <img src="${el.flags.svg}" width="100%" height="300px" class="card-img-top object-fit-cover border rounded">
        <h1>${el.name.common}</h1>
        <h3> Столица : ${el.capital}</h3>
        <h2> Плошадь : ${el.area}кв<sup>2</sup></h2>
        <h2> Регион : ${el.region}</h2>
        <h3> Наcиленние : ${el.population}</h3>
        </div>`
    })
}


slSort.addEventListener("change", (e) => {
    const value = e.target.value
    if (value === "population"){
        const result = all.sort((a,b) => {
            return b.population - a.population
        })
        get(result)
    }else if (value === "area"){
        const result = all.sort((a,b) => {
            return b.area - a.area
        })
        get(result)
    }else if (value === "A-Z") {
        const result = all.sort((a,b) =>{
            if (b.name.common[0] > a.name.common[0]) {
                return -1
            }else if (b.name.common[0] < a.name.common[0]){
                return 1
            }
        })
        get(result)
    }else if (value === "Z-A"){
        const result = all.sort((a,b) =>{
            if (b.name.common[0] > a.name.common[0]) {
                return 1
            }else if (b.name.common[0] < a.name.common[0]){
                return -1
            }
        })
        get(result)

    }
})




slReg.addEventListener("change", (e) => {
    const regValue = e.target.value
    if (regValue === "asia"){
        const res = all.filter((el)=> {
            return el.region === "Asia"
        })
        get(res)
    }
    else if (regValue === "europe"){
        const res = all.filter((el)=> {
            return el.region === "Europe"
        })
        get(res)
    }
    else if (regValue === "oceania"){
        const res = all.filter((el)=> {
            return el.region === "Oceania"
        })
        get(res)
    }
    else  if (regValue === "africa"){
        const res = all.filter((el)=> {
            return el.region === "Africa"
        })
        get(res)
    } else  if (regValue === "Oceania"){
        const res = all.filter((el)=> {
            return el.region === "Oceania"
        })
        get(res)
    }
})









































// const row = document.querySelector(".row")
// const searchInp = document.querySelector(".search-input")
// const searchBtn = document.querySelector(".search-btn")
// const slSort = document.querySelector(".select-sort")
// axios(`https://restcountries.com/v2/all`)
// .then((task) => {
//     console.log(task.data)
//     task.data.map((el) => {
//         row.innerHTML += `<div class="col-4 my-4 border border-danger">
//         <img src="${el.flags.svg}" alt="" width="300px" height="200px">
//         <h1>${el.name}</h1>
//         <h3> Столица : ${el.capital}</h3>
//         <h2> Плошадь : ${el.area}КВ<sup>2</sup></h2>
//         <h2> Регион : ${el.region}</h2>
//         <h3> Нациленние : ${el.population}</h3>
//         <h3> Код страны : ${el.numericCode ?el.numericCode :"no"}</h3>
//         </div>`
//     })
// })
//
// let all = null
//
// function task(API){
//     axios(`https://restcountries.com/v3.1/${API}`)
//         .then((res) => {
//         all = res.data
//         get(res.data)
//     })
// }
// task("all")
// searchInp.addEventListener("keydown",(e) => {
//     if (e.key === "Enter"){
//         task(`name/${searchInp.value}`)
//
//     }
// })
// searchInp.addEventListener("input", (e) => {
//     task(`name/${e.target.value}`)
// })
// searchBtn.addEventListener("click", () => {
//     task(`name/${searchInp.value}`)
//
// })
//
//
// function get(data) {
//     row.innerHTML = ""
//     data.map((el) => {
//         row.innerHTML += `<div class="col-4 my-2">
//         <img src="${el.flags.svg}" alt="" width="300px" height="200px">
//         <h1>${el.name.common}</h1>
//         <h3> Столица : ${el.capital}</h3>
//         <h2> Плошадь : ${el.area}КВ<sup>2</sup></h2>
//         <h2> Регион : ${el.region}</h2>
//         <h3> Нациленние : ${el.population}</h3>
//         <h3> Код страны : ${el.numericCode}</h3>
//         </div>`
//     })
// }
//
//
// //console.log(task())
//
// slSort.addEventListener("change", (e) => {
//     const value = e.target.value
//     if (value === "population"){
//         const result = all.sort((a,b) => {
//             return b.population - a.population
//         })
//         get(result)
//     }else if (value === "area"){
//         const result = all.sort((a,b) => {
//             return b.area - a.area
//         })
//         get(result)
//     }else if (value === "A-Z") {
//         const result = all.sort((a,b) =>{
//             if (b.name.common[0] > a.name.common[0]) {
//                 return -1
//             }else if (b.name.common[0] < a.name.common[0]){
//                 return 1
//             }
//         })
//         get(result)
//     }else if (value === "Z-A"){
//         const result = all.sort((a,b) =>{
//             if (b.name.common[0] > a.name.common[0]) {
//                 return 1
//             }else if (b.name.common[0] < a.name.common[0]){
//                 return -1
//             }
//         })
//         get(result)
//
//     }
// })
//
//
//
//
//
//
//
//
















