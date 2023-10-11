const apiKey = 'sqO22cNuXCuGPg6mPeXFvBM1r--xIoeLDwYt7mvHGkE';
const inputElement = document.querySelector('.input-element')
const submitBtn = document.querySelector('.search-btn')

let page = 1
let imageHTML = ''

function imageSearch(){
    fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${inputElement.value}&client_id=${apiKey}`)
        .then((imageData) => {
            return imageData.json()
        })
        .then((data) => {
            const imageResults = data.results
            imageResults.forEach((image) => {
             imageHTML += `
                <div class="output-image-box">
                    <img src="${image.urls.small}" alt="">
                    <a href="${image.links.html}" class="image-title" target="_blank">${image.alt_description}</a>
                </div>
                `
                document.querySelector('.output-image-grid').innerHTML = imageHTML

                page = 2
                if(page > 1) {
                loadBtn.style.display = 'block'

            }
            } )
 })
}

// submitBtn.addEventListener('click', () => {
//     if(inputElement.value !== inputElement.value){
//         page = 1
//         document.querySelector('.output-image-grid').innerHTML = '';
//         imageSearch();
//     } else{
//         imageSearch()
//     }
// })

submitBtn.addEventListener('click', imageSearch)
const loadBtn = document.querySelector('.load-more')

loadBtn.addEventListener('click', () => {
     page++
    imageSearch()
})

inputElement.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        imageSearch()
    }
})