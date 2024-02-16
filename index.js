let h1=document.getElementById("myh1");
let id=null,h=0,m=0,s=0;

const update=()=>{
    
    let time=""
    if(h<10)
      time=time+"0"+h+":";
    else
    time=time+h+":";

    if(m<10)
      time=time+"0"+m+":";
    else
    time=time+m+":";

    if(s<10)
      time=time+"0"+s;
    else
    time=time+s;
    h1.innerHTML=time;
}
const start=()=>{
    if(id===null)
       id=setInterval(increase,1000)
        //id=i123h
}

const stop=()=>{
    clearInterval(id);
    id=null
}

const reset=()=>{
    clearInterval(id);
    h=0
    m=0
    s=0
    id=null
    update();
}


const increase=()=>{
    s++;
    if(s===60){
        s=0;
        m++;
        if(m==60){
            m=0;
            h++;
        }
    }
    update();
    
}
