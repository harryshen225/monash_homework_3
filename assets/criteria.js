var criteriaWindow = document.getElementsByClassName("critiera-container")[0];
var btnCloseCriteria = document.getElementById("cancel");
// var criterias = document.getElementsByName('criteria');
var genPassword = document.getElementById("generate_pwd");
var cp2Clipborad = document.getElementById("copy2clipboard");
var selectedCriteria_value = {length:null,
    specChar:false,
    numChar:false,
    lowerCase:false,
    upperCase:false};

var selectedCriteria = {length:document.getElementById("length"),
    specChar:document.getElementById("specChar"),
    numChar:document.getElementById("numChar"),
    lowerCase:document.getElementById("lowerCase"),
    upperCase:document.getElementById("upperCase")};
var password = document.getElementById("password");
var generated_pwd = '';
var form = document.getElementById("form");
var lengthWarning = document.getElementById("lengthWarning");

var criteriaSelection = document.getElementById("criteriaSelection");

//ADD event listener for length
//Add event listener for the button to check the import
selectedCriteria.length.addEventListener("change",function(){
    if(parseInt(selectedCriteria.length.value) >= 8 && parseInt(selectedCriteria.length.value) <= 128){
        lengthWarning.setAttribute("style","display:none")
        selectedCriteria_value.length = parseInt(selectedCriteria.length.value);
    }
    else{
        lengthWarning.setAttribute("style","display:block;");
        lengthWarning.setAttribute("style","color:red;");
        lengthWarning.textContent = "length needs to be numeric value between 8 and 128";
    }
})



btnCloseCriteria.onclick =function cancelCriteria(){
    console.log(criteriaWindow);
    criteriaWindow.style.display = "none";
    console.log("run");
}

// window.onclick = function(event){
//     if(event.target == criteriaWindow){
//         criteriaWindow.style.display = "none";
//     }
// }

var btnConfirm = document.getElementById("confirm");
var radioLength = document.getElementById("length");
var radioCharacterType = document.getElementById("character_type");
// console.log(radioLength,radioCharacterType);

btnConfirm.onclick = function confirmSettings(){
    // event.preventDefault();
    selectedCriteria_value.specChar = selectedCriteria.specChar.checked;
    selectedCriteria_value.numChar = selectedCriteria.numChar.checked;
    selectedCriteria_value.lowerCase = selectedCriteria.lowerCase.checked;
    selectedCriteria_value.upperCase = selectedCriteria.upperCase.checked;
    var validation_flag = true;

    if(selectedCriteria_value.specChar+selectedCriteria_value.numChar+selectedCriteria_value.lowerCase+selectedCriteria_value.upperCase===0){
        var checkboxWarning = document.createElement("p");
        checkboxWarning.setAttribute("style","display:block;");
        checkboxWarning.setAttribute("style","color:red;");
        checkboxWarning.textContent = "At least one of the following options needs to be checked!!";
        criteriaSelection.prepend(checkboxWarning);
        validation_flag = false;
    }
    console.log(selectedCriteria_value.length);
    if(!selectedCriteria_value.length){
        lengthWarning.setAttribute("style","display:block;");
        lengthWarning.setAttribute("style","color:red;");
        lengthWarning.textContent = "length can't be empty";
        validation_flag = false;
    }
    if(validation_flag){
        criteriaWindow.style.display = "none";
        var generated_pwd = generatePassword(selectedCriteria_value);;
        password.innerHTML = generated_pwd;
        password.style.textAlign = "left";
        password.style.fontSize = "20px";
    }
}

function generatePassword(criteria){
    var tempPassword = '';
    var specCharOptions = '!"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~';
    var numCharOptions = '0123456789';
    var lowerCharOptions = "abcdefghijklmnopqrstuvwxyz";
    var upperCharOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var alloptions = [specCharOptions,numCharOptions, lowerCharOptions,upperCharOptions];
    var selectedCombination = [];
    console.log(criteria);
    for(var i = 1; i < alloptions.length+1; i++){
        console.log(criteria[Object.keys(criteria)[i]]);
        if(criteria[Object.keys(criteria)[i]]){
            selectedCombination += alloptions[i-1];
            console.log(selectedCombination);
        }
    }
    
    console.log("~~~~~~~~~");
    for(var i = 0; i<criteria.length;i++){
        tempPassword += selectedCombination[Math.floor(Math.random()*(selectedCombination.length))];
    }
    cp2Clipborad.style.background = "rgb(74, 84, 221)";
    return(tempPassword);
    }


genPassword.onclick = function(){
    criteriaWindow.style.display = "block";
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





