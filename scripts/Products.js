import { getProducts } from "./database.js"

const products = getProducts()

export const Products = () => {
    let html = "<ul>"
    // data-price="${product.price}" 
    //data-name="${product.name}"
    for (const product of products) {
        html += `<li data-type="product" 
                     data-productid="${product.id}">
                            ${product.name}
                 </li>`
    }

    html += "</ul>"

    return html
}

document.addEventListener("click",(clickEventOnProduct)=>{
    const productClicked=clickEventOnProduct.target;
    const productId=productClicked.dataset.productid
    if(productClicked.dataset.type==="product")
    {
        for (const product of products) {
            if (product.id === parseInt(productId)) {
                window.alert(`${product.name} costs ${product.price} `)
            }
        }
        //window.alert(`${productClicked.dataset.name} costs \n $${productClicked.dataset.price}` )
    }
    
})

