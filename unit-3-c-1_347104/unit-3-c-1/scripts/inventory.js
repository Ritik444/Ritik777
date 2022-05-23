let   productList = JSON.parse(localStorage.getItem("Proudts"))

productList.map(function (elem,index){
    let div = document.getElementById("all_products")

    let img = document.createElement("img")
    img.src = elem.image;

    let p = document.createElement("p")
    p.innerText = elem.type;

    let p1 = document.createElement("p")
    p1.innerText = elem.desc;

    let p2 = document.createElement("p")
    p2.innerText = elem.price;

    let btn = document.createElement("remove_product")
    btn.innerText = "Remove"
    btn.addEventListener("click",function() {
        this.remove(elem);
    })

    div.append(img,p,p1,p2)

    document.querySelector("body").append(div)
})