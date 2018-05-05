let theText = document.getElementById("theText");    
theText.addEventListener("keyup",main);
//let content = document.getElementById("content");    

//////////////////////////////////////////////
function processUnorderedList(str){
let output="";
//XXXXXXXXXXXXXXXXXXXX
let lines = str.match(/[^\r\n]+/g);
//................
   let i=0;
   for(i=0;i< lines.length;i++){
    let firstChar = lines[i].charAt(0);
                if(firstChar == "-") {
                let newStr = "<li>" + lines[i].substring(1)+ "</li>";
                output += newStr;
                }else{
                output += lines[i];
                }     
    }//fiorends
return output;   
}
//////////////////////////////////////////////
function processHeading(str){
let output="";
//XXXXXXXXXXXXXXXXXXXX
let lines = str.match(/[^\r\n]+/g);
//................
   let i=0;
   for(i=0;i< lines.length;i++){
    let firstChar = lines[i].charAt(0);
        if(firstChar == "#") {
        //get the number of # marks
        let occurances = lines[i].match(/#/g);
        //remove all # from the line
        let newLine  = lines[i].replace(/#/g, "");
        //do not give heading larger than 6
        let rationalize =0;
        if(occurances.length > 6 ){rationalize=6}else{rationalize=occurances.length;}
        let newStr = "<h" + rationalize + ">" + newLine +"</h"+rationalize+">";
        output += newStr + "\n";
   }else{
    output += lines[i] + "\n";
   }     
    }//fiorends
return output;   
}
//////////////////////////////////////////////
function characterProcessor(lookFor,opening,closing,str){

    let flag = false;
    let prev = "";
    let cur = "";   
    let newStr = "";
    let count = 0;
    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
        do {
        if(count==0){prev="";cur=str[count];}
        else {prev=str[count-1];cur=str[count];}    
            if(flag == true && cur == lookFor && prev == lookFor )
                  {flag = false;
                    newStr += closing;
              //  console.log('Flag Open');
            }else if (flag == false && cur == lookFor && prev == lookFor )
             {flag=true; 
                newStr += opening;
             //console.log('Flag Close');
            }else {
                //if the first chat is a lookFor remoe that
                if(cur != lookFor) {newStr += cur; }   
            }       
         count++;   
        }
        while (count < str.length); 
    
    let delStr = lookFor;
    //console.log(delStr);
    return newStr.replace([delStr],"");
    }
//..................................
function main(){
    //clear out last itteration
    let display = document.getElementById("content");
    display.innerHTML = "";    
    //............        
    let str = document.getElementById("theText").value;    
    ///////////////////////////////////
      //BOLD   
    const str0 = characterProcessor("*","<b>", "</b>",str);
    //  Red text
    const str1 = characterProcessor("&","<span style='color:red'>", "</span>",str0);
      //Green text
      const str2 =characterProcessor("^","<span style='color:green'>", "</span>",str1);
      //Blue text
      const str3 =  characterProcessor("%","<span style='color:blue'>", "</span>",str2);
      //underline text
      const str4 =  characterProcessor("_","<span style='text-decoration: underline'>", "</span>",str3);
      //Strike through
      const str5 =  characterProcessor("~","<span style='text-decoration: line-through'>", "</span>",str4);
      // text italics
      const str6 =  characterProcessor("!","<span style='font-style: italic'>", "</span>",str5);

//XXXXXXXXXXXXXXXXXXXXXXXXX LINE PROCESSING
console.log(str6);
const str7 = processHeading(str6);         
const str8 = processUnorderedList(str7);         
//console.log(str8);
///i have moved the enter to <br/> to the last
const str9 = str8.replace(/(?:\r\n|\r|\n)/g, '<br\\>');  
display.innerHTML = str9;      
}//main 
main();   
//////////////////////////////////////////////
let hide = document.getElementById("hide");
hide.addEventListener("click",hideFunc);
function hideFunc(){
document.getElementById("theText").style.display = 'none';    
}