/**
 * Javascript file for Hack Your Future, Javascript2, homework Week2
 * author: Ida Naderian
 * 
 * spirit Animal 
 */

console.log("loaded!!");

const spiritAnimal = [{
        name: 'fish',
        image: 'https://www.theastrologyweb.com/wp-content/uploads/2017/12/Fish-Symbolism-Spirit-Animal-Dream.jpg'
    },
    {
        name: 'alligator',
        image: 'https://www.theastrologyweb.com/wp-content/uploads/2018/02/Alligator-Symbolism-Spirit-Animal-Dream.jpg'
    },
    {
        name: 'pig',
        image: 'https://www.theastrologyweb.com/wp-content/uploads/2018/02/Pig-Symbolism-Spirit-Animal-Dream.jpg'
    },
    {
        name: 'fox',
        image: 'https://www.theastrologyweb.com/wp-content/uploads/2017/12/Fox-Symbolism-Spirit-Animal-Dream.jpg'
    },
    {
        name: 'hedgehog',
        image: 'https://www.theastrologyweb.com/wp-content/uploads/2017/12/Hedgehog-Symbolism-Spirit-Animal-Dream.jpg'
    },
    {
        name: 'panda',
        image: 'https://www.theastrologyweb.com/wp-content/uploads/2018/02/Panda-Symbolism-Spirit-Animal-Dream.jpg'
    },
    {
        name: 'falcon',
        image: 'https://www.theastrologyweb.com/wp-content/uploads/2017/12/Falcon-Symbolism-Spirit-Animal-Dream.jpg'
    }

];

/**
 * change image in image box
 *
 * @param {*} url
 * @param {*} img
 */
function changeImage(url, img) {
    img.src = url;
    console.log(img)
}


/**
 * check if input box empty or not
 *
 * @param {*} input
 * @returns boolean
 */
function isNameWrite(input) {
    if (inName.value === "") {
        return true;
    } else {
        return false;
    }
}

/**
 * get random animal from list and change a text and image
 *
 */
function showResult() {
    const alert = document.getElementsByClassName("alert-box");

    if (isNameWrite()) {
        alert[0].style.display = 'block';
        alert.innerHTML = "Please write your name";
    } else {
        alert[0].style.display = 'none';
        const h2 = document.querySelector('h2');
        const rand = parseInt(Math.random() * spiritAnimal.length);
        const text = inName.value + ' ' + spiritAnimal[rand].name;
        h2.innerHTML = text;
        changeImage(spiritAnimal[rand].image, image);
    }
}

//run

const image = document.querySelector('img.result-photo');
const btnResult = document.querySelector('button.result-button');
const inName = document.querySelector('input.usr__firstname');
const select = document.querySelector('select.usr__option');
console.log(select.options[0].selected)


btnResult.addEventListener('click', function () {
    showResult();

})

inName.addEventListener('mouseout', function () {
    if (select.value === 'click') {
        event.stopPropagation();
    } else {
        showResult();
    }
})

select.addEventListener('change', function () {
    console.log(select.options[0].selected)
    if (select.options[0].selected) {
        btnResult.disabled = false;
    } else {
        btnResult.disabled = true;
    }
})

