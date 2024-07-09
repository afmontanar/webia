function sendMessage() {
    const input = document.getElementById('user-input');
    const message = input.value.trim();

    if (message === '') return;

    const userMessage = document.createElement('div');
    userMessage.className = 'message user-message';
    userMessage.textContent = message;
    document.getElementById('chat-container').appendChild(userMessage);

    input.value = '';

    setTimeout(() => {
        const botMessage = document.createElement('div');
        botMessage.className = 'message bot-message';
        botMessage.textContent = 'Esta es una respuesta automática del bot.';
        document.getElementById('chat-container').appendChild(botMessage);

        // Desplazar hacia abajo para ver el nuevo mensaje
        document.getElementById('chat-container').scrollTop = document.getElementById('chat-container').scrollHeight;
    }, 500);

    // Desplazar hacia abajo para ver el nuevo mensaje
    document.getElementById('chat-container').scrollTop = document.getElementById('chat-container').scrollHeight;
}

