document.getElementById("Register").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission for validation

  const fullName = document.getElementById("full").value.trim();
  const userName = document.getElementById("userName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phn").value.trim();
  const password = document.getElementById("psw").value.trim();
  const confirmPassword = document.getElementById("cpsw").value.trim();
  const gender = document.querySelector('input[name="gen1"]:checked');

  // Full Name validation
  if (fullName === "") {
    alert("Full Name is required.");
    return;
  }

  // Username validation
  if (userName === "") {
    alert("Username is required.");
    return;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email.");
    return;
  }

  // Phone validation
  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(phone)) {
    alert("Please enter a valid 10-digit phone number.");
    return;
  }

  // Password validation
  if (password.length < 6) {
    alert("Password must be at least 6 characters.");
    return;
  }

  // Confirm Password validation
  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  // Gender validation
  if (!gender) {
    alert("Please select a gender.");
    return;
  }

  // If all validations pass
  alert("Registration successful!");
});
