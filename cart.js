// Function to add selected items to the cart
function addToCart() {
    const form = document.getElementById('menu-form');
    const checkboxes = form.querySelectorAll('input[type="checkbox"]:checked');
    const selectedItems = Array.from(checkboxes).map(checkbox => checkbox.value.split(',')[0]);
    const selectedItemsWithPrices = Array.from(checkboxes).map(checkbox => checkbox.value);
    
    // Retrieve existing cart items from local storage or create an empty array
    let cartItemsWithPrices = JSON.parse(localStorage.getItem('cartItemsWithPrices')) || [];
    
    // Add newly selected items to the existing cart items
    cartItemsWithPrices = cartItemsWithPrices.concat(selectedItemsWithPrices);
    
    // Update local storage with the updated cart items
    localStorage.setItem('cartItemsWithPrices', JSON.stringify(cartItemsWithPrices));
    
    alert('Added to cart: ' + selectedItems.join(', '));
}

// Function to proceed to checkout
function proceedToCheckout() {
    window.location.href = 'payment.html';
}
