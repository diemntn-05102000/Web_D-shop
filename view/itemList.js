$(document).ready(function() {  

    var url_string  = window.location.href;
    var url = new URL(url_string);
     axios.get('http://localhost:3000/admin/item-list').then((data, message) => {
 
         data.data.data[0].forEach(function(element) {
                 $(
                    ' <tr>'+
                    '<td>'+element.item_id+'</td>' +
                    '<td>'+element.img+'</td>' +
                    '<td>'+element.item_name+'</td>' +
                    '<td>'+element.theme+'</td>' +
                    '<td>'+element.price+'</td>' +
                    '<td>'+element.quantity+'</td>' +
                    '<td>'+element.brand+'</td>' +
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
     let test = 0;
     $('.selectpicker').change(function () {
        var selectedOp = $('.selectpicker').val();
        $('.selected-itemname').remove();
        $('.selected-sold').remove();
        
        console.log(selectedOp);
        selectedOp.forEach(element => {
            
            if(element == 'item_name'){
                
                $(

                    '<form style="margin: 10px 0" class = "selected-itemname">' +
                    'Search item<input style="width:10%;margin: 0 10% 0 2%"/>' +
                    '</form>' 
                    
                ).appendTo('.filter-itemname');
                
            }
            if(element == 'sold'){
                $(
                    '<div style="margin: 10px 0"  class = "selected-sold">' +
                        'Sold<select style="height: 28px;width: 10%;margin: 0 10% 0 2%" >' +
                            '<option value="desc">Decrease</option>' +
                            '<option value="asc">Increase</option>' +
                            
                        '</select>Limit<input style="width:10%;margin: 0 10% 0 2%"/>'+
                        
                    '</div>'
                    
                ).appendTo('.filter-itemname');
            }
            
        
        });
        
       
    });
   
    
      
 })