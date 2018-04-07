function updateBTC()
{
  var url = "https://bitbay.net/API/Public/BTCPLN/all.json";
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", url, false);
  xhttp.send();
  var obj = JSON.parse(xhttp.responseText);

  var urlBCC = "https://bitbay.net/API/Public/BCCPLN/all.json";
  var xhttpBCC = new XMLHttpRequest();
  xhttpBCC.open("GET", urlBCC, false);
  xhttpBCC.send();
  var objBCC = JSON.parse(xhttpBCC.responseText);

  var urlUSD = "https://bitbay.net/API/Public/LSKPLN/all.json";
  var xhttpUSD = new XMLHttpRequest();
  xhttpUSD.open("GET", urlUSD, false);
  xhttpUSD.send();
  var objUSD = JSON.parse(xhttpUSD.responseText);

  var urlEUR = "https://bitbay.net/API/Public/GAMEPLN/all.json";
  var xhttpEUR = new XMLHttpRequest();
  xhttpEUR.open("GET", urlEUR, false);
  xhttpEUR.send();
  var objEUR = JSON.parse(xhttpEUR.responseText);

  function formatPrice(price) {
    return price.reverse().replace(/((?:\d{2})\d)/g, '$1 ').reverse();
    }
    String.prototype.reverse = function() {
        return this.split('').reverse().join('');
    }

  var num = obj.last.toFixed(2);
  var numUSD = objUSD.last.toFixed(2);
  var numEUR = objEUR.last.toFixed(2);
  var numBCC = objBCC.last.toFixed(2);

  document.getElementById("btc-course").innerHTML = formatPrice(num) + " PLN";
  document.getElementById("btc-course-usd").innerHTML = formatPrice(numUSD) + " PLN";
  document.getElementById("btc-course-eur").innerHTML = formatPrice(numEUR) + " PLN";
  document.getElementById("btc-course-bcc").innerHTML = formatPrice(numBCC) + " PLN";

  setTimeout("updateBTC()", 60000);
}

function btcClicked(number)
{
  if(number==1)
  {
    $(".btc1").css({"opacity":"1","font-size":"20px","transition":"0.3s;"});
    $(".btc2").css({"opacity":"0.3","font-size":"16px","transition":"0.3s;"});
    $(".btc3").css({"opacity":"0.3","font-size":"16px","transition":"0.3s;"});
    $(".btc4").css({"opacity":"0.3","font-size":"16px","transition":"0.3s;"});
  }
  else if(number==2)
  {
    $(".btc2").css({"opacity":"1","font-size":"20px","transition":"0.3s;"});
    $(".btc1").css({"opacity":"0.3","font-size":"16px","transition":"0.3s;"});
    $(".btc3").css({"opacity":"0.3","font-size":"16px","transition":"0.3s;"});
    $(".btc4").css({"opacity":"0.3","font-size":"16px","transition":"0.3s;"});
  }
  else if(number==3)
  {
    $(".btc3").css({"opacity":"1","font-size":"20px","transition":"0.3s;"});
    $(".btc2").css({"opacity":"0.3","font-size":"16px","transition":"0.3s;"});
    $(".btc1").css({"opacity":"0.3","font-size":"16px","transition":"0.3s;"});
    $(".btc4").css({"opacity":"0.3","font-size":"16px","transition":"0.3s;"});
  }
  else if(number==4)
  {
    $(".btc4").css({"opacity":"1","font-size":"20px","transition":"0.3s;"});
    $(".btc2").css({"opacity":"0.3","font-size":"16px","transition":"0.3s;"});
    $(".btc1").css({"opacity":"0.3","font-size":"16px","transition":"0.3s;"});
    $(".btc3").css({"opacity":"0.3","font-size":"16px","transition":"0.3s;"});
  }
}
