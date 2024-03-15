/* 
<div class="productItem">
    <img src="images/productImg1.jpg">
    <span>Dori</span>
    <p>A scary and attractive character</p>
    <span>520</span>
</div> 
*/
const productSection = document.querySelector("#products");
// STEP 1 : create product with js
// Create ProductItem Div & set CSSClass
const productItem = document.createElement("div");
productItem.classList.add("productItem");
// Create Product Thumbnail  & Append to mainDiv
const productThumb = document.createElement("img");
productThumb.setAttribute("src", "images/productImg1.jpg");
productItem.appendChild(productThumb);
// Create Product Description  & Append to mainDiv
const productTitle = document.createElement("span");
productTitle.innerText = "Dori";
productItem.appendChild(productTitle);

// Create Product Description  & Append to mainDiv
const productDesc = document.createElement("p");
productDesc.innerText = "A scary and attractive character";
productItem.appendChild(productDesc);

// Create Product Price Element & Append to mainDiv
const productPrice = document.createElement("span");
productPrice.innerText = "520";
productItem.appendChild(productPrice);

// productSection.appendChild(productItem)

// STEP 2 : make project functional

function productGenerator(pThumb, pTitle, pDesc, pPrice) {
    // Create ProductItem Div & set CSSClass
    const productItem = document.createElement('div')
    productItem.classList.add('productItem')

    // Create Product Thumbnail  & Append to mainDiv
    const productThumb = document.createElement('img')
    productThumb.setAttribute('src', pThumb)
    productItem.appendChild(productThumb)

    // Create Product Title & Append to mainDiv
    const productTitle = document.createElement('span')
    productTitle.innerText = pTitle
    productItem.appendChild(productTitle)

    // Create Product Description  & Append to mainDiv
    const productDesc = document.createElement('p')
    productDesc.innerText = pDesc
    productItem.appendChild(productDesc)

    // Create Product Price Element & Append to mainDiv
    const productPrice = document.createElement('span')
    productPrice.innerText = pPrice
    productItem.appendChild(productPrice)

    return productItem
}

productSection.appendChild(
    productGenerator('images/productImg1.jpg','Dori','A scary and attractive character','520')
)

