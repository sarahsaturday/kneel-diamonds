// // Get the orders from your API
// export const Orders = async () => {
//     const response = await fetch("http://localhost:8088/orders");
//     const orders = await response.json();

//     // Iterate the orders and create some <section> representations
//     let orderListHTML = "";
//     for (const order of orders) {
//         orderListHTML += `
//         <div class="order-item">
//         <span class="diamond">&#128142;</span>
//         <b>Order #</b> ${order.id}
//             `;
//     }

//     // Return the HTML string
//     return orderListHTML;
// };

//NEW

const generateOrderHTML = (order) => {
    const orderPrice = order.metal.price + order.style.price + order.size.price;
    const formattedPrice = orderPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return `
        <div class="order-item">
            <span class="diamond">&#128142;</span>
            <b>Order #</b> ${order.id} - <b>Total:</b> ${formattedPrice}
        </div>
    `;
};

export const Orders = async () => {
    const response = await fetch("http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size");
    const orders = await response.json();

    let orderListHTML = "";
    for (const order of orders) {
        orderListHTML += generateOrderHTML(order);
    }
    return orderListHTML;
};

export const generateOrderListHTML = async () => {
    const ordersHTML = await Orders();
    return ordersHTML;
};
