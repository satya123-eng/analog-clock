function rock(){
    hour=document.querySelector("#hour");
    min=document.querySelector("#min");
    sec=document.querySelector("#sec");
    setInterval(()=>{
    time=new Date()
    let min1=time.getMinutes()*6;
    let sec1=time.getSeconds()*6+(time.getMilliseconds()/1000) /60 * 360;
    let hour1=time.getHours()*30+(min1/12);
    hour.style.transform=`rotateZ(${hour1}deg)`
    min.style.transform=`rotateZ(${min1}deg)`
    sec.style.transform=`rotateZ(${sec1}deg)`
   });
}
rock();
