// Set up the transient state data structure and provide initial values
const transientState = {
    "metalId": 0,
    "sizeId": 0,
    "styleId": 0
};

// Functions to modify each property of transient state
export const setMetalId = (chosenMetal) => {
    transientState.metalId = parseInt(chosenMetal);
    console.log(transientState);
};

export const setSizeId = (chosenSize) => {
    transientState.sizeId = parseInt(chosenSize);
    console.log(transientState);
};

export const setStyleId = (chosenStyle) => {
    transientState.styleId = parseInt(chosenStyle);
    console.log(transientState);
};

export const saveCustomOrder = async () => {
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(transientState)
  };

  const response = await fetch("http://localhost:8088/orders", postOptions);

  const orderData = await response.json();
  const customEvent = new CustomEvent("newOrderCreated");
  document.dispatchEvent(customEvent);
};

