let productList;

function getProductList() {
    if (localStorage.getItem(KEY_PRODUCT_LIST)) {
        productList = JSON.parse(localStorage.getItem(KEY_PRODUCT_LIST))
    } else {
        productList = []
    }
}

function add() {
    getProductList()
    let description = document.getElementById("name").value;
    let code = document.getElementById("code").value;
    let size = document.getElementById("size").value;
    // let soluong = document.getElementById("soluong");
    let price = document.getElementById("price").value
    let status = "avaiable"
    let image = "img/product_1"
    let product = new Product(code, price, status, size, description, image)
    productList.push(product)
    localStorage.setItem(KEY_PRODUCT_LIST,JSON.stringify(productList))
}