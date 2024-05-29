const socket = io();

socket.on('products', (products) => {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.forEach(product => {
        const li = document.createElement('li');
        li.textContent = `${product.name} - ${product.price}`;
        li.setAttribute('data-id', product.id);
        productList.appendChild(li);
    });
});
