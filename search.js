//<SCRIPT TYPE="TEXT/JAVASCRIPT">
//<![CDATA[
function Search(){
  window.open("searchidpw.html","아이디/비밀번호 찾기","");
}

function Gaip(){
  window.open("Gaip.html","_self");
}
//]]>
function Newboard(){
  window.open("newboard.html","","");
}
function Login(){
  var inid = document.getElementById("id").value;
  var inpw = document.getElementById("pw").value;
  var initid = "abc123"
  var initpw = "aaa258"
  if((inid == initid) && (inpw == initpw) ){

      window.open("board.html","_self","");
    }
    else {
      alert("아이디또는 비밀번호가 틀렸습니다.");
    }

}
function Check(){
  window.open("board.html","","");
}

function Recheck(){
  window.open("board.html","","");
}

function Cancel(){
  window.open("board.html","","");
}
function Logout(){
  alert("로그아웃 되었습니다.");
  window.open("login.html","_self","");
}
function Gaipcheck(){
  var pw = document.getElementById("pw").value;
  var pwch = document.getElementById("pwch").value;
  if(pw == pwch){
    window.open("board.html","_self");
  }
  else
  alert("비밀번호를 확인하세요");
}
function test(){
  var tt = document.getElementById("col").value;
  var rr = document.getElementById("chumbu").value;
  alert(rr);

}

function Rewrite(){
  var wt = document.getElementById("Writer").value;
  var rd = document.getElementById("Reader").value;
  i = document.getElementById("hid").value;
  if (wt==rd){
  window.open("rewrite"+i+".html","_self","");
  }
  else
  alert("Not"+wt);

}
function Delete() {
  var wt = document.getElementById("Writer").value;
  var rd = document.getElementById("Reader").value;
  i = document.getElementById("hid").value;
  if (wt==rd){
  window.open("rewrite"+i+".html","_self","");
  }
  else
  alert("Not"+wt);
}

function Select(){
  var tt = document.getElementById("t1").value;
  var tt2 = document.getElementById(tt).innerText;
  alert(tt2);
}

function fc_chk_byte(aro_name,ari_max) {
  var ls_str = aro_name.value;
  var li_str_len = ls_str.length;
  var li_max = ari_max;
  var i = li_byte = li_len = 0;
  var ls_one_char = ls_str2 = "";
  for(i=0; i< li_str_len; i++) {
    ls_one_char = ls_str.charAt(i);
    li_byte++;

    if(li_byte <= li_max){
      li_len = i + 1;
    }
  }

  if(li_byte > li_max) {
    alert( li_max + "byte, 초과 ");
    ls_str2 = ls_str.substr(0, li_len);
    aro_name.value = ls_str2;
    document.sms.char_byte.value = 80;
  }else {
    document.sms.char_byte.value = li_byte;
  }
  aro_name.focus();
}

function loginFormWithKakao() {
  Kakao.Auth.loginForm({
    success: function(authObj) {
      showResult(JSON.stringify(authObj))
    },
    fail: function(err) {
      showResult(JSON.stringify(err))
    },
  })
}
function showResult(result) {
  document.getElementById('reauthenticate-popup-result').innerText = result
}
//</SCRIPT>
