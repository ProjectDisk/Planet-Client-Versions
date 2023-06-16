// Source Code for clock https://www.w3schools.com/js/tryit.asp?filename=tryjs_timing_clock

// Clock
// Start time
function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
};

// Check time
function checkTime(i) {
  if (i < 10) {
     i = "0" + i
  };
  return i;
};

// Online indicator
let status = window.navigator.onLine;

// Online HTML Element
var onlineStatusTrue = document.createElement("div");
onlineStatusTrue.setAttribute("id", "onlineIndicator");
onlineStatusTrue.setAttribute("class", "onlineIndicatorOnline");

// Offline HTML Element
var onlineStatusFalse = document.createElement("div");
onlineStatusFalse.setAttribute("id", "onlineIndicator");
onlineStatusFalse.setAttribute("class", "onlineIndicatorOffline");

// Check if user is online or not
function checkOnlineStatus() {
  if (status) {
    document.getElementById("onlineIndicator").style.width = "0";
    document.getElementById("onlineIndicator").replaceWith(onlineStatusTrue);
  } else {
    document.getElementById("onlineIndicator").style.width = "0";
    document.getElementById("onlineIndicator").replaceWith(onlineStatusFalse);
  };
};

// Load online indicator
onload(checkOnlineStatus());

// Repeatedly check if user is online or not in case the user disconnects while in the home page
// If online
window.ononline = (status) => {
  document.getElementById("onlineIndicator").replaceWith(onlineStatusTrue);
};

// If offline
window.onoffline = (status) => {
  document.getElementById("onlineIndicator").replaceWith(onlineStatusFalse);
};