document.getElementById('start-button').addEventListener('click', function() {
  const dateInput = document.getElementById('date').value;
  const timeInput = document.getElementById('time').value;

  if (!dateInput || !timeInput) {
    alert('Please enter both date and time.');
    return;
  }

   
  const countdownDate = new Date(`${dateInput}T${timeInput}`).getTime();
  
  const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance < 0) {
      document.getElementById('headline').innerText = "It's your event!";
      document.getElementById('countdown').style.display = 'none';
      document.getElementById('input-container').style.display = 'block';
      clearInterval(x);
      return;
    }

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    
    document.getElementById('days').innerText = Math.floor(distance / day);
    document.getElementById('hours').innerText = Math.floor((distance % day) / hour);
    document.getElementById('minutes').innerText = Math.floor((distance % hour) / minute);
    document.getElementById('seconds').innerText = Math.floor((distance % minute) / second);
  }, 1000);

 
  document.getElementById('countdown').style.display = 'block';
  document.getElementById('input-container').style.display = 'none';
});
