var criteriaWindow = document.getElementsByClassName("critiera-container")[0];
var btnCloseCriteria = document.getElementById("cancel");
// var criterias = document.getElementsByName('criteria');
var genPassword = document.getElementById("generate_pwd");
var cp2Clipborad = document.getElementById("copy2clipboard");
var selectedCriteria;
var password = document.getElementById("password");
var generated_pwd = '';




btnCloseCriteria.onclick =function cancelCriteria(){
    console.log(criteriaWindow);
    criteriaWindow.style.display = "none";
    console.log("run");
}

// btnCloseCriteria.onclick = cancelCriteria;


window.onclick = function(event){
    if(event.target == criteriaWindow){
        criteriaWindow.style.display = "none";
    }
}

var btnConfirm = document.getElementById("confirm");
var radioLength = document.getElementById("length");
var radioCharacterType = document.getElementById("character_type");
// console.log(radioLength,radioCharacterType);

btnConfirm.onclick = function confirmSettings(){
    if (radioLength.checked + radioCharacterType.checked == 0){
        document.getElementById("warning").style.display = 'block';
    }
    else{
        selectedCriteria = (radioLength.checked == true)? ("length") : ("character");
        criteriaWindow.style.display = "none";
    }
}

function generatePassword(criteria){
    var options_alphanumeric = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var options_sp = '!"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~';
    var tempPassword = '';
    var charCount = Math.floor(Math.random()*(128-8) + 8);
    console.log(selectedCriteria);
    if (selectedCriteria === undefined){
        criteriaWindow.style.display = "block";
        return(null);
    }  
    else if(selectedCriteria === "length"){
        for(var i = 0; i<charCount;i++){
            tempPassword += options_alphanumeric[Math.floor(Math.random()*(options_alphanumeric.length))]
        }
        cp2Clipborad.style.background = "rgb(74, 84, 221)";
        return(tempPassword);
    }
    else if(selectedCriteria === "character"){
        var all_options = options_alphanumeric + options_sp
        for(var i = 0; i<charCount;i++){
            tempPassword += all_options[Math.floor(Math.random()*(all_options.length))]
        }
        cp2Clipborad.style.background = "rgb(74, 84, 221)";
        return(tempPassword);
    }

}

genPassword.onclick = function(){
    var generated_pwd = generatePassword(selectedCriteria);
    password.innerHTML = generated_pwd;
    password.style.textAlign = "left";
    password.style.fontSize = "20px";
    
}

cp2Clipborad.onclick = function() {
    //create a textarea 
    var pesudo_clipboard = document.createElement("textarea");

    // 
    pesudo_clipboard.value = password.textContent;
    console.log(pesudo_clipboard);
    console.log(pesudo_clipboard.value);
    document.body.appendChild(pesudo_clipboard);
    pesudo_clipboard.select();
    document.execCommand("copy");
    pesudo_clipboard.style.display= "none";
    document.body.removeChild(pesudo_clipboard);
}





