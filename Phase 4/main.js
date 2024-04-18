const editor = document.querySelector(".editor");
const tokens = document.querySelector(".tokens");

const radioInputs = document.querySelectorAll('input[name="startScreen"]');

let startScreen = 2;

radioInputs.forEach(function (input) {
  input.addEventListener("change", function () {
    if (this.checked) {
      startScreen = this.value;
      updateStartScreen();
    }
  });
});

function updateStartScreen() {
  switch (startScreen) {
    case "1":
      {
        editor.classList.add("active");
        tokens.classList.remove("active");
        updateClassNameToEditor();
      }
      break;
    case "2":
      {
        editor.classList.remove("active");
        tokens.classList.add("active");
        updateClassNameToTokens();
      }
      break;
  }
}

function updateClassNameToEditor() {
  // Get all elements
  var elements = document.querySelectorAll('[class*=screen-tokens]');

  // Iterate through the elements and update the class name
  elements.forEach(function(element) {
    var currentClassName = element.className;

    // Replace "screen-tokens" with "screen-editor"
    var newClassName = currentClassName.replace(/screen-tokens/g, "screen-editor");

    // Update the class name of the element
    element.className = newClassName;
  });
}

function updateClassNameToTokens() {
  // Get all elements
  var elements = document.querySelectorAll('[class*=screen-editor]');

  // Iterate through the elements and update the class name
  elements.forEach(function(element) {
    var currentClassName = element.className;

    // Replace "screen-tokens" with "screen-editor"
    var newClassName = currentClassName.replace(/screen-editor/g, "screen-tokens");

    // Update the class name of the element
    element.className = newClassName;
  });
}
