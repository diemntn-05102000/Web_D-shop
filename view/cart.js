$(document).ready(function() {

  const valueGetUsername = localStorage.getItem('username');
  axios.post('http://localhost:3000/view-cart', {user_name : valueGetUsername}).then((data)=>
    {
      const data_items = data.data.data;
      const arrAmount = data.data.amount;
      const arrItemId = data.data.itemId;
     
      for (let j = 0; j < arrItemId.length; j++) {
        
        for (let i = 0; i < data_items.length; i++) {
          if(arrItemId[j] == data_items[i].item_id){

            var count = j+1;
           $('<tr>'+
           '<td>'+count+'</td>'+
           
           '<td>'+data_items[i].item_name+'</td>'+
           '<td class="text-right">'+arrAmount[j]+'</td>'+
           '<td class="text-right">'+data_items[i].price+'¥</td>'+
           '<td>'+
             '<a id="delete_2" data-sp-ma="6" class="btn btn-danger btn-delete-sanpham">'+
                 '<i class="fa fa-trash" aria-hidden="true"></i> 削除'+
             '</a>'+
           '</td>'+
           '</tr>')
           .appendTo('tbody.cart__items');
           
         }
          }
        
      }
    }).catch(err=>{console.log(err);
    });
  
  });
  