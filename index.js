(function() {
  'use strict';
  const stopbtn = document.getElementById('stopButton')
  const slowbtn = document.getElementById('slowButton')
  const gobtn = document.getElementById('goButton')
  let countRed = 0
  let countYellow = 0
  let countGreen = 0

  stopbtn.addEventListener('click', stop);
  slowbtn.addEventListener('click', slow);
  gobtn.addEventListener('click', go);

  stopbtn.addEventListener("mouseenter", logRed)
  slowbtn.addEventListener("mouseenter", logYellow)
  gobtn.addEventListener("mouseenter", logGreen)

  stopbtn.addEventListener("click", logOnOffRed)
  slowbtn.addEventListener("click", logOnOffYellow)
  gobtn.addEventListener("click", logOnOffGreen)

  function stop(){
  const stoplight=document.getElementById('stopLight')
  if (stoplight.style.backgroundColor === 'black'){
  stoplight.style.backgroundColor = 'red';
  } else {
    stoplight.style.backgroundColor = 'black';
  } countRed++}

  function slow(){
    const slowlight=document.getElementById('slowLight')
    if (slowlight.style.backgroundColor === 'black'){
    slowlight.style.backgroundColor = 'yellow';
    } else {
    slowlight.style.backgroundColor = 'black';
    } countYellow++}

    function go(){
      const golight=document.getElementById('goLight')
      if (golight.style.backgroundColor === 'black'){
      golight.style.backgroundColor = 'green';
      } else {
        golight.style.backgroundColor = 'black';
      } countGreen++}

    function logRed(){
      console.log('Entered Red Button')
    }

    function logYellow(){
      console.log('Entered Yellow Button')
    }

    function logGreen(){
      console.log('Entered Green Button')
    }

    function logOnOffRed(){
     if (countRed%2 === 0){
      console.log('Red Light On')
    } else {
      console.log('Red Light Off')
    }}
    function logOnOffYellow(){
      if (countYellow%2 === 0){
        console.log('Yellow Light On')
      } else {
        console.log('Yellow Light Off')
      }}
    function logOnOffGreen(){
      if (countGreen%2 === 0){
        console.log('Green Light On')
      } else {
        console.log('Green Light Off')
      }}

  // YOUR CODE HERE
})();
