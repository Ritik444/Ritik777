//store the products array in localstorage as "products"

function gotoinvetory(){
    window.location.href = "inventory.html"
}
function Admindata(t,d,p,i){
    this.type = t;
    this.description = d;
    this.price = p;
    this.image = i;
}

let arr = JSON.parse(localStorage.getItem("Proudts")) || []
function adminData(e) {
    e.preventDefault()

    let form = document.getElementById("product")

    let type = form.type.value;

    let description = form.desc.value;

    let price = form.price.value;

    let image = form.image.value;

    // console.log(type,description,price,image)

    let data = new Admindata(type,description,price,image)

    arr.push(data)

    localStorage.setItem("Products",JSON.stringify(arr))
    
}
