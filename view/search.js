$(document).ready(function() {  

   var url_string  = window.location.href;
   var url = new URL(url_string);
   var c= url.searchParams.get("item_name");
  if (c !== undefined){
    axios.get(`http://localhost:3000/search?item_name=${c}`).then((data, message) => {

      if (data.data.message === "Ok") {
       
        // console.log(data.data.data);
        data.data.data.forEach(function(element) {
                $('<div class="col-sm-2 khoiPic">'+'<div class="card">'+ '<img class="card-img-top" src="./public/images/'+ element.img +'">'+ '<div class="card-body">'+
                '<p class="card-text">'+ element.item_name +'</p>'+
                '<h6 class="card-title">'+ element.price +' ¥</h6>'+
                '<button class="btn btn-outline-secondary btn_add-to-cart ">かごに追加</button>'
                +'</div>'
                +'</div>'+'</div>')
                .appendTo('.search-item');
              });
      }
      else {
        alert("Not found item!!!");
  
      }
    }).catch(err => {
      console.log('err', err);
    });
  }
  


})