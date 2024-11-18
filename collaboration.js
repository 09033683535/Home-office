// DOM Elements
const messageInput = document.getElementById('message-input');
const sendMessageBtn = document.getElementById('send-message-btn');
const chatMessages = document.getElementById('chat-messages');

const participantInput = document.getElementById('participant-input');
const addParticipantBtn = document.getElementById('add-participant-btn');
const participantsList = document.getElementById('participants-list');

// Event Listeners
sendMessageBtn.addEventListener('click', sendMessage);
addParticipantBtn.addEventListener('click', addParticipant);

// Function: Send Message
function sendMessage() {
  const messageText = messageInput.value.trim();

  if (messageText === '') {
    alert('Please type a message!');
    return;
  }

  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  messageElement.innerHTML = `<span>You:</span> ${messageText}`;
  chatMessages.appendChild(messageElement);

  // Clear input
  messageInput.value = '';

  // Scroll to the latest message
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Function: Add Participant
function addParticipant() {
  const participantName = participantInput.value.trim();

  if (participantName === '') {
    alert('Please enter a participant name!');
    return;
  }

  const participantElement = document.createElement('li');
  participantElement.textContent = participantName;
  participantsList.appendChild(participantElement);

  // Clear input
  participantInput.value = '';
}
