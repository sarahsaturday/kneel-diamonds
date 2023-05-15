import { saveCustomOrder } from "./TransientState.js"

     const handlePlaceOrderClick = (clickEvent) => {
        if (clickEvent.target.id === "saveOrder") {
            saveCustomOrder()
        }
    }

export const placeOrder = () => {
    const html = "<div><br><button id='saveOrder'>Place Order</button></br></div>";
    document.addEventListener("click", handlePlaceOrderClick);
    return html;
}
  