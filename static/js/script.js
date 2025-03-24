document.getElementById("Register").addEventListener("submit", function (e) {
  e.preventDefault(); 
  const fullName = document.getElementById("full").value.trim();
  const userName = document.getElementById("userName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phn").value.trim();
  const password = document.getElementById("psw").value.trim();
  const confirmPassword = document.getElementById("cpsw").value.trim();
  
  if (fullName === "") {
    alert("Full Name is required.");
    return;
  }

  if (userName === "") {
    alert("Username is required.");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email.");
    return;
  }

  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(phone)) {
    alert("Please enter a valid 10-digit phone number.");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  } 
const gender = document.querySelector('input[name="gender"]:checked'); 
if (!gender) {
    alert("Please select a gender.");
    return;
}
  alert("Registration successful!");
});
