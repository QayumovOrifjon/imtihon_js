
const latestList = document.querySelector("#latest_blogs")
const fetchDat = ()=>{
    fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
        data.slice(4,8).forEach(item => {
            console.log(item);
const blog = document.createElement("div");
const blogImage = document.createElement("img");
const blogTitle = document.createElement("h3");
const blogPrice = document.createElement("span");
const blogRating = document.createElement("span");

blog.classList.add("blog")

blogImage.src = item.image 
blogTitle.textContent = item.title 
blogPrice.textContent = item.price 
blogRating.textContent = item.rating.rate

blog.appendChild(blogImage);
blog.appendChild(blogTitle);
blog.appendChild(blogPrice);
blog.appendChild(blogRating);

latestList.appendChild(blog);


        });
    })
}   
fetchDat();