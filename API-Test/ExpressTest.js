var express = require('express');
var GetDataStuff = require('./DataBaseInteraction');
var app = express();
app.use(express.json());
app.use(express.urlencoded());

var server = app.listen(3000,function()
{
	console.log('Listening on port %d',server.address().port);
});

function ConfirmLab(Lab,res)
{
	console.log("Added Lab ");
}

function ReturnLabs(Labs,res)
{
	console.log(Labs);
	res.send(Labs);
	//function giving data to other layer
}

function ReturnNameLab(Labs,res)
{
	console.log(Labs);
	res.send(Labs);
}

function ReturnNumberLab(Labs,res)
{
	console.log(Labs);
	res.send(Labs);
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

function GetLabByName(Name,res)
{
	GetDataStuff.getNameLab(res,Name,ReturnNameLab);
}

function GetLabByNumber(number,res)
{
	GetDataStuff.getNumberLab(res,number,ReturnNumberLab);
}

function GetComputerBySoftware(res,Software)
{
	GetDataStuff.getSoftware(res,Software, ReturnSoftwareLabs);
}

function AddLab(res,lab)
{
	GetDataStuff.addLab(res,lab,ConfirmLab)
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

app.post('/AddLab', function(req,res){
	var lab = req.body.lab;
});

app.param('Name',function(req,res,next,name){
	req.data = name;
	console.log(req.data);
	next();
});

app.get('/GetLabName/:Name', function(req,res){
	GetLabByName(req.data,res);
});

app.param('Number',function(req,res,next,number){
	req.data = number;
	console.log(req.data);
	next();
});

app.get('/GetLabNumber/:Number', function(req,res){
	GetLabByNumber(req.data,res);
});

