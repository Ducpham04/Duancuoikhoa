let products = [];

function initData() {
    products.push(new Product("BIE.BAC", 270000, "avaiable", "37", "Giầy phủi 3 sọc loại 1 - beck xanh biển sọc bạc", "img/product_1.png"))
    products.push(new Product("NGO.TRA", 270000, "avaiable", "39", "Giầy phủi 3 sọc loại 1 - beck xanh biển sọc trắng", "img/product_2.png"))
    products.push(new Product("TRA.CHU", 270000, "avaiable", "37", "Giầy phủi 3 sọc loại 1 - beck xanh biển sọc bạc", "img/product_3.png"))
    products.push(new Product("22102802", 270000, "avaiable", "37", "Giầy phủi 3 sọc loại 1 - beck xanh biển sọc bạc", "img/product_4.png"))
    products.push(new Product("22102801", 270000, "avaiable", "37", "Giầy phủi 3 sọc loại 1 - beck xanh biển sọc bạc", "img/product_5.png"))
    products.push(new Product("22092801", 270000, "avaiable", "37", "Giầy phủi 3 sọc loại 1 - beck xanh biển sọc bạc", "img/product_1.png"))
    products.push(new Product("22092801", 270000, "avaiable", "37", "Giầy phủi 3 sọc loại 1 - beck xanh biển sọc bạc", "img/product_1.png"))
    products.push(new Product("22092801", 270000, "avaiable", "37", "Giầy phủi 3 sọc loại 1 - beck xanh biển sọc bạc", "img/product_1.png"))
    products.push(new Product("22092801", 270000, "avaiable", "37", "Giầy phủi 3 sọc loại 1 - beck xanh biển sọc bạc", "img/product_1.png"))
    products.push(new Product("22092801", 270000, "avaiable", "37", "Giầy phủi 3 sọc loại 1 - beck xanh biển sọc bạc", "img/product_1.png"))
    products.push(new Product("22092801", 270000, "avaiable", "37", "Giầy phủi 3 sọc loại 1 - beck xanh biển sọc bạc", "img/product_1.png"))
    products.push(new Product("22092801", 270000, "avaiable", "37", "Giầy phủi 3 sọc loại 1 - beck xanh biển sọc bạc", "img/product_1.png"))
    products.push(new Product("22092801", 270000, "avaiable", "37", "Giầy phủi 3 sọc loại 1 - beck xanh biển sọc bạc", "img/product_1.png"))
    localStorage.setItem(KEY_PRODUCT_LIST, JSON.stringify(products))
}


show()

function show() {
    getProductList()
    let strList = ""
    for (let i = 0; i < products.length; i++) {
        let productStr = PRODUCT_STRING.replace(PRODUCT_IMAGE, products[i].image)
            .replaceAll(PRODUCT_STATUS, products[i].status)
            .replaceAll(PRODUCT_CODE, products[i].code)
            .replaceAll(PRODUCT_PRICE, products[i].price)
            .replaceAll(PRODUCT_SIZE, products[i].size)
            .replaceAll(PRODUCT_DESCRIPTION, products[i].description)
        strList += productStr;
    }
    document.getElementById("productList").innerHTML = strList;
}

function getProductList() {
    if (localStorage.getItem(KEY_PRODUCT_LIST)) {
        products = JSON.parse(localStorage.getItem(KEY_PRODUCT_LIST))
    } else {
        initData()
    }
}