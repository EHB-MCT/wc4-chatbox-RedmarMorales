"use strict";

// url =>  https://ehbchatapp.herokuapp.com

const chat = {
    author: "Francis",
    init() {
        this.fetchMessages();
        this.sendMessage();
    },
    sendMessage() {
        //fetch()
        let msg = "";

        fetch('https://ehbchatapp.herokuapp.com/message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                author: this.author,
                message: 'Hello!'
            })
        });
    },
    fetchMessages() {
        console.log(this.fetchMessages);
        fetch('https://ehbchatapp.herokuapp.com/messages')
            .then(response => {
                return response.json();

            })
            .then(data => {
                data.forEach(message => {
                    this.renderMessage(message);
                });
            })
    },
    renderMessage(message) {
        console.log("Render!", message);
        const containerHtml = document.getElementById('messageContainer');

        const htmlString = `<div class="messageItem">
          <div class="header">
              <span class="author">${message.author}</span>
              <span class="time">00:00</span>
          </div>
          <p>
              ${message.message}
          </p>
      </div>`

        containerHtml.innerHTML += htmlString;
    }

}
chat.init()