function handleBoldButtonClick() {
    document.execCommand('bold', false, null);
  }

  function handleItalicButtonClick() {
    document.execCommand('italic', false, null);
  }

  function handleUnderlineButtonClick() {
    document.execCommand('underline', false, null);
  }

  function handleUndoButtonClick() {
    document.execCommand('undo', false, null);
  }

  function handleRedoButtonClick() {
    document.execCommand('redo', false, null);
  }

  document.addEventListener("DOMContentLoaded", function () {
    // Initialize the color picker
    var fontColorPicker = document.getElementById("fontColorPicker");
  
    // Event listener for the color picker
    fontColorPicker.addEventListener("input", function () {
      changeFontColor(fontColorPicker.value);
    });
  });
  
  // Function to change the color of selected text
  function changeFontColor(color) {
    var selectedText = getSelectedText();
    if (selectedText !== "") {
      document.execCommand("styleWithCSS", null, true);
      document.execCommand("foreColor", false, color);
    }
  }
  
  // Function to get selected text
  function getSelectedText() {
    if (window.getSelection) {
      return window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
      return document.selection.createRange().text;
    }
    return "";
  }