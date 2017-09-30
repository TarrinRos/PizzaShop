function something()
{
  var x = window.localStorage.getItem('bbb');
  x = x * 1 + 1;
  window.localStorage.setItem('bbb', x);

  alert(x);
}

function add_to_cart(id)
{
  var key = 'product_' + id;
  var x = window.localStorage.getItem(key);
  x = x * 1 + 1;
  window.localStorage.setItem(key, x);
}

function list_all_Items()
{
  total = 0;
  $.each(localStorage, function(key, value){
    total += value * 1;
  });
  alert('Summary: ' + total);
}

function cart_get_orders()
{
  var orders = '';
  for(var i = 0; i < window.localStorage.length; i++)
  {
    var key = window.localStorage.key(i); // get key
    var value = window.localStorage.getItem(key); // get value by key from hash
    if(key.indexOf('product_') == 0)
    {
      orders = orders + key + '=' + value + ',';
    }
  }
  return orders;
}
