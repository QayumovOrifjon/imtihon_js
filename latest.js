const latestList = document.querySelector("#latest_blogs");
const fetchDat = () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      data.slice(4, 8).forEach((item) => {
        console.log(item);
        const blog = document.createElement("div");
        const blogImage = document.createElement("img");
        const blogTitle = document.createElement("h3");
        const blogPrice = document.createElement("span");
        const blogPlus = document.createElement("span");

        blog.classList.add("blog");
        blogPlus.classList.add("plus");

        blogImage.src = item.image;
        blogTitle.textContent = item.title;
        blogPrice.textContent = item.price;
        blogPlus.textContent = "+";

        blog.appendChild(blogImage);
        blog.appendChild(blogTitle);
        blog.appendChild(blogPrice);
        blog.appendChild(blogPlus);

        latestList.appendChild(blog);
      });
    });
};
fetchDat();
