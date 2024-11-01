document.addEventListener("DOMContentLoaded", () => {
    const cartItems = document.getElementById("cart-items");
    const totalDisplay = document.getElementById("total");
    let total = 0;

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", (e) => {
            const product = e.target.closest(".product");
            const productName = product.getAttribute("data-name");
            const productPrice = parseFloat(product.getAttribute("data-price"));
            
            // Add item to cart list
            const item = document.createElement("li");
            item.textContent = `${productName} - $${productPrice.toFixed(2)}`;
            cartItems.appendChild(item);
            
            // Update total
            total += productPrice;
            totalDisplay.textContent = `Total: $${total.toFixed(2)}`;
        });
    });
});
