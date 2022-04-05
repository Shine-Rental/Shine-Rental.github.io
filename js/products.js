(function ($) {
    'use strict';

    const productsEl = document.getElementById('products');
    const products = Object.values(catalog)

    //const category = ["Set","Necklaces","Misc"
    //for (var i = 0; i <= category.length; i++) {
    function displayProductsDOM() {
        let htmlCode = ""
        const cats = {}
        products.forEach(ele => cats[ele.cat] = true)

        Object.keys(cats).forEach(ele => {
            htmlCode += `<div class="container"><h2>${ele}</h2></div><div class="container" style="display: flex; flex-wrap: wrap; align-content: space-around;" tag="${ele}">`
            console.log("cat: "+ele)
            htmlCode += products.map(product => {
            console.log(product.cat)
                if (product.cat === ele) return `
                        <div class="p_item" style="box-shadow: 0px 2px 3px 3px #ebebeb;border-radius: 5px;">
                            <a href="product-single.html?id=${product.itemID}" style="text-decoration:none;">
                                <img src="${product.image[0]}" alt="product-image" style="width:100%;">
                                <div style="padding:10px;">
                                <h5><b>${product.itemName}</b></h5>
                                <h5>Rental Price: <b style="color:#5e000d;"> &#8377; ${product.price} </b> </h5>
                                <h5>Security Deposit: <b style="color:#5e000d;"> &#8377; ${product.sd} </b> </h5>
                                </div>
                            </a>
                        </div>
                    `
                else return ""
            })
                .join('');

                htmlCode += '</div>'
        })

        productsEl.innerHTML = htmlCode
    }
    //  }
    displayProductsDOM()
})();
/*


*/
