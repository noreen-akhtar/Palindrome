function isPalin(){
    let x= document.getElementById('entry').value;
    let y= '';
    for (i=x.length-1; i>=0; i--){
        y= y+x[i];
    }
    if(x==y)
        document.getElementById('result').value = x+ 'is a palindrome';
    else
        document.getElementById('result').value = x+ 'is  not a palindrome';
    
}