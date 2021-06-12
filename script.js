const timer = document.getElementById('timer');

var hr = 0;
var min = 0;
var sec = 0;
var k=0,m=0,s=0;
var score=0;
var maxscore=0;
//var hsname=0;
var stoptime = true;
const playaudio = document.getElementById("audio1");

function swapTiles(cell1,cell2) {
    playaudio.play();
    var divColor = document.getElementById(cell1).style.backgroundColor;
    document.getElementById(cell1).style.backgroundColor = document.getElementById(cell2).style.backgroundColor.toString();
    document.getElementById(cell2).style.backgroundColor = divColor.toString();
  }
  
  
  function shuffle() {
  
  for (var row=1;row<=6;row++) { 
     for (var column=1;column<=6;column++) { 
    
      var row2=Math.floor(Math.random()*6 + 1); 
      var column2=Math.floor(Math.random()*6 + 1); 
       
      swapTiles("cell"+row+column,"cell"+row2+column2);
    } 
  } 
  for (var row=1;row<=4;row++) { 
    for (var column=1;column<=4;column++) { 
   
     var row2=Math.floor(Math.random()*4 + 1); 
     var column2=Math.floor(Math.random()*4 + 1); 
      
     swapTiles("cell"+row+column+"k","cell"+row2+column2+"k"); 
   } 
  } 
  }
  
  function clickTile(row,column) {
    var cell = document.getElementById("cell"+row+column);
    var tile = cell;
    k++;
    if (tile.style.backgroundColor!='white'  ) 
    { 
          if (column<6) {
           if ( document.getElementById("cell"+row+(column+1)).style.backgroundColor=='white' ) {
             swapTiles("cell"+row+column,"cell"+row+(column+1));
             return;
           }
          }
         
         if (column>1) {
           if ( document.getElementById("cell"+row+(column-1)).style.backgroundColor=='white') {
             swapTiles("cell"+row+column,"cell"+row+(column-1));
             return;
           }
         }
         
         if (row>1) {
           if ( document.getElementById("cell"+(row-1)+column).style.backgroundColor=='white') {
             swapTiles("cell"+row+column,"cell"+(row-1)+column);
             return;
           }
         }
       
         if (row<6) {
           if ( document.getElementById("cell"+(row+1)+column).style.backgroundColor=='white') {
             swapTiles("cell"+row+column,"cell"+(row+1)+column);
             return;
           }
         } 
    }
    
  }
  
    function startTimer() {
      if (stoptime == true) {
            stoptime = false;
            timerCycle();
        }
    }
    function stopT() {
      if (stoptime == false) {
        stoptime = true;Scorecalc();
      }
      
    }
    
    function timerCycle() {
        if (stoptime == false) {
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);
    
        sec = sec + 1;
    
        if (sec == 60) {
          min = min + 1;
          sec = 0;
        }
        if (min == 60) {
          hr = hr + 1;
          min = 0;
          sec = 0;
        }
        m=min;s=sec;
        if (sec < 10 || sec == 0) {
          sec = '0' + sec;
        }
        if (min < 10 || min == 0) {
          min = '0' + min;
        }
        if (hr < 10 || hr == 0) {
          hr = '0' + hr;
        }
    
        timer.innerHTML = hr + ':' + min + ':' + sec;
    
        setTimeout("timerCycle()", 1000);
      }
    }
    
    function resetTimer() {
      timer.innerHTML = "00:00:00";
      stoptime = true;
      hr = 0;
      sec = 0;
      min = 0;
      score=0;
      k=0;
    }
    function Scorecalc()
    { 
      var t = (m*60)+(s);
      score = 40000-(k*100+t);
    }
    function check()
    { Scorecalc();
      var i,j,a=0;
      for(i=3;i<=6;i++)
      {for(j=3;j<=6;j++)
      {
        if(document.getElementById("cell"+i+j).style.backgroundColor != document.getElementById("cell"+(i-2)+(j-2)+"k").style.backgroundColor) a=1;
      }}
      if(a==0) {if(score>maxscore){ maxscore=score;}window.alert("Completed Your score is "+score+"The High score is:"+maxscore);}
      else window.alert("tryagain");
    }
   /* function store()
    {
      window.localStorage.myitems.maxscore = maxscore;
      window.localStorage.myitems.hsname = hsname;
    }*/
   