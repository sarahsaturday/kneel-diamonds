import { setMetalType } from "./TransientState.js"

export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals");
    const metals = await response.json();

    // Generate the HTML for metal options
    let metalOptionsHTMLArray = metals.map((metal) => `
      <div class="metal-option">
        <input type="radio" name="metal-type" value="${metal.metal}">
        <label>${metal.metal}</label>
      </div>
    `);

    const metalOptionsHTML = `
    <h2>Metals</h2>
    ${metalOptionsHTMLArray.join('')}
  `;

    // Add event listener and handler function
    const handleMetalChoice = (event) => {
        if (event.target.name === "metal-type") {
            setMetalType(event.target.value);
        }
    };

    document.addEventListener("change", handleMetalChoice);

    return metalOptionsHTML;
};