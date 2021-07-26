axios.get('http://localhost:3000/skirt').then((data)=>
{
    console.log(data.data);
    data.data.data.forEach(function(element) {
      $('<div class="col-sm-2 khoiPic">'+'<div class="card">'+ '<img class="card-img-top" src="./public/images/'+ element.img +'">'+ '<div class="card-body">'+
      '<p class="card-text">'+ element.item_name +'</p>'+
      '<h6 class="card-title">'+ element.price +' ¥</h6>'+
      '<button class="btn btn-outline-secondary btn_add-to-cart ">かごに追加</button>'
      +'</div>'
      +'</div>'+'</div>')
      .appendTo('.container-skirt');
    });
    
});