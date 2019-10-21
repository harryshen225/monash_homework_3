var criteriaWindow = document.getElementsByClassName("critiera-container")[0];
var btnCloseCriteria = document.getElementById("cancel");
var criterias = document.getElementsByName('criteria');
var selectedCriteria;




btnCloseCriteria.onclick = function cancelCriteria(){
    console.log(criteriaWindow);
    criteriaWindow.style.display = "none";
    console.log("run");
}

// btnCloseCriteria.onclick = cancelCriteria();

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
        // alert("Criteria Not Defined!!!");
        console.log(document.getElementById("warning"));
        document.getElementById("warning").style.display = 'block';

    }
    else{
        console.log(selectedCriteria);
        criteriaWindow.style.display = "none";
    }
}








