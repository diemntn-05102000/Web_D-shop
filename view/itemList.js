$(document).ready(function() {  

    var url_string  = window.location.href;
    var url = new URL(url_string);
    const valueGetSold = localStorage.getItem('sold');
    // const valueGetQuantity = localStorage.getItem('quantity');
        axios.get(`http://localhost:3000/admin/item-list?sold=${valueGetSold}`).then((data, message) => {
 
            data.data.data[0].forEach(function(element) {
                    $(
                       ' <tr>'+
                       '<td>'+element.item_id+'</td>' +
                       '<td>'+element.img+'</td>' +
                       '<td>'+element.item_name+'</td>' +
                       '<td>'+element.theme+'</td>' +
                       '<td>'+element.brand+'</td>' +
                       '<td>'+element.price+'</td>' +
                       '<td>'+element.quantity+'</td>' +
                       '<td>'+element.sold+'</td>' +
                       '<td>' +
                           '<ul class="list-inline m-0">' +
                               '<li class="list-inline-item">' +
                                   '<button class="btn btn-success btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Edit"><i class="fa fa-edit"></i></button>' +
                               '</li>' +
                               '<li class="list-inline-item">' +
                                   '<button class="btn btn-danger btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i class="fa fa-trash"></i></button>' +
                               '</li>' +
                           '</ul>' +
                       '</td>' +
                       ' <tr>'
                    ).appendTo('.list-item')
                  });
        }).catch(err => {
          console.log('err', err);
        });
   
     $('.selectpicker').change(function () {
        var selectedOp = $('.selectpicker').val();
        $('.itemname').remove();
        $('.sold').remove();
        $('.quantity').remove();
        
        console.log(selectedOp);
        selectedOp.forEach(element => {
            
            if(element == 'item_name'){
                
                $(

                    '<form style="margin: 10px 0" class = "itemname">' +
                    'Search item<input style="width:10%;margin: 0 10% 0 2%"/>' +
                    '</form>' 
                    
                ).appendTo('.filter-itemname');
                
            }
            if(element == 'sold'){
                $(
                    '<div style="margin: 10px 0" class = "sold">' +
                        'Sold<select class="selected-sold" style="height: 28px;width: 10%;margin: 0 10% 0 3.6%" >' +
                            '<option selected></option>' +
                            '<option value="desc">Decrease</option>' +
                            '<option value="asc">Increase</option>' +
                            
                        '</select>Limit<input id="sold-limit" style="width:10%;margin: 0 10% 0 2%"/>'+
                        
                    '</div>'
                    
                ).appendTo('.filter-itemname');
            }
            if(element == 'quantity'){
                $(
                    '<div style="margin: 10px 0" class = "quantity">' +
                        'Quantity<select class="selected-quantity" style="height: 28px;width: 10%;margin: 0 10% 0 2%" >' +
                            '<option selected></option>' +
                            '<option value="desc">Decrease</option>' +
                            '<option value="asc">Increase</option>' +
                            
                        '</select>Limit<input id="quantity-limit" style="width:10%;margin: 0 10% 0 2%"/>'+
                        
                    '</div>'
                    
                ).appendTo('.filter-itemname');
            }
            
        
        });
        
       
    });
    $(document).on('change','.filter-itemname .selected-sold', function() {
        if($('.selected-sold').val() == 'asc'){
          var limit =  document.getElementById('sold-limit').value;
          localStorage.setItem('sold', 'asc');
        //   localStorage.setItem('sold-limit', limit);
         
        }else{
            localStorage.setItem('sold', 'desc');
           
        }
    });
    $(document).on('change','.filter-itemname .selected-quantity', function() {
    if($('.selected-quantity').val() == 'asc'){
        var limit =  document.getElementById('quantity-limit').value;
        localStorage.setItem('quantity', 'asc');
        
    }else{
        localStorage.setItem('quantity', 'desc');
        
    }
    });
    $('.btn-apply').click(function (e) {
        
        location.reload();
    })
    
})