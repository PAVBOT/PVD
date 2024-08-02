// Toggle dark mode
const themeToggle = document.getElementById('theme-toggle');
const chatbox = document.getElementById('chatbox');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('send-button');

themeToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

// Function to send a message
function sendMessage() {
    const userText = userInput.value.trim();
    if (userText) {
        addMessage(userText, 'user-message');
        userInput.value = '';
        botResponse(userText);
    }
}

// Function to add a message to the chatbox
function addMessage(text, className) {
    const message = document.createElement('div');
    message.className = className;
    message.textContent = text;
    chatbox.appendChild(message);
    chatbox.scrollTop = chatbox.scrollHeight;
}

// Function to generate bot response
function botResponse(userText) {
    let botText = '';
    const lowerCaseText = userText.toLowerCase();

    switch (true) {
        case lowerCaseText.includes('hello'):
            botText = 'Hi there! How can I help you?';
            break;
        case lowerCaseText.includes('how are you'):
            botText = 'I am just a bot, but I am doing great! How about you?';
            break;
        case lowerCaseText.includes('what is your name'):
            botText = 'I am a chatbot named PRV-1.0 to assist you.';
            break;
        case lowerCaseText.includes('what can you do'):
            botText = 'I can chat with you and answer basic questions. Try asking me something!';
            break;
        case lowerCaseText.includes('thank you'):
            botText = 'You are welcome!';
            break;
        case lowerCaseText.includes('bye'):
            botText = 'Goodbye! Have a great day!';
            break;
        case lowerCaseText.includes('help'):
            botText = 'Sure! I can answer questions like "What is your name?" or "What can you do?"';
            break;
        case lowerCaseText.includes('who made you'):
            botText = 'P. Yadav, R. Sreejith, and Vedant made me for a school project.';
            break;
        case lowerCaseText.includes('from which language you are made'):
            botText = 'I am made using HTML, CSS, and JavaScript.';
            break;
        case lowerCaseText.includes('what is p-1'):
            botText = 'Whenever current flows through a conductor, heat and a magnetic field are produced around the conductor. To get a strong magnetic field, we use a coil around a soft iron piece, which is called an electromagnet.';
            break;
        case lowerCaseText.includes('what is p-2'):
            botText = 'Whenever a conductor or coil is placed in a variable magnetic field, an EMF (electromotive force) is induced across the conductor or coil.';
            break;
        case lowerCaseText.includes('what is robotics'):
            botText = 'Robotics is the interdisciplinary branch of engineering and science that includes mechanical engineering, electrical engineering, computer science, and others. It involves the design, construction, operation, and use of robots.';
            break;
        case lowerCaseText.includes('what are elements in robotics'):
            botText = 'The main elements in robotics are sensors, actuators, controllers, and software. Sensors help the robot perceive its environment, actuators are responsible for movement, controllers process information, and software provides the instructions for tasks.';
            break;
        case lowerCaseText.includes('what are the basic elements in robotics'):
            botText = 'The basic elements in robotics include conductors, insulators, current, voltage, and resistance. Conductors allow current to pass easily, insulators do not, current is the flow of electrons, voltage is the force that moves electrons, and resistance opposes the flow of electrons.';
            break;
        case lowerCaseText.includes('what is ac/dc'):
            botText = 'AC stands for alternating current, which changes in magnitude and direction over time, commonly used in homes. DC stands for direct current, which has a constant magnitude and direction, mainly used in cells and batteries.';
            break;
        case lowerCaseText.includes('2012/pvr'):
            botText = `Hello, my owner PVR. You can ask me the following questions:
                1. Hello
                2. How are you?
                3. What is your name?
                4. What can you do?
                5. Thank you
                6. Bye
                7. Help
                8. Who made you?
                9. From which language are you made?
                10. What is P-1?
                11. What is P-2?
                12. What is robotics?
                13. What are the elements in robotics?
                14. What are the basic elements in robotics?
                15. What is AC/DC?`;
            break;
        case lowerCaseText.includes('2012/pvr/vedant'):
            botText = 'Vedant is one of my creators but,not vedant he is a cuhiya a very small cuhiya';
            break;
        case lowerCaseText.includes('2012/pvr/pawan'):
            botText = 'Pawan is my creator, and I owe my existence to him.';
            break;
        case lowerCaseText.includes('2012/pvr/ritvik'):
            botText = 'Ritvik is a creative mind who said that i will pay but not contributed to my development and,he is a enderman that escaped endportal and then he escaped minecraft also.';
            break;
        default:
            botText = 'Sorry, I did not understand that.';
            break;
    }
    addMessage(botText, 'bot-message');
}

// Event listeners for sending messages
sendButton.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

