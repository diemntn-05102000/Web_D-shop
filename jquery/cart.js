$(document).ready(function() {

  const valueGetUsername = localStorage.getItem('username');
  axios.post('http://localhost:3000/view-cart', {user_name : valueGetUsername}).then((data)=>
    {
      const data_cart = data.data.data;
      var arrAmount = data.data.amount;
      
      for (let i = 0; i < data_cart.length; i++) {
         var j = i+1;
        $('<tr>'+
        '<td>'+j+'</td>'+
        
        '<td>'+data_cart[i].item_name+'</td>'+
        '<td class="text-right">'+arrAmount[i]+'</td>'+
        '<td class="text-right">'+data_cart[i].price+'¥</td>'+
        '<td>'+
          '<a id="delete_2" data-sp-ma="6" class="btn btn-danger btn-delete-sanpham">'+
              '<i class="fa fa-trash" aria-hidden="true"></i> 削除'+
          '</a>'+
        '</td>'+
        '</tr>')
        .appendTo('tbody.cart__items');
        
      }
      
    }).catch(err=>{console.log(err);
    });
  
  });
  