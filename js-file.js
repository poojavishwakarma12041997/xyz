var x;
var m=0;
function start()
{
 x=setInterval(anim,20);
 
  function anim()
  {
      
      console.log(m);
        if(m==1520)
        {
            clearInterval(x);           
            m=0;
        }
        
        else
        {
            m=m+5;
            document.getElementById("im").style.visibility="visible";
            var target=document.getElementById("im");
            target.style.marginLeft=m+'px';
        }
   }

}

function stop()
{
    clearInterval(x)
}