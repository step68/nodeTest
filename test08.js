// 사용자 이벤트 처리 
process.on('hello',function(){
    console.log('hello 이벤트 발생');
})

process.on('bye',function(){
    console.log('bye 이벤트 발생');
})

setTimeout(function(){
    process.emit('hello'); // 사용자가 만드는 이벤트
},2000)


setTimeout(function(){
    process.emit('bye'); // 사용자가 만드는 이벤트
},5000)