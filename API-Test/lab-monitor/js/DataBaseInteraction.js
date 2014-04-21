var APICalls = function(){


	var getAllLabs = function(res,temp){

		var MakeLab = require('./Lab');
		var MakeComputer = require('./Computer')
		var mongo = require('mongodb');
		var monk = require('monk');
		var db = monk('localhost:27017/test');
		var mongoId = "5338d167ec15c12c66947c1f";

		var Database = db.get('LabCollection');

		var LabList = [];

		Database.find({},{},function(e,docs){
			MockLabData = docs;

			for(var i = 0; i < MockLabData.length; i++)
			{
				var Computer = [];
				for(var j = 0; j < MockLabData[i].computers.length; j++)
				{
					Computer.push(MakeComputer.makeComputer(MockLabData[i].computers[j].id,MockLabData[i].computers[j].status,MockLabData[i].computers[j].positionx,MockLabData[i].computers[j].positiony));
				}

				var Hardware = [];
				for(var j = 0; j < MockLabData[i].hardware.length; j++)
				{
					Hardware.push(MockLabData[i].hardware[j]);
				}

				var Software = [];
				for(var j = 0; j < MockLabData[i].software.length; j++)
				{
					Software.push(MockLabData[i].software[j]);
				}
				LabList.push(MakeLab.makeLab(MockLabData[i]._id,MockLabData[i].name, MockLabData[i].room, Computer,Software,Hardware,MockLabData[i].dimsx,MockLabData[i].dimsy));
			}
			temp(LabList,res);
		});
	}

	var getFreeComputers = function(res,temp){

		var MakeLab = require('./Lab');
		var MakeComputer = require('./Computer')
		var mongo = require('mongodb');
		var monk = require('monk');
		var db = monk('localhost:27017/test');
		var mongoId = "5338d167ec15c12c66947c1f";

		var Database = db.get('LabCollection');

		var LabList = [];

		Database.find({"computers.status" : "free"},{},function(e,docs){
			MockLabData = docs;
			for(var i = 0; i < MockLabData.length; i++)
			{
				var Computer = [];
				for(var j = 0; j < MockLabData[i].computers.length; j++)
				{
					if(MockLabData[i].computers[j].status == "free")
					{
						Computer.push(MakeComputer.makeComputer(MockLabData[i].computers[j].id,MockLabData[i].computers[j].status,MockLabData[i].computers[j].positionx,MockLabData[i].computers[j].positiony));
					}
				}

				var Hardware = [];
				for(var j = 0; j < MockLabData[i].hardware.length; j++)
				{
					Hardware.push(MockLabData[i].hardware[j]);
				}

				var Software = [];
				for(var j = 0; j < MockLabData[i].software.length; j++)
				{
					Software.push(MockLabData[i].software[j]);
				}
				LabList.push(MakeLab.makeLab(MockLabData[i]._id,MockLabData[i].name, MockLabData[i].room, Computer,Software,Hardware,MockLabData[i].dimsx,MockLabData[i].dimsy));
			}
			temp(LabList,res);
		});
	}


	var getSoftware = function (res,software,temp){

		var MakeLab = require('./Lab');
		var MakeComputer = require('./Computer')
		var mongo = require('mongodb');
		var monk = require('monk');
		var db = monk('localhost:27017/test');
		var mongoId = "5338d167ec15c12c66947c1f";

		var Database = db.get('LabCollection');

		var LabList = [];

		Database.find({"software" : { $all: software}},{},function(e,docs){
			MockLabData = docs;

			for(var i = 0; i < MockLabData.length; i++)
			{
				var Computer = [];
				for(var j = 0; j < MockLabData[i].computers.length; j++)
				{
					Computer.push(MakeComputer.makeComputer(MockLabData[i].computers[j].id,MockLabData[i].computers[j].status,MockLabData[i].computers[j].positionx,MockLabData[i].computers[j].positiony));
				}

				var Hardware = [];
				for(var j = 0; j < MockLabData[i].hardware.length; j++)
				{
					Hardware.push(MockLabData[i].hardware[j]);
				}

				var Software = [];
				for(var j = 0; j < MockLabData[i].software.length; j++)
				{
					Software.push(MockLabData[i].software[j]);
				}

				LabList.push(MakeLab.makeLab(MockLabData[i]._id,MockLabData[i].name, MockLabData[i].room, Computer,Software,Hardware,MockLabData[i].dimsx,MockLabData[i].dimsy));
			}
			temp(LabList,res);
		});
	}

	var addLab = function(res,lab,temp){
		var mongo = require('mongodb');
		var monk = require('monk');
		var db = monk('localhost:27017/test');
		var mongoId = "5338d167ec15c12c66947c1f";

		var Database = db.get('LabCollection');

		Database.open(function(err, client){
			Database.insert(lab);
			temp(lab,res);
		});

	}

	var getNameLab = function (res,name,temp){

		var MakeLab = require('./Lab');
		var MakeComputer = require('./Computer')
		var mongo = require('mongodb');
		var monk = require('monk');
		var db = monk('localhost:27017/test');
		var mongoId = "5338d167ec15c12c66947c1f";

		var Database = db.get('LabCollection');

		var LabList = [];

		Database.find({"name" : name},{},function(e,docs){
			MockLabData = docs;

			for(var i = 0; i < MockLabData.length; i++)
			{
				var Computer = [];
				for(var j = 0; j < MockLabData[i].computers.length; j++)
				{
					Computer.push(MakeComputer.makeComputer(MockLabData[i].computers[j].id,MockLabData[i].computers[j].status,MockLabData[i].computers[j].positionx,MockLabData[i].computers[j].positiony));
				}

				var Hardware = [];
				for(var j = 0; j < MockLabData[i].hardware.length; j++)
				{
					Hardware.push(MockLabData[i].hardware[j]);
				}

				var Software = [];
				for(var j = 0; j < MockLabData[i].software.length; j++)
				{
					Software.push(MockLabData[i].software[j]);
				}

				LabList.push(MakeLab.makeLab(MockLabData[i]._id,MockLabData[i].name, MockLabData[i].room, Computer,Software,Hardware,MockLabData[i].dimsx,MockLabData[i].dimsy));
			}
			temp(LabList,res);
		});
	}

	var getNumberLab = function (res,number,temp){

		var MakeLab = require('./Lab');
		var MakeComputer = require('./Computer')
		var mongo = require('mongodb');
		var monk = require('monk');
		var db = monk('localhost:27017/test');
		var mongoId = "5338d167ec15c12c66947c1f";

		var Database = db.get('LabCollection');

		var LabList = [];

		Database.find({"room" : number},{},function(e,docs){
			MockLabData = docs;

			for(var i = 0; i < MockLabData.length; i++)
			{
				var Computer = [];
				for(var j = 0; j < MockLabData[i].computers.length; j++)
				{
					Computer.push(MakeComputer.makeComputer(MockLabData[i].computers[j].id,MockLabData[i].computers[j].status,MockLabData[i].computers[j].positionx,MockLabData[i].computers[j].positiony));
				}

				var Hardware = [];
				for(var j = 0; j < MockLabData[i].hardware.length; j++)
				{
					Hardware.push(MockLabData[i].hardware[j]);
				}

				var Software = [];
				for(var j = 0; j < MockLabData[i].software.length; j++)
				{
					Software.push(MockLabData[i].software[j]);
				}

				LabList.push(MakeLab.makeLab(MockLabData[i]._id,MockLabData[i].name, MockLabData[i].room, Computer,Software,Hardware,MockLabData[i].dimsx,MockLabData[i].dimsy));
			}
			temp(LabList,res);
		});
	}

	return {
        getAllLabs: getAllLabs
       ,getFreeComputers: getFreeComputers
       ,getSoftware: getSoftware
       ,addLab: addLab
       ,getNameLab: getNameLab
       ,getNumberLab: getNumberLab
    }
}();

module.exports = APICalls;