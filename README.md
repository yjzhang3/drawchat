# drawchat
A socket.io enabled simple webpage that allows multiple users to chat and draw at the same time

To start in command line: node index.js

Type http://localhost:3000/ in your web browser and it will run on local host. 

Will see console messages logging who is connected and disconnected, also their messages. 

Credit to:
- https://socket.io/demos/chat/

- https://socket.io/demos/whiteboard/

Areas of improvement:
- incoporate a fadeOut() function that can "erase" automatically the drawing after a short amount of time. But the chat message window will be blocked when fadeOut() is enabled.

- can't get the color palette shown on the webpage.

Now sentiment analysis can be performed on the fly on the live chat data using this feature https://github.com/thisandagain/sentiment#testing

The sentiment score for every sentence and the total average score can be shown in the console. Hopefully they can be displayed on the web as well. 

Enjoy!
