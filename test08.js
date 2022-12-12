// 사용자 이벤트 처리 
process.on('hello',function(){
    console.log('이벤트 발생');
})

setTimeout(function(){
    // console.log('3초 후에 exit 발생')
    process.emit('hello'); // 사용자가 만드는 이벤트
},2000)

process.on('bye',function(){
    console.log('bye 이벤트 발생');
})

setTimeout(function(){
    // console.log('3초 후에 exit 발생')
    process.emit('bye'); // 사용자가 만드는 이벤트
},5000)