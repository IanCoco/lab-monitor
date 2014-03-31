var GetDataStuff = require('./FreeComputer');


function ReturnLabs(Labs)
{
	console.log(Labs);
	//function giving data to other layer
}

function ReturnSoftwareLabs(Labs)
{
	console.log(Labs);
	//function giving data to other layer
}

function ReturnFreeComputers(Labs)
{
	console.log(Labs);
	//function giving data to other layer
}

function GetAllLabs()
{
	GetDataStuff.getAllLabs(ReturnLabs);
}

function GetComputerBySoftware(Software)
{
	GetDataStuff.getSoftware(Software, ReturnSoftwareLabs);
}

function GetFreeComputers()
{
	GetDataStuff.getFreeComputers(ReturnSoftwareLabs);
}