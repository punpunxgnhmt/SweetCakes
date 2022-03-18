
var x = true;
function showHide() {
    if(x){
        document.getElementById('pass').type = "text";
        x = false;
    }else{
        document.getElementById('pass').type = "password";
        x = true;
    }
}


var y = true;
function showHideConfirm() {
    if(y){
        document.getElementById('cpass').type = "text";
        y = false;
    }else{
        document.getElementById('cpass').type = "password";
        y = true;
    }
}



