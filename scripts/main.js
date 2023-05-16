import { MetalOptions } from './MetalOptions.js';
import { StyleOptions } from './StyleOptions.js';
import { SizeOptions } from './SizesOptions.js';
import { placeOrder } from './PlaceOrderButton.js';
import { Orders } from './OrderList.js';
import { generateOrderListHTML } from './OrderList.js';

const render = async () => {
  const metalOptionsHTML = await MetalOptions();
  const styleOptionsHTML = await StyleOptions();
  const sizeOptionsHTML = await SizeOptions();
  const buttonHTML = await placeOrder();
  // const ordersListHTML = await Orders();
  const orderListHTML = await generateOrderListHTML();

  const composedHTML = `
    <h1>Kneel Diamonds</h1>

    <h4>Choose from the following options:</h4>

    <article class="choices">
      <section class="choices__metals options">
        ${metalOptionsHTML}
      </section>

      <section class="choices__sizes options">
        ${sizeOptionsHTML}
      </section>

      <section class="choices__styles options">
        ${styleOptionsHTML}
      </section>
    </article>

    <article class="order">
        ${buttonHTML}
    </article>

    <article class="custom-orders">
      <h2>Custom Jewelry Orders</h2>
        ${orderListHTML}
    </article>
  `;

  const container = document.getElementById('container');
  container.innerHTML = composedHTML;

  document.addEventListener("newOrderCreated", render);

  // document.addEventListener("newOrderCreated", async (event) => {
  //   const order = event.detail;
  //   const orderHTML = Orders(order);
  //   const customOrdersElement = document.querySelector(".custom-orders");
  //   customOrdersElement.insertAdjacentHTML("beforeend", orderHTML);
  // });

};

render();
