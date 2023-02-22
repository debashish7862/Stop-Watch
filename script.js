
        window.onload=function(){
            var second=00;
            var minute=00;
            var appendMinute=document.getElementById("minute")
            var appendSecond=document.getElementById("second")
            var buttonStart=document.getElementById("start")
            var buttonStop=document.getElementById("stop")
            var buttonReset=document.getElementById("reset")
            var Interval;
            buttonStart.onclick=function(){
                clearInterval(Interval)
                Interval=setInterval(startTimer,10)
            }
            buttonStop.onclick=function(){
                clearInterval(Interval);
            }
            buttonReset.onclick =function(){
                clearInterval(Interval)
                
                minute=00;
                second=00;
                appendMinute.innerHTML=minute;
                appendSecond.innerHTML=second;
            }
            function startTimer () {
                minute++; 
            if(minute<=9){
                appendMinute.innerHTML="0"+minute;
            }
            if(minute>9){
                appendMinute.innerHTML=minute;
            }
            if(minute>99){
                console.log("second");
                second++;
                appendSecond.innerHTML="0" + second;
                minute=0;
                appendMinute.innerHTML="0" + 0 ;
                

            }
            if(second>9){
                appendSecond.innerHTML=second;

            }
        }
            

        }

   