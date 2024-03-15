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
// ===============================================
// STEP 2 : make project functional

// function productGenerator(pThumb, pTitle, pDesc, pPrice) {
//     // Create ProductItem Div & set CSSClass
//     const productItem = document.createElement('div')
//     productItem.classList.add('productItem')

//     // Create Product Thumbnail  & Append to mainDiv
//     const productThumb = document.createElement('img')
//     productThumb.setAttribute('src', pThumb)
//     productItem.appendChild(productThumb)

//     // Create Product Title & Append to mainDiv
//     const productTitle = document.createElement('span')
//     productTitle.innerText = pTitle
//     productItem.appendChild(productTitle)

//     // Create Product Description  & Append to mainDiv
//     const productDesc = document.createElement('p')
//     productDesc.innerText = pDesc
//     productItem.appendChild(productDesc)

//     // Create Product Price Element & Append to mainDiv
//     const productPrice = document.createElement('span')
//     productPrice.innerText = pPrice
//     productItem.appendChild(productPrice)

//     return productItem
// }

// productSection.appendChild(
//     productGenerator('images/productImg1.jpg','Dori','A scary and attractive character','520')
// )

// ==============================================================
// step 3 : product the project and append them in object

let productData = [
    {
        pThumb: 'images/productImg1.jpg',
        pTitle: 'Dori',
        pDesc: 'A scary and attractive character',
        pPrice: '520'
    },
    {
        pThumb: 'images/productImg2.jpg',
        pTitle: 'Wild Monster',
        pDesc: 'The wildest monster in history in your hands',
        pPrice: '120'
    },
    {
        pThumb: 'images/productImg3.jpg',
        pTitle: 'Bobo Ninja',
        pDesc: 'No information was found regarding the life of this mysterious person in pintoria...',
        pPrice: '1199'
    }
]

productData.forEach(item => {
    productSection.appendChild(
        productGenerator(item.pThumb ,item.pTitle  , item.pDesc , item.pPrice)
    )
})


// =====================================
// STEP4: Data structure & AutoGenerator

// Dynamic Element Generator
// function elementGenerator(tagName, attrbiutes) {
//     // Create Element
//     const element = document.createElement(tagName)

//     // Does 'Attrbiutes' parameter exist?
//     if (attrbiutes) {
//         Object.keys(attrbiutes).forEach(key => {
//             element.setAttribute(key, attrbiutes[key])
//         })
//     }

//     return element
// }

// STEP5: add newFeature to element Generator (LevelUP)

// Dynamic Element Generator
function elementGenerator(tagName, attrbiutes, ...childs) {
    // Create Element
    const element = document.createElement(tagName)

    // Does 'Attrbiutes' parameter exist?
    if (attrbiutes) {
        Object.keys(attrbiutes).forEach(key => {
            element.setAttribute(key, attrbiutes[key])
        })
    }

    // Does 'childs' parameter exist?
    if (childs) {
        childs.forEach(child => {
            if (typeof child === 'string') {
                element.appendChild(document.createTextNode(child))
            } else {
                element.appendChild(child)
            }
        })
    }

    return element
}
// =====================================
// STEP6: Refactor product Generator (with elemenetGenerator)

function productGenerator(pThumb, pTitle, pDesc, pPrice) {
    // Create Product Item Div & set CSSClass
    const productItem = elementGenerator(
        'div',
        { class: 'productItem' },
        // Childs:
        // Create Product Thumbnail
        elementGenerator('img', { src: pThumb }),
        // Create Product Title
        elementGenerator('span', null, pTitle),
        // Create Product Desc
        elementGenerator('p', null, pDesc),
        // Create Product Price
        elementGenerator('span', null, pPrice)
    )

    return productItem
}

// AutoGenerator
productData.forEach(product => {
    productSection.appendChild(
        productGenerator(product.pThumb, product.pTitle, product.pDesc, product.pPrice)
    )
})
