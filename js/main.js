
document.addEventListener('DOMContentLoaded', function() {
    var accordionItems = document.getElementsByClassName('accordion-item');
  
    for (var i = 0; i < accordionItems.length; i++) {
      var accordionItem = accordionItems[i];
      var accordionHeading = accordionItem.querySelector('.accordion-heading');
      var accordionContent = accordionItem.querySelector('.accordion-content');
      var accordionIcon = accordionItem.querySelector('.accordion-icon');
  
      accordionHeading.addEventListener('click', function() {
        this.parentNode.classList.toggle('active');
        var content = this.nextElementSibling;
        var icon = this.querySelector('.accordion-icon');
        
        if (content.style.display === 'block') {
          content.style.display = 'none';
          icon.classList.remove('open');
        } else {
          content.style.display = 'block';
          icon.classList.add('open');
        }
      });
    }
  });

  const addClass = document.getElementById("go_demo")
  window.addEventListener("scroll", () => {
      if(window.pageYOffset > 900){
        addClass.style.display = "block"
      }
      else{
        addClass.style.display = "none"
      }

      addClass.addEventListener("click", () => {
        window.scrollTo({
            top : 0,
            behavior : "smooth"
        })
      })
  })
  
  let loading = document.getElementById("load")

  window.addEventListener("load",() => {
      loading.style.display = "none"
  })