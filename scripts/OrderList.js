 // Get the orders from your API
 export const Orders = async () => {
    const response = await fetch("http://localhost:8088/orders")
    const orders = await response.json()
 // Iterate the orders and create some <section> representations
    let orderListHTML = ""
    for (const order of orders) {
        orderListHTML += `<p><section class="order">
        <div><b>Metal:</b> ${order.metalType}</div>
        <div><b>Size:</b> ${order.size}</div>
        <div><b>Style:</b> ${order.styleType}</div>
        </section></p>`
    }
    // Return the HTML string
    return orderListHTML
}