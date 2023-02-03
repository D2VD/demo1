// Get the navigation menu
const navigation = document.querySelector("nav");

// Add a toggle button to the navigation menu
const toggleButton = document.createElement("button");
toggleButton.innerHTML = "Toggle Navigation";
toggleButton.style.backgroundColor = "darkgray";
toggleButton.style.color = "white";
toggleButton.style.padding = "10px";
toggleButton.style.float = "right";
toggleButton.addEventListener("click", function() {
  navigation.classList.toggle("active");
});
navigation.appendChild(toggleButton);

// Add CSS styles for the active class
const style = document.createElement("style");
style.innerHTML = `
nav.active {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 60px;
  right: 0;
  background-color: darkgray;
  width: 100%;
  height: 100%;
}

nav.active ul {
  display: block;
  text-align: center;
}

nav.active a {
  display: block;
  padding: 20px;
  margin: 20px 0;
}
`;
document.head.appendChild(style);
