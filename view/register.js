$(".buttonSignIn").click(async function(e){
    e.preventDefault();
  const user_name = await $(".user_name").val();
  const phone = await $(".phone").val();
  const email = await $(".email").val();
  const first_name = await $(".first_name").val();
  const last_name = await $(".last_name").val();
  const pass_word = await $(".pass_word").val();
  const district = await $(".district").val();
  const province = await $(".province").val();
  const regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if(user_name == ''|phone== ''|email== ''|first_name== ''|last_name== ''|pass_word== ''|district== ''|province== ''){
    alert("Please enter enough information!!!");
  }else{
    if(!regex.test(email)){
      alert("Email error!!!");
    }else{
    axios.post('http://localhost:3000/register', {user_name : user_name, phone:phone, email: email,first_name: first_name, pass_word:pass_word, last_name: last_name, district: district, province: province}).then((data,message) => {
      if(data.data.message === "User name existed in database"){
        alert("Username existed in database!!");
  
      } else{ 
      console.log('data', data.data);
      location.replace('/login.html')
      }
    }).catch(err => {
        console.log('err',err);
    })

  }
}
  });