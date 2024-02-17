const row = document.querySelector('.row'),
    error = document.querySelector('.error'),
    input = document.querySelector('.input'),
    btn = document.querySelector('.search-btn');


btn.addEventListener('click',()=> {

    fetch(`https://dog.ceo/api/breed/${input.value.toLowerCase()}/images`)
        .then(res => res.json())
        .then(date => {
            console.log(date.message)

            row.innerHTML = ''
            if (date.message === "Breed not found (master breed does not exist)") {
                error.style.display = 'block'
                input.value = ''
            } else {
                input.value = ''
                error.style.display = 'none'
                date.message.map(el => {
                    row.innerHTML += `
                <div class="d-flex col-4 my-3">
                <img src="${el}" alt="img" class="img">
                </div>
                `
                })
                error.innerText = ''
            }
        })
});



