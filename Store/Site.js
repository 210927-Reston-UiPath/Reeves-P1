window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function buy(name) {
  // find me the element that matches this conditions (i.e a tbody child element of another element with id='cart')
  let cart = document.querySelector('#cart tbody');
  // appends a row to the tbody element
  let newItem = cart.insertRow();

  let itemName = newItem.insertCell(0);
  itemName.innerHTML = name;

  let elementId = '#' + name.replace(' ', '');
  
  let itemPrice = newItem.insertCell(1);
  itemPrice.innerHTML = document.querySelector(elementId + ' .price').innerHTML;

  let itemQuantity = newItem.insertCell(2);
  itemQuantity.innerHTML = document.querySelector(elementId + ' td .quantity').value;

  let subTotal = newItem.insertCell(3);
  itemSubTotal.innerHTML = document.querySelector(elementId + ' td .subtotal').value;

  //resets the input value so the quantity of the original order doesn't "stick"
  document.querySelector(elementId + ' td .quantity').value = '';
}
function checkout()
{
  document.querySelectorAll('#cart tbody tr').forEach(row => row.remove());
  alert("Thank You For Shopping With Us!!!")
}
// Selecting the iframe element
var frame = document.getElementById("Iframe");
          
// Adjusting the iframe height onload event
frame.onload = function()
// function execute while load the iframe
{
  // set the height of the iframe as 
  // the height of the iframe content
  frame.style.height = 
  frame.contentWindow.document.body.scrollHeight + 'px';
   

 // set the width of the iframe as the 
 // width of the iframe content
 frame.style.width  = 
  frame.contentWindow.document.body.scrollWidth+'px';
      
}