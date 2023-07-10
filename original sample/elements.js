var buttons = document.getElementsByTagName('button');

   
    for (var i = 0; i < buttons.length; i++) {
      var button = buttons[i];
      var paragraph = button.nextElementSibling; 

      button.addEventListener('click', (function(paragraph) {
        return function() {
          if (paragraph.style.display === 'none') {
            paragraph.style.display = 'block';
          } else {
            paragraph.style.display = 'none';
          }
        };
      })(paragraph));
    }