document.getElementById('send-button').addEventListener('click', function() {
    var userInput = document.getElementById('user-input').value;
    addMessage(userInput, 'user');
    processInput(userInput);
    document.getElementById('user-input').value = '';
  });

  function addMessage(text, sender) {
    var messagesContainer = document.getElementById('chatbot-messages');
    var messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.classList.add(sender);
    messageDiv.textContent = text;
    messagesContainer.appendChild(messageDiv);
  }

  function processInput(userInput) {
    // Aquí puedes implementar la lógica para procesar la entrada del usuario y generar una respuesta del chatbot
    
    if (userInput.toLocaleLowerCase === 'Hola'.toLocaleLowerCase) {
        botResponse = '¡Hola! ¿En qué puedo ayudarte?';
      }else if (userInput.toLocaleLowerCase === 'Adios'.toLocaleLowerCase ) {
        botResponse = '¡Hasta luego!';
      } else {
        botResponse = 'No entiendo tu mensaje. Por favor, intenta nuevamente.';
      }
    // Puedes usar condicionales, llamadas a APIs, etc.
    // Por simplicidad, aquí se muestra una respuesta predeterminada
    //var botResponse = 'Gracias por tu mensaje. Estoy procesando tu solicitud...';
    setTimeout(function() {
      addMessage(botResponse, 'bot');
    }, 1000);
  }