function setupEventListeners() {
    document.getElementById('login-form').addEventListener('submit', event => {
        event.preventDefault();
        validateLoginForm();
    });
}

// JavaScript function to handle login and redirection

function login() {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const loginError = document.getElementById('login-error');
    const successMessage = document.getElementById('success-message');

    let isValid = true;

    // Reset error messages
    emailError.textContent = '';
    emailError.style.display = 'none';
    passwordError.textContent = '';
    passwordError.style.display = 'none';
    loginError.textContent = '';
    loginError.style.display = 'none';
    successMessage.style.display = 'none';

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = 'Please enter a valid email address';
        emailError.style.display = 'block';
        isValid = false;
    }

    // Validate password format (at least one uppercase, one lowercase, and one number)
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordPattern.test(password)) {
        passwordError.textContent = 'Please enter a valid password (at least 8 characters including one uppercase letter, one lowercase letter, and one number)';
        passwordError.style.display = 'block';
        isValid = false;
    }

    // Show error message if both fields are empty
    if (email === '' && password === '') {
        emailError.textContent = 'Please enter your email address';
        emailError.style.display = 'block';
        passwordError.textContent = 'Please enter your password';
        passwordError.style.display = 'block';
        loginError.style.display = 'block';
        isValid = false;
    } else if (email === '') {
        emailError.textContent = 'Please enter your email address';
        emailError.style.display = 'block';
        isValid = false;
    } else if (password === '') {
        passwordError.textContent = 'Please enter your password';
        passwordError.style.display = 'block';
        isValid = false;
    }

    // If all validations pass
    if (isValid) {
        // Simulate successful login (replace this with backend authentication)
        successMessage.style.display = 'block';
        
        // Redirect to the eCommerce page after a short delay
        setTimeout(() => {
            window.location.href = 'Ecommerce-platform.html'; // Replace 'ecommerce.html' with the actual URL of your eCommerce page
        }, 1000);
    }
}



function showPage(page) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));
    document.getElementById(page).classList.add('active');
}

let products = [
        { id: 1, name: "Men's Casual Shirt", price: 109.95, image:'D:/ecommerce_project/image/shopping.webp'},
        { id: 2, name: "Opna Women's T-Shirt", price: 159.99, image: 'D:/ecommerce_project/image/shopping_1.webp'},
        { id: 3, name: "Men's Running Shoes", price: 259.95, image: 'D:/ecommerce_project/image/shopping_2.webp' },
        { id: 4, name: "Women's Handbag", price: 349.95, image: 'D:/ecommerce_project/image/shopping_3.webp' },
        { id: 5, name: "Men's Watch", price: 459.95, image: 'D:/ecommerce_project/image/shopping_4.webp' },
        { id: 6, name: "Women's Necklace", price: 799.99, image: 'D:/ecommerce_project/image/shopping_5.webp' },
        { id: 7, name: "Men's Sunglasses", price: 299.99, image: 'D:/ecommerce_project/image/shopping_6.webp' },
        { id: 8, name: "Women's Earrings", price: 499.99, image: 'D:/ecommerce_project/image/shopping_7.webp' },
        { id: 9, name: "Men's Formal Shoes", price: 599.99, image: 'D:/ecommerce_project/image/shopping_8.webp' },
        { id: 10, name: "Women's Watch", price: 699.99, image: 'D:/ecommerce_project/image/shopping_9.webp' },
        { id: 11, name: "Men's Wallet", price: 199.99, image: 'D:/ecommerce_project/image/shopping_10.webp' },
        { id: 12, name: "Women's Sunglasses", price: 399.99, image: 'D:/ecommerce_project/image/shopping_11.webp' },
        { id: 13, name: "Men's Hoodie", price: 299.99, image: 'D:/ecommerce_project/image/shopping_12.webp' },
        { id: 14, name: "Women's Scarf", price: 199.99, image: 'D:/ecommerce_project/image/shopping_13.webp' },
        { id: 15, name: "Men's Backpack", price: 399.99, image: 'D:/ecommerce_project/image/shopping_14.webp' },
        { id: 16, name: "Women's Laptop Bag", price: 499.99, image: 'D:/ecommerce_project/image/shopping_15.webp' },
        { id: 17, name: "Men's Shorts", price: 99.99, image: 'D:/ecommerce_project/image/shopping_16.webp' },
        { id: 18, name: "Women's Leggings", price: 79.99, image: 'D:/ecommerce_project/image/shopping_17.webp' },
        { id: 19, name: "Men's Belt", price: 49.99, image: 'D:/ecommerce_project/image/shopping_18.webp' },
        { id: 20, name: "Women's Belt", price: 59.99, image: 'D:/ecommerce_project/image/shopping_19.webp' }
];

let cart = [];
let orders = [];
let uniqueId = 1;

function loadProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <div class="product-info">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Price: INR ${product.price.toFixed(2)}</p>
                <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
        productList.appendChild(productDiv);
    });
}

// Inside the function that initializes the orders page
function initializeOrdersPage() {
    // Other initialization code
    
    updateOrders(); // Update the orders display
}

function searchProducts() {
    debugger;
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchInput));
    const searchMessage = document.getElementById('search-message');
    
    if (filteredProducts.length === 0) {
        searchMessage.textContent = "Sorry, we couldn't find any matching results.";
    } else {
        searchMessage.textContent = ""; // Clear the message if there are matching results
    }
    displayFilteredProducts(filteredProducts);
}

function displayFilteredProducts(filteredProducts) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    filteredProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: INR ${product.price.toFixed(2)}</p>
            <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}



function showOrderDetails(index) {
    const order = orders[index];
    alert(`
        Product: ${order.name}
        Quantity: ${order.quantity}
        Price: INR ${order.price.toFixed(2)}
    `);
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty.');
        return;
    }
    
    orders.push(...cart); // Add items to orders
    cart = []; // Clear the cart
    
    updateCart(); // Update the cart display
    updateOrders(); // Update the orders display
    
    showPage('orders'); // Switch to the orders page
    
    alert('Order placed successfully!');
}

function updateCart() {
    const cartList = document.getElementById('cart-list');
    const emptyCartMessage = document.getElementById('empty-cart-message');
    const checkoutButton = document.querySelector('#cart .checkout');
    cartList.innerHTML = '';

    if (cart.length === 0) {
        emptyCartMessage.style.display = 'block';
        checkoutButton.style.display = 'none';
    } else {
        emptyCartMessage.style.display = 'none';
        checkoutButton.style.display = 'block';
        const ol = document.createElement('ol');
        cart.forEach((item, index) => {
            const cartItem = document.createElement('li');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <p>${item.name}</p>
                <div class="quantity">
                    <button onclick="decrementQuantity(${item.uniqueId})">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="incrementQuantity(${index})">+</button>
                </div>   
                <button onclick="removeFromCart(${item.uniqueId})" style="color: black;">Remove</button>
                <p>INR ${item.price.toFixed(2)}</p>
            `;
            ol.appendChild(cartItem);
        });
        cartList.appendChild(ol);
    }
    updateCartCount(); // Update cart count
}
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1, uniqueId: uniqueId++ });
    }
    updateCart();
    updateCartCount(); // Update cart count
}

function removeFromCart(uniqueId) {
    cart = cart.filter(item => item.uniqueId !== uniqueId);
    updateCart();
    updateCartCount(); // Update cart count
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}

function incrementQuantity(index) {
    cart[index].quantity++;
    updateCart();
}

function decrementQuantity(uniqueId) {
    const cartItem = cart.find(item => item.uniqueId === uniqueId);
    if (cartItem && cartItem.quantity > 1) {
        cartItem.quantity--;
    } else if (cartItem && cartItem.quantity === 1) {
        removeFromCart(uniqueId);
    }
    updateCart();
    updateCartCount(); // Update cart count
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty.');
        return;
    }
    orders.push(...cart);
    cart = [];
    updateCart();
    updateOrders();
    showPage('orders');
    alert('Order placed successfully!');
}

document.addEventListener('DOMContentLoaded', () => {
    showPage('products');
    loadProducts();
    setupEventListeners();
    updateCart(); // Initialize cart count
});


function updateOrders() {
    const orderList = document.getElementById('order-list');
    const emptyOrdersMessage = document.getElementById('empty-orders-message');

    orderList.innerHTML = '';

    if (orders.length === 0) {
        emptyOrdersMessage.style.display = 'block';
    } else {
        emptyOrdersMessage.style.display = 'none';

        const ol = document.createElement('ol');
        orders.forEach((item) => {
            const orderItem = document.createElement('li');
            orderItem.innerHTML = `
                <div class="order-item">
                    <img src="${item.image}" alt="${item.name}" style="max-width: 100px;">
                    <div class="order-details">
                        <p>${item.name}</p>
                        <p>Price: INR ${item.price.toFixed(2)}</p>
                        <p>Order placed successfully!</p>
                    </div>
                </div>
            `;
            ol.appendChild(orderItem);
        });

        orderList.appendChild(ol);
    }
}




function showPage(page) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));
    document.getElementById(page).classList.add('active');
}

function logout() {
    document.getElementById('logout-message').style.display = 'block';
    setTimeout(() => {
        document.getElementById('logout-message').style.display = 'none';
        window.location.href = 'test.html'; // Redirect to the login page
    }, 1000);
}

document.addEventListener('DOMContentLoaded', () => {
    showPage('products');
    loadProducts();
    setupEventListeners();
});
