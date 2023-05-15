// Set up the transient state data structure and provide initial values
const transientState = {
    "metalType": "",
    "size": "",
    "styleType": ""
};

// Functions to modify each property of transient state
export const setMetalType = (chosenMetal) => {
    transientState.metalType = chosenMetal;
    console.log(transientState);
};

export const setSize = (chosenSize) => {
    transientState.size = chosenSize;
    console.log(transientState);
};

export const setStyleType = (chosenStyle) => {
    transientState.styleType = chosenStyle;
    console.log(transientState);
};

// Function to convert transient state to permanent state
export const saveCustomOrder = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    };

    const response = await fetch("http://localhost:8088/orders", postOptions);

    const customEvent = new CustomEvent("newOrderCreated");
    document.dispatchEvent(customEvent);
};
