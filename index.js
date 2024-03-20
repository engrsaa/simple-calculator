#! /usr/bin/env node
import inquirer from "inquirer";
const result = await inquirer.prompt([
    { message: 'Enter First Value     :', type: 'number', name: 'fv' },
    { message: 'Enter Second Value    :', type: 'number', name: 'sv' },
    { message: 'Select Operation', type: 'list', name: 'opt', choices: ['Addition', 'Subtraction', 'Multiplication', 'Division'] }
]);
function perform_operation(ifv, isv, iopt) {
    let calculationResult = 0;
    if (iopt == "Addition") {
        calculationResult = ifv + isv;
        console.log(`${ifv} + ${isv} = ${calculationResult}`);
    }
    else if (iopt == "Subtraction") {
        calculationResult = ifv - isv;
        console.log(`${ifv} - ${isv} = ${calculationResult}`);
    }
    else if (iopt == "Multiplication") {
        calculationResult = ifv * isv;
        console.log(`${ifv} x ${isv} = ${calculationResult}`);
    }
    else if (iopt == "Division") {
        calculationResult = ifv / isv;
        console.log(`${ifv} / ${isv} = ${calculationResult}`);
    }
    else {
        console.log("Please select valid operation.");
    }
    return calculationResult;
}
perform_operation(result.fv, result.sv, result.opt);
