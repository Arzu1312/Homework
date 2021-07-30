const counters = document.querySelectorAll('.counter');
     const speed = 5;
      
     counters.forEach(counter =>{
       const updCount = () => {
         const target = counter.getAttribute('data-target');
         const count = +counter.innerText;

         const score =  speed;

         if(count < target) {
           counter.innerText = count + score;
           setTimeout(updCount, 1);
         }else {
           counter.innerText = target;

         }
       };
       updCount();
     })