var log=[];
function displayNum(id)
{
	document.getElementById("display").value += id;
	addToLog(id);
}

function clrDisplay()
{
	document.getElementById("display").value= "";
	addToLog(' ');
}

function solveEquation()
{ 
	var num1 = document.getElementById("display").value;
	var num2 = eval(num1);
	document.getElementById("display").value = num2;

	addToLog('=' + num2)
}

function addToLog(value) 
{
	log += value;
	document.getElementById('log').innerText = log;

}