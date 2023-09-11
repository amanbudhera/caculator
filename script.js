let str = "";

const button = document.querySelectorAll('button');
Array.from(button).forEach(element => {
    element.addEventListener('click',(e)=>{
        if (e.target.innerHTML == '=') {
            str = eval(str)
            console.log(str);
            document.querySelector('input').value = str;

        }else if(e.target.innerHTML == "C"){
            str = "";
            console.log(str);
            document.querySelector('input').value = str;
        }else if(e.target.innerHTML == 'DEL'){
            str = str.substring(0,str.length - 1);
            document.querySelector('input').value = str;
        }else{
            str = str + e.target.innerHTML;
            document.querySelector('input').value = str;
        }
    })
});
