document.addEventListener("DOMContentLoaded", function () {
  const sliderContent = document.querySelector(".slider-content");
  const slides = document.querySelectorAll(".slide");
  const prevButton = document.querySelector(".prev-slide");
  const nextButton = document.querySelector(".next-slide");
  const dotContainer = document.querySelector(".carousel-dots");
  let currentIndex = 0;
  const slideWidth = slides[0].clientWidth;
  const intervalTime = 4000; 

  slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index + "px";
    const dot = document.createElement("div");
    dot.classList.add("carousel-dot");
    dot.addEventListener("click", () => moveToSlide(index));
    dotContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".carousel-dot");

  const moveToSlide = (index) => {
    currentIndex = index;
    sliderContent.style.transform = `translateX(-${
      slideWidth * currentIndex
    }px)`;
    updateDots();
  };

  const updateDots = () => {
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });
  };

  const nextSlide = () => {
    currentIndex = (currentIndex + 1) % slides.length;
    sliderContent.style.transform = `translateX(-${
      slideWidth * currentIndex
    }px)`;
    updateDots();
  };

  const prevSlide = () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    sliderContent.style.transform = `translateX(-${
      slideWidth * currentIndex
    }px)`;
    updateDots();
  };

  prevButton.addEventListener("click", prevSlide);
  nextButton.addEventListener("click", nextSlide);

  updateDots();

  /*ozi yur*/
  setInterval(nextSlide, intervalTime);
});
/////////
const productsList = document.querySelector("#new_product");

const fetchData = () => {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((products) => {
        filteredProducts=products;
     renderData(products)
    });
};

const renderData = (data)=>{
    data.slice(0, 4).forEach((product) => {
        // console.log(product);
        const card = document.createElement("div");
        const cardImage = document.createElement("img");
        const cardTitle = document.createElement("h3");
        const cardPrice = document.createElement("span");
        const cardPlus = document.createElement("span");
        const cardNew = document.createElement("span");

        cardNew.innerText = "New";
        cardPlus.innerText = "+";

        cardPlus.classList.add("icon");
        cardPrice.classList.add("price");
        cardNew.classList.add("iconOne");

        card.classList.add("card");

        cardImage.src = product.image;
        cardTitle.textContent = product.title;
        cardPrice.textContent = product.price;

        card.appendChild(cardImage);
        card.appendChild(cardTitle);
        card.appendChild(cardPrice);
        card.appendChild(cardPlus);
        card.appendChild(cardNew);

        productsList.appendChild(card);
      });
}


// Search open close

const search = document.querySelector(".search");
const label = document.querySelector(".label");

search.addEventListener("click", () => {
  label.style.display = "block";
});

// like///////////////////////////////////////////////
let sum = 0;
const icon = document.querySelector("icon");
const shopping = document.querySelector(".shop");

console.log(icon);

icon.forEach((products) => {
  products.addEventListener("click", () => {
    sum = sum + 1;
    shopping.innerText = sum;
  });
}) 

// menu ni open close
const btn = document.getElementById('btn');
const centerList = document.querySelector('.center__list');

btn.addEventListener('click', () => {
  centerList.style.display === 'none' ? centerList.style.display = 'block' : centerList.style.display = 'none';
});

/*search*/

const searchInput = document.getElementById("searchInput");
let filteredProducts = [];


const productFun = (e)=>{
    const inputVal = e.target.value.toLowerCase();
    const filteredData = filteredProducts.filter((item)=>item.title.toLowerCase().includes(inputVal));
    console.log(filteredData);
    renderData(filteredData);
};

searchInput.addEventListener("input", productFun);
fetchData();