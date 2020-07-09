# drawchat
A socket.io enabled app that allows multiple users to chat and draw at the same time. Meanwhile, a sentiment analysis is performed underneath. 

To start in command line: node index.js

dependencies:
- npm install sentiment
- npm install socket.io
- npm install express

Type http://localhost:3000/ in your web browser and it will run on local host. 

Will see server console messages logging who is connected and disconnected, also their messages. 

Credit to:
- https://socket.io/demos/chat/

- https://socket.io/demos/whiteboard/

- https://blog.logrocket.com/sentiment-analysis-node-js/

- https://github.com/ryu-bu

Areas of improvement:
- incoporate a fadeOut() function that can "erase" automatically the drawing after a short amount of time. But the chat message window will be blocked when fadeOut() is enabled.

- can't get the color palette shown on the webpage.

Now sentiment analysis can be performed on the fly on the live chat data using this feature https://github.com/thisandagain/sentiment#testing

The sentiment score for every sentence and the total average score, along with moving average (average for every five messages) can be shown in the console and on the webpage! An emoji icon will indicate the sentiment (happy, sad, or neutral).

Happy chatting/drawing!
