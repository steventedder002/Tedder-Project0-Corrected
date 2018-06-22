function numGift(){
  var quantity = document.getElementById('select').value;
  console.log(quantity);
  var price = document.getElementById('price').innerHTML
  console.log('$ ' + price);
  var totalPrice = (quantity * price);
  console.log('$ ' + totalPrice);  
} 
