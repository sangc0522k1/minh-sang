let mynumber=Number(prompt('Enter a number'));
let count=0;
let prime=2;
let i=2;
    var flag=true;
        if (Number.isInteger(mynumber) && mynumber>0) {
            while (count<mynumber) {
                while (prime>i){
                    if (prime%i==0){
                    flag=false;
                    break;
                }
                 else{
                  i+=1;
                 }
                }
                if (flag)   {
                  document.writeln(prime);
                    count+=1;
                }
                prime+=1;
                flag=true;
                i=2;
         }
    }
    else {
        alert('Ban can nhap lai dung so nguyen duong')
}