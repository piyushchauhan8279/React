import {v4 as uuidv4} from 'uuid';
let getTicket=(n)=>{
  let arr=new Array(n);
  for(let i=0;i<n;i++){
    arr[i]={value:Math.floor(Math.random()*10),id:uuidv4()};
  }
  return arr;
}


let sum=(arr)=>{
let sum=0
for(let i=0;i<arr.length;i++){
sum+=arr[i].value;
}
return sum;
}

export {getTicket,sum};