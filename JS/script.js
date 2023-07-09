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
// function myfunction()
// {
//     console.log("hello")
//     let navbar=document.querySelector('navbar')
//     console.log(navbar.className)
// }

// window.addEventListener("scroll",function(e)
// {
//     console.log(this.window.scrollY)
//     let arr=['HTML','CSS','JAVASCRIPT','MONGODB','REACTJS','MYSQL']
//   for(let i=0;i<arr.length;i++)
//   {
//     move()
//   }
//     function move()
//     {
//            if(this.window.scrollY>900)
//     {
        
//                     var i = 0;

//   if (i == 0) {
//     i = 1;
//     var skill=document.getElementById("skillidcss")
//     console.log(skill.firstChild.textContent)
//     var elem = document.getElementById("progressvalue");
//     console.log(elem)
//     var width = 1;
//     var value=document.getElementById("value")
//     console.log(value.innerHTML)
//     var id = setInterval(frame, 10);
//     function frame() {
//       if (width >= 95) {
//         clearInterval(id);
//         i = 0;
//       } else {
//         width++;
//         elem.style.width = width + "%";
//       }
//     }
  
// }
// }

//     }
 
// })
        

// var i = 0;
// function move() {
//   if (i == 0) {
//     i = 1;
//     var elem = document.getElementById("myBar");
//     var width = 1;
//     var id = setInterval(frame, 10);
//     function frame() {
//       if (width >= 90) {
//         clearInterval(id);
//         i = 0;
//       } else {
//         width++;
//         elem.style.width = width + "%";
//       }
//     }
//   }
// }