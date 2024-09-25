var qrimage=document.getElementById("qrimage")
var imgbox=document.getElementById("imgbox")
var qrtext=document.getElementById("qrtext")

function qrgen(){
  
    qrimage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrtext.value;
}