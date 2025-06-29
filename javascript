// Make chatbot draggable
document.addEventListener('DOMContentLoaded', function() {
    const chatbot = document.getElementById('movable-chatbot');
    const handle = document.getElementById('chatbot-handle');
    const closeBtn = document.querySelector('.close-chat');
    
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    
    // Close button functionality
    closeBtn.addEventListener('click', function() {
        chatbot.style.display = 'none';
        // To show it again, you could add a button elsewhere that sets display to 'block'
    });
    
    // Drag functionality
    handle.onmousedown = dragMouseDown;
    
    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // Get the mouse cursor position at startup
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // Call a function whenever the cursor moves
        document.onmousemove = elementDrag;
    }
    
    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // Calculate the new cursor position
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // Set the element's new position
        chatbot.style.top = (chatbot.offsetTop - pos2) + "px";
        chatbot.style.left = (chatbot.offsetLeft - pos1) + "px";
    }
    
    function closeDragElement() {
        // Stop moving when mouse button is released
        document.onmouseup = null;
        document.onmousemove = null;
    }
    
    // Keep your existing chatbot send functionality here
    document.getElementById('chatbot-send').addEventListener('click', function() {
        // Your existing send message code
    });
});
