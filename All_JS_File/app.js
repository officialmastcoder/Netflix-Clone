document.getElementById('homeBtn').addEventListener('click', function () {
  const data = document.getElementById('homeinputBox').value;
  if (data.length < 8) {
    alert('Please enter a correct Email Address');
  } else {
    const finishedBtn = document.getElementById('finished');
    const storedData = getCookie('storedData');
    if (storedData) {
      // Data is stored, show "Finished" button
      finishedBtn.style.display = 'block';
      window.location.href = '/registration/pass.html';
      
    }
    // Store the data in a cookie
    document.cookie = `storedData=${data}; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/`;
    document.getElementById('homeBtn').style.display = 'none';
    window.location.href = '/registration/reg.html';
  }
});

// Function to get a cookie by name
function getCookie(name) {
  const cookieValue = document.cookie
    .split('; ')
    .find(row => row.startsWith(name + '='));
  if (cookieValue) {
    return cookieValue.split('=')[1];
  }
  return null; // Return null if the cookie is not found
}

//Handle Finished Button Click

document.getElementById('finished').addEventListener('click', function () {
  // Check if the "storedData" cookie exists
  const storedData = getCookie('storedData');
  if (storedData) {
    // Redirect to the next page after registration
    window.location.href = '/registration/pass.html';
  } else {
    // Handle the case where the cookie is not found
    alert('No data found. Please start from the beginning.');
  }
});

