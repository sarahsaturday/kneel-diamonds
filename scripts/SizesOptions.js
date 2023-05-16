import { setSizeId } from "./TransientState.js";

export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes");
    const sizes = await response.json();

    let sizeOptionsHTMLArray = sizes.map((size) => `
      <div class="size-option">
        <input type="radio" name="size-id" value="${size.id}">
        <label>${size.carets}</label>
      </div>
    `);

    const sizeOptionsHTML = `
    <h2>Sizes</h2>
    ${sizeOptionsHTMLArray.join('')}
  `;

  const handleSizeChoice = (event) => {
    if (event.target.name === "size-id") {
        setSizeId(event.target.value);
    }
};

document.addEventListener("change", handleSizeChoice);

  return sizeOptionsHTML;
};