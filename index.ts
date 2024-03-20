#! /usr/bin/env node
import inquirer from "inquirer";
const result= await inquirer.prompt([
    {message:'Enter First Value     :',type:'number',name:'fv'},
    {message:'Enter Second Value    :',type:'number',name:'sv'},
    {message:'Select Operation',type:'list',name:'opt',choices:['Addition','Subtraction','Multiplication','Division']}
])
if(result.opt=="Addition"){console.log(`${result.fv} + ${result.sv} = ${result.fv + result.sv}`);}
else if(result.opt=="Subtraction"){console.log(`${result.fv} - ${result.sv} = ${result.fv - result.sv}`);}
else if(result.opt=="Multiplication"){console.log(`${result.fv} x ${result.sv} = ${result.fv * result.sv}`);}
else if(result.opt=="Division"){console.log(`${result.fv} / ${result.sv} = ${result.fv / result.sv}`);}
else{console.log("Please select valid operation.");}