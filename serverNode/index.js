const io =require('socket.io')(8000);

const users={}
io.on('connection',socket=>{
    socket.on('new-join-user',name=>{
        users[socket.id] =name;
        socket.broadcast.emt('user-join',name)
    });

    socket.on('send',message=>{
        socket.broadcast.emt('receive',{message:message,name:users[socket.id]})
    });
})
