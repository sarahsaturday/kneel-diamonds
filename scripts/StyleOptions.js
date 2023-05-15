import { setStyleType } from "./TransientState.js"

export const StyleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles");
    const styles = await response.json();

    let styleOptionsHTMLArray = styles.map((style) => `
      <div class="style-option">
        <input type="radio" name="style-type" value="${style.style}">
        <label>${style.style}</label>
      </div>
    `);

    const styleOptionsHTML = `
    <h2>Styles</h2>
    ${styleOptionsHTMLArray.join('')}
  `;

  const handleStyleChoice = (event) => {
    if (event.target.name === "style-type") {
        setStyleType(event.target.value);
    }
};

document.addEventListener("change", handleStyleChoice);


  return styleOptionsHTML;
};