var minute = 0;            // Declaring global variable using var keyword
var second = 0;
var miliSecond = 0;
var timer;

// writting function for timer 
function callTimer() 
{    
    miliSecond++;
    if (miliSecond < 100) 
    {
        if (miliSecond === 99) 
        {
            miliSecond = 0;
            second++;
            if (second === 60)  
            {
                second = 0;
                minute++;
            }
        }
    }
    else
    {
        miliSecond = 0;
    }
    document.getElementById("timer").innerHTML = minute + ":" + second + ":" + miliSecond;
}

// writting function for start button
function start() 
{
    document.getElementById("start").disabled = true;  //start timer
    timer = setInterval(callTimer, 20);
}

// writting function for stop button
function stop() {
    document.getElementById("start").disabled = false;  // stop timer
    clearInterval(timer);
}


// writting function for reset button
function reset() {
    stop();    // if reset is calling then stop is automatically call
    minute = 0;
    second = 0;
    miliSecond = 0;
    document.getElementById("timer").innerHTML = minute + ":" + second + ":" + miliSecond; //reset and set to zero
}