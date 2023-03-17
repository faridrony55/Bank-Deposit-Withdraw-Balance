const emails = ['farid@gmail.com']; 

document.getElementById("login").addEventListener('click', function(){
    const emailData =  document.getElementById("email");
    const email = emailData.value;

    const passwordData =  document.getElementById("password");
    const password = passwordData.value; 

    for(const emailCheck of emails){
         if(email == emailCheck && password == 111){
            window.location.href = 'bank.html';
         } else {
            alert('password or email is not correct');
         }
    }
});