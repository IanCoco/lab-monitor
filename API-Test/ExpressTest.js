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
	GetDataStuff.getAllLabs(res,ReturnLabs);
}

function GetComputerBySoftware(res,Software)
{
	GetDataStuff.getSoftware(res,Software, ReturnSoftwareLabs);
}

function GetFreeComputers(res)
{
	GetDataStuff.getFreeComputers(res,ReturnFreeComputers);
}

app.get('/AllLabs', function(req,res){
	GetAllLabs(res);
});

app.get('/FreeComputers', function(req,res){
	GetFreeComputers(res);
});

app.param('Software',function(req,res,next,tempSoftware){
	console.log(tempSoftware);
	req.data = tempSoftware.split(",");
	next();
});

app.get('/GetSoftware/:Software', function(req,res){
	GetComputerBySoftware(res,req.data);
});
