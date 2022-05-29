import * as io from "socket.io-client";


  
    
  
  
export const showMLVideoPreview = (stream,socketId) => {

    
    const myImage = document.createElement('img');
    let video_element = document.createElement('video');
    video_element.style.display = 'none';
    
    
    myImage.id = "mlImg"
    video_element.srcObject = stream;
    video_element.play();
    function capture(video, scaleFactor) {
        if(scaleFactor == null){
            scaleFactor = 1;
        }
        var w = video.videoWidth * scaleFactor;
        var h = video.videoHeight * scaleFactor;
        var canvas = document.createElement('canvas');
        canvas.style.display = 'none';
            canvas.width  = w;
            canvas.height = h;
        var ctx = canvas.getContext('2d');
            ctx.drawImage(video, 0, 0, w, h);
        return canvas;
    } 
//
   var socket_flask = io.connect("https://flask-server-eye.herokuapp.com/",{transports: ["websocket"]});

        

        socket_flask.on('connect', function() {
        console.log('Connected!');
        });

        
        
        const FPS = 3;
        setInterval(() => {
            
            
            var frame = capture(video_element, 1)
            var data = frame.toDataURL('image/jpeg');
            data = data.replace('data:' + 'image/jpeg' + ';base64,', '');
            socket_flask.emit('image', data);
        }, 1000/FPS);

        socket_flask.on('response_back', function(image){
                
            
            
                
                myImage.src = image;
                
                    });


        
        document.getElementById(socketId).appendChild(myImage);
        myImage.addEventListener("click",() => {
            
            socket_flask.disconnect();
            document.getElementById(socketId).removeChild(myImage);
            document.getElementById(`${socketId}-video`).style.visibility = "visible";
        })
}