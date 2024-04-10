// Получаем ссылку на кнопку и изображение
const decreaseButton = document.getElementById('decreaseButton');
const imageToChange = document.getElementById('photo');

// Добавляем обработчики событий для наведения и ухода мыши
decreaseButton.addEventListener('mouseenter', decreaseImageSize);
decreaseButton.addEventListener('mouseleave', resetImageSize);

// Функция для уменьшения размеров изображения
function decreaseImageSize() {
  const currentWidth = photo.width;
  const currentHeight = photo.height;
  const newWidth = currentWidth * 0.95; // Уменьшаем ширину на 10%
  const newHeight = currentHeight * 0.95; // Уменьшаем высоту на 10%
  photo.width = newWidth;
  photo.height = newHeight;
}

// Функция для сброса размеров изображения
function resetImageSize() {
  // Здесь можно указать исходные размеры изображения
  // Например:
   imageToChange.width = 500;
   imageToChange.height = 500;
  // Это если вы знаете исходные размеры изображения.
}
// Получаем ссылку на кнопку и изображение
const decreaseButton1 = document.getElementById('decreaseButton1');
const imageToChange1 = document.getElementById('photo');

// Добавляем обработчики событий для наведения и ухода мыши
decreaseButton1.addEventListener('mouseenter', decreaseImageSize1);
decreaseButton1.addEventListener('mouseleave', resetImageSize);

// Функция для уменьшения размеров изображения
function decreaseImageSize1() {
  const currentWidth = photo.width;
  const currentHeight = photo.height;
  const newWidth = currentWidth * 1; // Уменьшаем ширину на 10%
  const newHeight = currentHeight * 1; // Уменьшаем высоту на 10%
  photo.width = newWidth;
  photo.height = newHeight;
}

// Функция для сброса размеров изображения
function resetImageSize() {
  // Здесь можно указать исходные размеры изображения
  // Например:
   imageToChange.width = 500;
   imageToChange.height = 500;
  // Это если вы знаете исходные размеры изображения.
}

// Получаем ссылку на кнопку и изображение
const decreaseButton2 = document.getElementById('decreaseButton2');
const imageToChange2 = document.getElementById('photo');

// Добавляем обработчики событий для наведения и ухода мыши
decreaseButton2.addEventListener('mouseenter', decreaseImageSize2);
decreaseButton2.addEventListener('mouseleave', resetImageSize);

// Функция для уменьшения размеров изображения
function decreaseImageSize2() {
  const currentWidth = photo.width;
  const currentHeight = photo.height;
  const newWidth = currentWidth * 1.20; // Уменьшаем ширину на 10%
  const newHeight = currentHeight * 1.20; // Уменьшаем высоту на 10%
  photo.width = newWidth;
  photo.height = newHeight;
}

// Функция для сброса размеров изображения
function resetImageSize() {
  // Здесь можно указать исходные размеры изображения
  // Например:
   imageToChange.width = 500;
   imageToChange.height = 500;
  // Это если вы знаете исходные размеры изображения.
}

// Получаем ссылку на кнопку и изображение
const decreaseButton3 = document.getElementById('decreaseButton3');
const imageToChange3 = document.getElementById('photo');

// Добавляем обработчики событий для наведения и ухода мыши
decreaseButton3.addEventListener('mouseenter', decreaseImageSize3);
decreaseButton3.addEventListener('mouseleave', resetImageSize);

// Функция для уменьшения размеров изображения
function decreaseImageSize3() {
  const currentWidth = photo.width;
  const currentHeight = photo.height;
  const newWidth = currentWidth * 1.30; // Уменьшаем ширину на 10%
  const newHeight = currentHeight * 1.30; // Уменьшаем высоту на 10%
  photo.width = newWidth;
  photo.height = newHeight;
}

// Функция для сброса размеров изображения
function resetImageSize() {
  // Здесь можно указать исходные размеры изображения
  // Например:
   imageToChange.width = 500;
   imageToChange.height = 500;
  // Это если вы знаете исходные размеры изображения.
}


  function changeContent1() {
    // Получаем элементы
    var photoElement = document.getElementById("photo");
    var textElement = document.getElementById("text");
    var contentElement = document.getElementById("subtitle");
    var rightElement= document.getElementById("right");
    var leftElement = document.getElementById("left");
    

    // Изменяем фото, текст и контент
    photoElement.src = "men.png";
    rightElement.style.background = "#010932";
    leftElement.style.background = "#e4dcdc";
    textElement.innerHTML = "colorblock";
    textElement.style = "none";
    contentElement.innerHTML = "ZIP-UP HOODIE";

    var newBackgrounds = ['url(men1.png)', 'url(men2.png)', 'url(men3.png)'];

// Получаем все div'ы
var divs = document.querySelectorAll('.bottomnavimg');

// Применяем новый фон к каждому div
for (var i = 0; i < divs.length; i++) {
  divs[i].style.backgroundImage = newBackgrounds[i];
}

    again()
    
}

function changeContent2() {
     // Получаем элементы
     var photoElement = document.getElementById("photo");
     var textElement = document.getElementById("text");
     var contentElement = document.getElementById("subtitle");
     var rightElement= document.getElementById("right");
     var leftElement = document.getElementById("left");
 
     // Изменяем фото, текст и контент
     photoElement.src = "women.png";
     rightElement.style.background = "";
     leftElement.style.background = "#b7b5b3";
     textElement.innerHTML = "colorblock";
     textElement.style = "none";
     contentElement.innerHTML = "GRAPHIC SIGNATURE CREWNECK SWEATSHIRT";
 
     var newBackgrounds = ['url(women1.jpg)', 'url(women1.jpg)', 'url(women1.jpg)'];

     // Получаем все div'ы
     var divs = document.querySelectorAll('.bottomnavimg');
     
     // Применяем новый фон к каждому div
     for (var i = 0; i < divs.length; i++) {
       divs[i].style.backgroundImage = newBackgrounds[i];
     }
     again()
}

function changeContent3() {
     // Получаем элементы
     var photoElement = document.getElementById("photo");
     var textElement = document.getElementById("text");
     var contentElement = document.getElementById("subtitle");
     var rightElement= document.getElementById("right");
     var leftElement = document.getElementById("left");
 
     // Изменяем фото, текст и контент
     photoElement.src = "kids.png";
     rightElement.style.background = "";
     leftElement.style.background = "#90bbbb";
     textElement.innerHTML = "colorblock";
     textElement.style = "none";
     contentElement.innerHTML = "LONG SLEEVE THERMAL SHIRT";
 
     var newBackgrounds = ['url(kids1.png)', 'url(kids2.png)', 'url(kids3.png)'];

     // Получаем все div'ы
     var divs = document.querySelectorAll('.bottomnavimg');
     
     // Применяем новый фон к каждому div
     for (var i = 0; i < divs.length; i++) {
       divs[i].style.backgroundImage = newBackgrounds[i];
     }
     again()
}


function again () {
  TweenMax.from(".left", 1, {
      delay: 0.6,
      width: 0,
      ease: Expo.easeInOut
    })

    TweenMax.from(".right", 1, {
      delay: 0.6,
      width: 0,
      ease: Expo.easeInOut
    })

    TweenMax.from(".logo", 1, {
      delay: 1,
      opacity: 0,
      x: -20,
      ease: Expo.easeInOut
    })

    TweenMax.from(".menu", 1, {
      delay: 1.2,
      opacity: 0,
      x: -20,
      ease: Expo.easeInOut
    });

    TweenMax.from(".categories", 1, {
      delay: 1.4,
      opacity: 0,
      x: -150,
      ease: Expo.easeInOut
    });

    TweenMax.from(".search", .8, {
      delay: 1.6,
      opacity: 0,
      x: -20,
      ease: Expo.easeInOut
    });

    TweenMax.from(".bag", 1, {
      delay: 1.6,
      opacity: 0,
      x: -20,
      ease: Expo.easeInOut
    });

    TweenMax.staggerFrom(".media ul li", 1, {
      delay: 2,
      opacity: 0,
      x: -20,
      ease: Power3.easeInOut
    }, 0.08);

    TweenMax.from(".size", 1, {
      delay: 1.8,
      opacity: 0,
      x: -20,
      ease: Expo.easeInOut
    });

    TweenMax.staggerFrom(".size ul li", .3, {
      delay: 2,
      opacity: 0,
      y: 20,
      ease: Power3.easeInOut
    }, 0.08);

    TweenMax.staggerFrom(".dot", 1, {
      delay: 2.4,
      opacity: 0,
      x: 20,
      ease: Power3.easeInOut
    }, 0.08);

    TweenMax.from(".bottomnav", 1, {
      delay: 2.4,
      opacity: 0,
      x: -20,
      ease: Expo.easeInOut
    });

    TweenMax.from(".bottomnav ul li:first-child", .5, {
      delay: 2.4,
      opacity: 0,
      x: -20,
      ease: Expo.easeInOut
    });

    TweenMax.from(".bottomnav ul li:last-child", .6, {
      delay: 2.4,
      opacity: 0,
      x: -20,
      ease: Expo.easeInOut
    });

    TweenMax.from(".product-img", 3, {
      delay: 2,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
    });

    TweenMax.from(".product-title", 3, {
      delay: 2.2,
      opacity: 0,
      y: 50,
      ease: Expo.easeInOut
    });

    TweenMax.from(".product-subtitle", 3, {
      delay: 2.4,
      opacity: 0,
      y: 50,
      ease: Expo.easeInOut
    });
}

const slides = document.querySelectorAll('.bottomnavimg');
let currentSlideIndex = 0;

function showSlide(index) {
  // Скрыть все слайды
  slides.forEach(bottomnavimg => {
    bottomnavimg.style.display = 'none';
  });
  // Показать текущий слайд
  slides[index].style.display = 'block';
}

document.getElementById('prevBtn').addEventListener('click', function() {
  currentSlideIndex--;
  if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1;
  }
  showSlide(currentSlideIndex);
});

document.getElementById('nextBtn').addEventListener('click', function() {
  currentSlideIndex++;
  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  }
  showSlide(currentSlideIndex);
});

// Показать первый слайд при загрузке страницы
showSlide(currentSlideIndex);

var newBackgrounds = ['url(main.jpeg)', 'url(main1.jpg)', 'url(main2.jpg)'];

// Получаем все div'ы
var divs = document.querySelectorAll('.bottomnavimg');

// Применяем новый фон к каждому div
for (var i = 0; i < divs.length; i++) {
  divs[i].style.backgroundImage = newBackgrounds[i];
}