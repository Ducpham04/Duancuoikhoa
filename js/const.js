const PRODUCT_STRING = `
<div class="col-xxll-1 col-xs-6 col-sm-4 col-md-4 col-lg-4 product-col">
    <div class="item_product_main product_convert">
        <div class="col-item product_convert">
            <div class="product-image-area biz-qv-image ">
\t\t<span class="product-image">
            <a href="detail.html" class="evo-image-pro product-item-photo"
               title="Gi&#224;y Phủi 3 Sọc Loại 1 - Beck Xanh Biển Sọc Bạc">
\t\t\t\t<img class="lazyload img-responsive"
                     src="{{PRODUCT_IMG}}"
                     alt="Gi&#224;y Phủi 3 Sọc Loại 1 - Beck Xanh Biển Sọc Bạc"/>
\t\t\t</a>
\t\t</span>
            </div>
            <div class="info">
                <div class="info-inner">
                    <div class="item-csku">
                        Mã sỉ lẻ:
                        <span id='display' onClick='copyText(this)'>{{PRODUCT_CODE}}</span>
                    </div>
                    <div class="item-content">
                        <div class="price-box">
                            <div class="special-price">
                                <span class="price product-price">{{PRODUCT_PRICE}}₫</span>
                            </div>
                        </div>
                    </div>
                    <div class="box_tagsp">
                        <div class="item-content-tag">
                            {{PRODUCT_STATUS}}
                        </div>
                    </div>
                    <div class="box_zac">
                        <span> </span>


                        <style>
                            label[for="product-select-option-0"] {
                                display: none;
                            }

                            #product-select-option-0 {
                                display: none;
                            }

                            #product-select-option-0 + .custom-style-select-box {
                                display: none !important;
                            }
                        </style>


                        <div class="swatch clearfix" data-option-index="0">
                            <div class="header">Kích Thước</div>


                            <div data-value="37" class="swatch-element  37">

                                <input id="swatch-0-37" type="radio" name="option-0"
                                       value="{{PRODUCT_SIZE}}"/>

                                <label for="swatch-0-37">
                                    {{PRODUCT_SIZE}}
                                    <img alt="Cỡ giày thể thao 0" class="crossed-out"
                                         src="//bizweb.dktcdn.net/100/108/842/themes/775959/assets/soldout.png?1686906222515"/>
                                </label>

                            </div>

                        </div>


                    </div>

                    <div class="item-title"><a
                            title="Giày Phủi 3 Sọc Loại 1 - Beck Xanh Biển Sọc Bạc"
                            onclick="redirect({{PRODUCT_INDEX}})"><h3>
                        {{PRODUCT_DESCRIPTION}}</h3></a></div>


                    <div class="button_mobile hidden-lg hidden-md hidden-xs hidden-sm">
                        <form action="/cart/add" method="post" class="variants"
                              id="product-actions-29663099"
                              enctype="multipart/form-data">
                            <div class="ab-buyx-products"
                                 data-productid="29663099"></div>
                            <div class="actions">
                                <button onclick="window.location.href='add.html'"
                                        class="button btn-cart" title="Chọn sản phẩm "
                                        type="button"><span>Chọn sản phẩm </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
    </div>
</div>
`

const PRODUCT_IMAGE = "{{PRODUCT_IMG}}"
const PRODUCT_STATUS = "{{PRODUCT_STATUS}}"
const PRODUCT_CODE = "{{PRODUCT_CODE}}"
const PRODUCT_PRICE = "{{PRODUCT_PRICE}}"
const PRODUCT_DESCRIPTION = "{{PRODUCT_DESCRIPTION}}"
const PRODUCT_SIZE = "{{PRODUCT_SIZE}}"
const PRODUCT_INDEX = "{{PRODUCT_INDEX}}"
const KEY_PRODUCT_LIST = "LIST"
const KEY_PRODUCT = "product"