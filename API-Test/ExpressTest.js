var express = require('express');
var GetDataStuff = require('./FreeComputer');
var app = express();

var server = app.listen(3000,function()
{
	console.log('Listening on port %d',server.address().port);
});

function ReturnLabs(Labs,res)
{
	console.log(Labs);
	res.send(Labs);
	//function giving data to other layer
}

function ReturnSoftwareLabs(Labs,res)
{
	console.log(Labs);
	res.send(Labs);
	//function giving data to other layer
}

function ReturnFreeComputers(Labs,res)
{
	console.log(Labs);
	res.send(Labs);
	//function giving data to other layer
}

function GetAllLabs(res)
{
	GetDataStuff.getAllLabs(ReturnLabs,res);
}

function GetComputerBySoftware(res,Software)
{
	GetDataStuff.getSoftware(res,Software, ReturnSoftwareLabs);
}

function GetFreeComputers(res)
{
	GetDataStuff.getFreeComputers(res,ReturnFreeComputers);
}

app.get('/', function(req,res){
	GetFreeComputers(res);
});
