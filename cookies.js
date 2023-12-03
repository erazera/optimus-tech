function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
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