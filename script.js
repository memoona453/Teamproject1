let productForm = document.getElementById("productForm")
let productTable = document.getElementById("productTable")

productForm.addEventListener("submit" , function(event){
    event.preventDefault()
    let productName = document.getElementById("productName").value
    let productQuantity = document.getElementById("productQuantity").value
    let productPrice = document.getElementById("productPrice").value || 0;

})

    const totalCost = productQuantity * productPrice;
    const discountAmount = (totalCost * discount) / 100;
    const taxAmount = ((totalCost - discountAmount) * tax) / 100;
    const finalCost = totalCost - discountAmount + taxAmount;

    let row = document.createElement("tr")
    row.innerHTML = `
    `
    