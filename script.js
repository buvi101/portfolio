// Typing animation
var typed = new Typed('#element', {
    strings: ['Web Designer', 'Poster Designer','Video and Photo Editor','Frontend Developer...'],
    typeSpeed: 50,
  });
  
  // About me animation
  var tablinks = document.getElementsByClassName("tab-links");
  var tabcontents = document.getElementsByClassName("tab-contents");
  function opentab (tabname) {
  for(tablink of tablinks) {
  tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
  tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
  }
  
  // toggle the sidebar
  document.getElementById("menu-toggle").addEventListener("click", function () {
    document.getElementById("sidebar").classList.add("active");
  });
  
  document.getElementById("close-sidebar").addEventListener("click", function () {
    document.getElementById("sidebar").classList.remove("active");
  });
  
  // To link the google sheet
  const scriptURL = 'https://script.google.com/macros/s/AKfycbz6zA4VKGdy6JszqLSUjtSveQCrqiT776BiFucTdR4G4yz6SjdV1auuKTlVLoFs0LNXBg/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg");
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
          msg.innerHTML = "Message Send Successfully";
          setTimeout (function(){
              msg.innerHTML = ""
          },5000)
          form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })