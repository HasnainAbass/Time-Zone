#! /usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt(
    [
        {
            message:"Please Enter your Name !",
            name:"userName",
            type:"string"
        },
        {
            message:"Plaese Enter Time according to your time zone(24hrs-Format):",
            name:"timeZone",
            type:"number"
        }
    ]
);

// logical statments:

if(answer.timeZone >= 5.00 && answer.timeZone <= 11.59){
    console.log(`Good Mornning, Mr/Ms .${answer.userName}`);
    
}else if(answer.timeZone >= 12.00 && answer.timeZone <= 16.59){
console.log(`Good Afternoon, Mr/Ms .${answer.userName}`);

}else if(answer.timeZone >= 17.00 && answer.timeZone <= 20.59){
console.log(`Good Evening, Mr/Ms .${answer.userName}`);

}else{
console.log(`Good Night, Mr/Ms .${answer.userName}`);

}
