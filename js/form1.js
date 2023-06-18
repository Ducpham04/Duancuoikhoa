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
    //TODO: Validate các trường, phải nhập thì mới add sản phẩm
    let description = document.getElementById("name").value;
    let code = document.getElementById("code").value;
    let size = document.getElementById("size").value;
    let price = document.getElementById("price").value
    let status = "avaiable"
    let image = "img/product_1.png"
    let product = new Product(code, price, status, size, description, image)

    //TODO: Check Mã sản phẩm là duy nhất. Nếu bị trùng với mã sản phẩm đã có trong list, thì alert cho người dùng để họ nhập lại
    //Nếu không bị trùng thì mới đẩy lên danh sách sản phẩm

    productList.push(product)
    localStorage.setItem(KEY_PRODUCT_LIST,JSON.stringify(productList))
    alert("Add product successfully!")
    window.location.href="index.html"
}