document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  if (username === 'Home' && password === 'simpcyasakin') {
    window.location.href = 'welcome.html';
  } else {
    alert('Invalid credentials. Please try again.');
  }
});
