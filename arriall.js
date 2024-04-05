const arialList = document.querySelector(".new__arial")
const fetchDates = ()=>{
    fetch("https://fakestoreapi.com/products")
    .then(response => response. json())
    .then(data =>{
data.slice(16,20).forEach(element => {
    console.log(element);

    const wrap = document.createElement("div");
    const wrapImage = document.createElement("img");
    const wrapTitle =document.createElement("h3");
    const wrapPrice = document.createElement("span");
    const wrapPlus = document.createElement("span");

    wrap.classList.add("wrap")
    wrapPlus.classList.add("icon")

    wrapImage.src = element.image
    wrapTitle.textContent =element.title
    wrapPrice.textContent = element.price
    wrapPlus.innerText = "+"


    wrap.appendChild(wrapPlus);
    wrap.appendChild(wrapImage);
    wrap.appendChild(wrapTitle);
    wrap.appendChild(wrapPrice);

    arialList.appendChild(wrap)
});
    })
}
fetchDates();