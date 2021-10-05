function loading(){
  document.getElementById('preload').style.display="none";
}

var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
  get: function () { supportsPassive = true; } 
}));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

disableScroll()

window.onload = function() {
  setTimeout(loading, 50);
  setTimeout(enableScroll, 50);
}

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

function shift() {
  var line = document.getElementById('shift');
  line.setAttribute("x1", "170");
  line.setAttribute("x2", "500");
  var elements = document.getElementsByClassName('ad');
  for(var i=0; i<elements.length; i++) { 
    elements[i].style.visibility='hidden';
  }
  document.getElementById("before").innerHTML = "Aggregate demand is dependent on consumer spending (C), investment spending (I), government spending (G), and net exports (X-M),  shown through the equation AD = C + I + G + (X-M). The following graph shows El Salvador's economy before the adoption of <span style='color:orange;'>Bitcoin</span>. As shown, El Salvador currently produces at PL1 and Y1 in phase 1 of the Keynesian aggregate supply curve where supply is perfectly elastic and there is spare capacity. "
}

function shift1() {
  var line = document.getElementById('shift');
  line.setAttribute("x1", "290");
  line.setAttribute("x2", "620");
  line.style.transition = "2s";
  var elements = document.getElementsByClassName('ad');
  for(var i=0; i<elements.length; i++) { 
    elements[i].style.visibility='visible';
  }
  document.getElementById("before").innerHTML = "Bukele hoped that adopting <span style='color: orange;'>Bitcoin</span> would help boost aggregate demand and overall rGDP since it would impact consumer spending, investment spending, and government spending.<br><br> Consumer Spending (C) - El Salvador published an app called Chivo which essentially works as a digital wallet to hold and transfer <span style='color: orange;'>Bitcoin</span>. When citizens of El Salvador install the app on their mobile devices, they are gifted $30 in <span style='color: orange;'>Bitcoin</span> which they can spend at their own disposal.  <br><br> Investment Spending (I) - The technological change of using <span style='color: orange;'>Bitcoin</span> allows firms to send and receive payments with extremely low transaction fees. The amount saved on transaction fees allows firms to have additional capital which they can use to invest. <br><br> Government Spending (G) - In order to establish a secondary currency, President Bukele purchased 400 <span style='color: orange;'>Bitcoin</span>, equivalent to US$21 million in early 2021 with plans to buy more in the near future. <br><br> These factors contribute to increasing AD and will shift it right/upwards to AD1 and towards Yf or phase 3 of the Keynesian supply curve where the economy reaches full capacity. The macroeconomic equilibrium will be shift from PL1 and Y1 to PL1 and Y2 so rGDP would increase and El Salvador would experience economic growth. "
}

function shift2() {
  var line = document.getElementById('shift1');
  line.setAttribute("x1", "225");
  line.setAttribute("x2", "500");
  var elements = document.getElementsByClassName('ad1');
  for(var i=0; i<elements.length; i++) { 
    elements[i].style.visibility='hidden';
  }
  document.getElementById("before1").innerHTML = "Aggregate demand is dependent on consumer spending (C), investment spending (I), government spending (G), and net exports (X-M), shown through the equation AD = C + I + G + (X-M). The following graph shows El Salvador's economy before the adoption of <span style='color:orange;'>Bitcoin</span>. As shown, El Salvador currently produces at PL1 and Y1 in phase 1 of the Keynesian aggregate supply curve where supply is perfectly elastic and there is spare capacity. "
}

function shift3() {
  var line = document.getElementById('shift1');
  line.setAttribute("x1", "170");
  line.setAttribute("x2", "445");
  line.style.transition = "2s";
  var elements = document.getElementsByClassName('ad1');
  for(var i=0; i<elements.length; i++) { 
    elements[i].style.visibility='visible';
  }
  document.getElementById("before1").innerHTML = "Contrary to Bukele's beliefs, the adoption of <span style='color:orange;'>Bitcoin</span> will actually have a negative impact on El Salvador's economy, decreasing both aggregate demand and overall rGDP. <br><br> Consumer Spending (C) - Many people are skeptical of <span style='color:orange;'>Bitcoin</span> due to its volatility and prefer fiat currencies such as the US dollar. The wallet app, Chivo, also experienced many technical glitches in its rollout. Both of these have decreased consumer confidence in <span style='color:orange;'>Bitcoin</span> so they will be more reluctant to spend. <br><br> Investment Spending (I) - Similar to consumer spending, both the preference of fiat currencies over cryptocurrencies and the volatility of the price of <span style='color:orange;'>Bitcoin</span> decrease business confidence and thus they will be less inclined to invest. <br><br> Government Spending (G) - <span style='color:orange;'>Bitcoin</span> is a scarce resource with only a total of 21 million in circulation and unlike other goods, the supply of <span style='color:orange;'>Bitcoin</span> cannot increase and it is limited. To get more <span style='color:orange;'>Bitcoin</span>, one has to mine them by solving complex algorithms using computer processors which use a lot of electricity. As <span style='color:orange;'>Bitcoin</span> becomes more scarce, the algorithms become increasingly difficult to solve and thus it uses requires more mining power and electricity. The marginal cost to mine an additional <span style='color:orange;'>Bitcoin</span> increases and it becomes more expensive per <span style='color:orange;'>Bitcoin</span> and thus it is not sustainable. The opportunity cost of mining <span style='color:orange;'>Bitcoin</span> is the loss of funding that could be used on education and health care; both of which increase the factors of production in the long run and grow the economy. Eventually President Bukele will realize keeping <span style='color:orange;'>Bitcoin</span> as a currency is unsustainable and in the long run the government will have to make cuts to recover the lost investment in attempting to make <span style='color:orange;'>Bitcoin</span> an official currency, thus decreasing government spending and AD. <br><br> These factors contribute to decreasing AD and will shift it left/downwards to AD1 and away from Yf, remaining in phase 1 of the Keynesian supply curve with low economic growth and spare capacity. The macroeconomic equilibrium will be shift from PL1 and Y1 to PL1 and Y2 so rGDP would decrease and El Salvador would experience an economic recession. "
}