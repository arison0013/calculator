function display(num){
    document.getElementById('result').value+=num;
}
function clearScreen(){
    document.getElementById('result').value="";
}
function calculate(){
    try{
        // var i=1;
        var g=document.getElementById('result').value;
        var q= eval(g);
        document.getElementById('result').value=q;
        // if(i==7){
        //     document.getElementById('result').value="hello!";
        // }
    }
    catch{
        document.getElementById('result').value="error!";
    }
    
}
function back() {
    var v=document.getElementById('result').value;
    document.getElementById('result').value= v.substr(0, v.length-1);
}