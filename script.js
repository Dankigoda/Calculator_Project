inputElement = document.getElementById('number_input');
function appent(input){
    inputElement.value += input;
}

function clearInput(){
    inputElement.value = '';
}
function result(){
    try{
        inputElement.value = eval(inputElement.value);
    }
    catch(error){
        inputElement.value = "Error";
    }
}

function deleteLast(){

}

console.log(inputElement.value);