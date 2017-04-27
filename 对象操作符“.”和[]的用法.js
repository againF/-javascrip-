var myObj = {
gift: "pony",
pet: "kitten",
bed: "sleigh"
};

function checkObj(checkProp) {
var re = myObj.hasOwnProperty(checkProp);
  if(re) {
    return myObj[checkProp];//这里不要用return myObj.checkProp;注意：如果你需要通过变量来访问对象的属性值，请用中括号操作符，点操作符不支持变量。
  }
 else
   return "Not Found";
}

// Test your code by modifying these values
checkObj("gift");
