// const { default: axios } = require("axios");

$(document).ready(function() {
    
  axios.get('http://localhost:3000/').then((data)=>
    {
      const data_item = data.data.data[0];
      const data_skirt = data.data.data[1];
      const data_coat = data.data.data[2];
      const data_pants = data.data.data[3];
      
      for (let i = 0; i < data_item.length; i++) {
  
        const item = data_item[i];  
        $('<div class="col-sm-2 khoiPic">'+'<div class="card">'+ '<img class="card-img-top" src="./public/images/'+ item.img +'">'+ '<div class="card-body">'+
        '<p class="card-text">'+ item.item_name +'</p>'+
        '<h6 class="card-title">'+ item.price +' ¥</h6>'+
        '<button class="btn btn-outline-secondary btn_add-to-cart ">かごに追加</button>'
        +'</div>'
        +'</div>'+'</div>')
        .appendTo('div.hot-item');
        
        
      }
      for (let i = 0; i < data_skirt.length; i++) {
        const skirt = data_skirt[i];      
        $('<div class="col-sm-2 khoiPic">'+'<div class="card">'+ '<img class="card-img-top" src="./public/images/'+ skirt.img +'">'+ '<div class="card-body">'+
        '<p class="card-text">'+ skirt.item_name +'</p>'+
        '<h6 class="card-title">'+ skirt.price +' ¥</h6>'+
        '<button class="btn btn-outline-secondary btn_add-to-cart ">かごに追加</button>'
        +'</div>'
        +'</div>'+'</div>')
        .appendTo('div.hot-skirt');
        
        const coat = data_coat[i];      
        $('<div class="col-sm-2 khoiPic">'+'<div class="card">'+ '<img class="card-img-top" src="./public/images/'+ coat.img +'">'+ '<div class="card-body">'+
        '<p class="card-text">'+ coat.item_name +'</p>'+
        '<h6 class="card-title">'+ coat.price +' ¥</h6>'+
        '<button class="btn btn-outline-secondary btn_add-to-cart ">かごに追加</button>'
        +'</div>'
        +'</div>'+'</div>')
        .appendTo('div.hot-coat');
  
        const pants = data_pants[i];      
        // console.log("1212", pants);
        $('<div class="col-sm-2 khoiPic">'+'<div class="card">'+'<img class="card-img-top" src="./public/images/'+ pants.img +'">'+ '<div class="card-body">'+
        '<p class="card-text">'+ pants.item_name +'</p>'+
        '<h6 class="card-title">'+ pants.price +' ¥</h6>'+
        '<button class="btn btn-outline-secondary btn_add-to-cart ">かごに追加</button>'
        +'</div>'
        +'</div>'+'</div>')
        .appendTo('div.hot-pants');
        
        
      }
      
    
      
      $(".btn_add-to-cart").click(function(){
        
        const valueGetUsername = localStorage.getItem('username');
        if(valueGetUsername === null){
          alert('Please login!!!');
        }else{
         

          const  $parent= $(this).parent('div');
          const $item_name = $parent.find('.card-text').text();
          for (let i = 0; i < data.data.data.length; i++) {
          
            for (let j = 0; j < data.data.data[i].length; j++) {
             if (data.data.data[i][j].item_name == $item_name) {
               var item_id_add_cart = data.data.data[i][j].item_id;
               break;
             }
            }
          }
          axios.post('http://localhost:3000/add-cart', {user_name : valueGetUsername, item_id:item_id_add_cart }).then((data,message) => {
      
            if(data.data.message === "Add item succeeded!!!"){
              alert("Add item succeeded!!");
        
            } else{
              if(data.data.message === "Item existed in cart"){
                alert("Item existed in cart. Update amount succeeded!!!")
              }else{ 
              alert("Add item failed!!");
              }
            }
            
          }).catch(err => {
              console.log('err',err);
          })
          
            // location.replace('/cart.html');
        }

    })
  
    }).catch(err=>{console.log(err);
    });
    
   


  });

