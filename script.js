// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const title = document.getElementById("title");
    const description = document.getElementById("description");
    const changeTextBtn = document.getElementById("changeTextBtn");
    const toggleElementBtn = document.getElementById("toggleElementBtn");

    // Change text content dynamically
    changeTextBtn.addEventListener("click", () => {
        description.textContent = "You just changed this text using JavaScript!";
        description.style.color = "blue"; // Modify CSS styles dynamically
    });

    // Add or remove an element when a button is clicked
    toggleElementBtn.addEventListener("click", () => {
        if (document.getElementById("extraText")) {
            document.getElementById("extraText").remove();
        } else {
            const newElement = document.createElement("p");
            newElement.id = "extraText";
            newElement.textContent = "This is a new paragraph added dynamically!";
            newElement.style.color = "green";
            document.body.appendChild(newElement);
        }
    });
});