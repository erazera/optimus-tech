function setCookie(cName, cValue, expDays) {
    const d = new Date();
    d.setTime(d.getTime() + (expDays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cName + "=" + cValue + ";" + expires + ";path=/";
  }

  getCookie = (cName) => {
    const name = cName + "="
    const cDecoded = decodeURIComponent(document.cookie);
    const cArr = cDecoded.split("; ");
    let value;
    cArr.forEach(val => {
      if(val.indexOf(name) === 0) value = val.substring(name.lenght);
    })

    return value;
  }

  var acceptBtn = document.getElementById('cookies-btn-yes');
  var declineBtn = document.getElementById('cookies-btn-no');

  acceptBtn.addEventListener("click", function(){
    document.querySelector("#cookies").style.display = "none";
    setCookie("cookie", true, 7);
  })

  declineBtn.addEventListener("click", function(){
    document.querySelector("#cookies").style.display = "none";
  })

  cookieMessage = () => {
    if(!getCookie("cookie")){
        document.querySelector("#cookies").style.display = "block";
    }
  }

  window.addEventListener("load", cookieMessage);