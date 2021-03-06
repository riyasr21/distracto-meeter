# distracto-meeter
## a web based video meeting application along with detection of user's awareness and expression

The meeting host can click on user's stream to get face recognition and eye aspect ratio detected. <br/>
The threshold value is set to 0.20. If, for 10 consecutive frames the eye aspect ratio (EAR) is lesser than this threshold value, we get "Distracted" seen on the screen.</br>
# [Repository for flask server](https://github.com/riyasr21/flask-server)

# [Final Deployment Link](https://distracto-meeter-frontend.herokuapp.com/)
The final deployment doesn't include the facial expression detection using fastai as it wasn't getting deployed due to large slug size. It only contains the awareness detection component.


# [Link for Canva Presentation](https://www.canva.com/design/DAFCEDAI6XE/6vA04m8owT2IQbi5kAv6pw/edit?utm_content=DAFCEDAI6XE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

# [Video Demo](https://drive.google.com/file/d/13ma-dlbecxP-SW6yASK3FkhnIKWs1oI-/view?usp=sharing)

# Tech stack 
1. React - Redux
2. Node js
3. Flask
4. fast.ai
5. Socket.io & Socket.io-client
6. Twilio
7. Simple - peer
8. OpenCV
9. WebRTC

## Some screenshots from the application

![image](https://user-images.githubusercontent.com/89318501/170872610-9c2ec7d9-226c-4388-bd9c-309bed7ebad3.png)
![image](https://user-images.githubusercontent.com/89318501/170872748-35c8588c-c2fb-4463-996c-967af7a3f73d.png)
![image](https://user-images.githubusercontent.com/89318501/170872761-c2e7b309-3d1c-43ba-bb77-aaeab96396f4.png)
![image](https://user-images.githubusercontent.com/89318501/170872806-2d131e7e-a237-4305-8428-8b6f70f7ef47.png)
![image](https://user-images.githubusercontent.com/89318501/170872844-ca0fb4d1-8168-4538-bbe3-38d94c1f3a35.png)
![image](https://user-images.githubusercontent.com/89318501/170872968-4377ee34-14cc-478a-8495-f6a242906fe6.png)
![image](https://user-images.githubusercontent.com/89318501/170873091-83480375-2d01-4817-b3c7-595b4cd4165e.png)

## Installation
For frontend: - </br>
$ cd distracto-meeter-frontend </br>
$ npm install </br>
$ npm start </br>
For flask server: - Go to the flask server repository please [Repository for flask server](https://github.com/riyasr21/flask-server) </br>
For nodejs server </br>
$ cd server </br>
$ npm install </br>
$ node server.js </br>

## Few pointers
1. Make sure that Node 16.5.0 is installed for proper functioning.
2. While copying the meeting id, take care of the leading whitespace character.
3. The Mesh architecture of WebRTC is applied, so right now at most 4 users can join a room.
4. At a time, if you are a host, click on only one user's incoming stream to ensure proper functioning of flask server as it is performing quite CPU intensive task.


### Thank you!
