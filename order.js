document.getElementById("calculate-total").addEventListener("click", function() {
    let total = 0;

    // Get all checked items and their quantities
    const items = document.querySelectorAll("input[type='checkbox']:checked");

    items.forEach(item => {
        // Get the price of the item
        const price = parseFloat(item.getAttribute("data-price"));
        
        // Get the corresponding quantity input field
        const quantityField = document.querySelector(`input[name="quantity-${item.value.replace(/\s+/g, '-')}"]`);
        
        // Get the quantity, default to 1 if not provided
        const quantity = parseInt(quantityField ? quantityField.value : 1) || 1;

        // Add the total for this item to the total
        total += price * quantity;
    });

    // Update the total on the page
    document.getElementById("total").textContent = total;
});
