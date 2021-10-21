$(document).ready(function() {  

    var url_string  = window.location.href;
    var url = new URL(url_string);
    const valueGetBought = localStorage.getItem('bought');
    const valueGetGender = localStorage.getItem('gender');
     axios.get(`http://localhost:3000/admin/user-list?bought=${valueGetBought}&gender=${valueGetGender}`).then((data, message) => {
         data.data.data.forEach(function(element) {
                 $(
                    ' <tr>'+
                    '<td>'+element.user_name+'</td>' +
                    '<td>'+element.date_birth+'</td>' +
                    '<td>'+element.gender+'</td>' +
                    '<td>'+element.province+'</td>' +
                    '<td>'+element.district+'</td>' +
                    '<td>'+element.email+'</td>' +
                    '<td>'+element.phone+'</td>' +
                    '<td>'+element.bought+'</td>' +
                    // '<td>' +
                    //     '<ul class="list-inline m-0">' +
                    //         '<li class="list-inline-item">' +
                    //             '<button class="btn btn-success btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Edit"><i class="fa fa-edit"></i></button>' +
                    //         '</li>' +
                    //         '<li class="list-inline-item">' +
                    //             '<button class="btn btn-danger btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i class="fa fa-trash"></i></button>' +
                    //         '</li>' +
                    //     '</ul>' +
                    // '</td>' +
                    ' <tr>'
                 ).appendTo('.list-user')
               });
     }).catch(err => {
       console.log('err', err);
     });
     $('.selectpicker').change(function () {
        var selectedOp = $('.selectpicker').val();
        $('.swap-age').remove();
        $('.swap-gender').remove();
        $('.swap-bought').remove();
        
        console.log(selectedOp);
        selectedOp.forEach(element => {
            
            if(element == 'age'){
                
                $(

                  '<div style="margin: 10px 0" class = "swap-age">' +
                  'Age<select class = "selected-age" style="height: 28px;width: 10%;margin: 0 3% 0 3.4%" >' +
                      '<option value="is">is</option>' +
                      '<option value="more">more than</option>' +
                      '<option value="less">less than</option>' +
                      '<option value="between">between</option>' +
                      
                  '</select><input style="width:10%;margin: 0 10% 0 2%"/>'+
                  
                  '</div>'
                    
                ).appendTo('.filter-user');
                
            }
            if(element == 'gender'){
                $(
                    '<div style="margin: 10px 0" class = "swap-gender">' +
                        'Gender<select class = "selected-gender" style="height: 28px;width: 10%;margin: 0 10% 0 2%" >' +
                            '<option selected></option>' +
                            '<option value="male">Male</option>' +
                            '<option value="female">Female</option>' +
                            '<option value="other">Other</option>' +
                            
                        
                    '</div>'
                    
                ).appendTo('.filter-user');
            }
            if(element == 'bought'){
                $(
                    '<div style="margin: 10px 0" class = "swap-bought">' +
                        'Bought<select class = "selected-bought" style="height: 28px;width: 10%;margin: 0 10% 0 2%" >' +
                        '<option selected></option>' +
                        '<option value="desc">Decrease</option>' +
                        '<option value="asc">Increase</option>' +
                            
                        
                    '</div>'
                    
                ).appendTo('.filter-user');
            }
            
        
        });
        
       
    });
    $(document).on('change','.filter-user .selected-bought', function() {
        if($('.selected-bought').val() == 'asc'){
          localStorage.setItem('bought', 'asc');
         
        }else{
            localStorage.setItem('bought', 'desc');
           
        }
    });
    $(document).on('change','.filter-user .selected-gender', function() {
        if($('.selected-gender').val() == 'male'){
            localStorage.setItem('gender', 'Male');
           
          }else{
              if($('.selected-gender').val() == 'female'){
                  localStorage.setItem('gender', 'Female');
              }else localStorage.setItem('gender', 'Other');
             
          }
    });
    $('.btn-apply').click(async function (e) {
        
        location.reload();
    })
    
      
 })