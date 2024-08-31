document.addEventListener("DOMContentLoaded", function () {
    // Get all elements with the class 'parent'
    var parentElements = document.querySelectorAll(".navbar .nav-item");
  
    // Iterate over each parent element
    parentElements.forEach(function (parentElement) {
      // Add a click event listener to each parent element
      parentElement.addEventListener("click", function () {
        // Find the child anchor tag within the clicked parent
        var childAnchor = parentElement.querySelector(".nav-link");
  
        // Trigger a click on the child anchor tag
        if (childAnchor) {
          window.location.href = childAnchor.getAttribute("href");
        }
  
        // Alternatively, you can directly perform your actions here
        // instead of triggering a click on the child anchor tag.
        // For example:
        // console.log("Parent clicked, Child text:", childAnchor.textContent);
      });
  
      // Add a click event listener to each child anchor tag
      var childAnchor = parentElement.querySelector(".nav-link");
      if (childAnchor) {
        childAnchor.addEventListener("click", function (e) {
          // Prevent the default behavior if needed
          e.preventDefault();
  
          // Your code for the child anchor click event
        });
      }
    });
  
    // Function to simulate a click event
    function simulateClick(element) {
      var event = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window,
      });
      element.dispatchEvent(event);
    }
  
    var prevScrollpos = window.pageYOffset;
    const navbar = document.querySelector(".navbar");
  
    function navShow() {
      document.querySelector(".navbar").style.top = "0";
    }
  
    function navHide() {
      if (!$(".navbar-content").hasClass("show")) {
        navbar.style.top = "-100px";
      }
      // $(".navbar-content").removeClass("show");
    }
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        navbar.style.top = "0";
      } else {
        navHide();
        setTimeout(navShow, 1500);
      }
      prevScrollpos = currentScrollPos;
    };
  });
  
  let navSearch = document.getElementById("nav-search");
  navSearch.addEventListener("keyup", function (event) {
    event.stopPropagation();
  
    if (event.keyCode === 13) {
      // alert("Enter!");
      // console.log(event.target.value);
      window.location.href = baseURI + "/all-course/" + event.target.value;
    }
  });
  