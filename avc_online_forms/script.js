function print_function(){
    changeStyle();
    window.print();
    revertStyle();
}
function changeStyle() {
    document.getElementById("submit_print_button_container").style.display="none";
    // Get all elements with the class 'data-input'
    const elements = document.querySelectorAll('.data-input');
    
    // Iterate over each element and change the style
    elements.forEach(function(element) {
      element.style.backgroundColor = 'white';
      element.style.border = 'none';
      element.style.marginBottom = '0.1rem';
    });
  }

function revertStyle() {
    document.getElementById("submit_print_button_container").style.display="block";
    // Get all elements with the class 'data-input'
    const elements = document.querySelectorAll('.data-input');
    
    // Iterate over each element and change the style
    elements.forEach(function(element) {
      element.style.backgroundColor = 'gainsboro';
      element.style.borderBottom = '0.1rem dotted darkgrey';
      element.style.marginBottom = '1rem';
    });
  }