import { MetalOptions } from './MetalOptions.js';
import { StyleOptions } from './StyleOptions.js';
import { SizeOptions } from './SizesOptions.js';
import { placeOrder } from './PlaceOrderButton.js';
import { Orders } from './OrderList.js';

const render = async () => {
    const metalOptionsHTML = await MetalOptions();
    const styleOptionsHTML = await StyleOptions();
    const sizeOptionsHTML = await SizeOptions();
    const buttonHTML = placeOrder();
    const ordersListHTML = await Orders();

    const composedHTML = `
    <h1>Kneel Diamonds</h1>

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

    <article class="customOrders">
      <h2>Custom Jewelry Orders</h2>
        ${ordersListHTML}
    </article>
  `;

    const container = document.getElementById('container');
    container.innerHTML = composedHTML;
};

render();
