
    

window.addEventListener("scroll",function(e){
    if(this.window.scrollY>4)
    {
        
     let header=document.getElementById('header')
header.className="sticky";
    }
    else{
        let header=document.getElementById('header')
header.className="header";
    }
})


//  function sendEmail() {
//       Email.send({
//         Host: "smtp.gmail.com",
//         Username: "sender@email_address.com",
//         Password: "Enter your password",
//         To: 'receiver@email_address.com',
//         From: "sender@email_address.com",
//         Subject: "Sending Email using javascript",
//         Body: "Well that was easy!!",
//       })
//         .then(function (message) {
//           alert("mail sent successfully")
//         });
//     }

function myClose()
{
  let display=document.getElementById('navbar')
  display.style.display="none"
}
