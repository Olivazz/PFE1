//13
function delayedHello() {
    setTimeout(() => {
      console.log("Hello after 1 second");
    }, 1000);
  }
 
//14
  function countToFive() {
    let count = 1;
    const interval = setInterval(() => {
      console.log(count);
      if (count === 5) clearInterval(interval);
      count++;
    }, 1000);
  }