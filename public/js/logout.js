document
  .getElementById("logoutbtn")
  .addEventListener("click", async function () {
    const response = await fetch("/api/users/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If the logout is successful, redirect the user to the login page
      document.location.replace("/login");
    } else {
      alert("Failed to log out");
    }
  });
