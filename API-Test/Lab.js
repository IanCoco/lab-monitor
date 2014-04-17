module.exports = { makeLab:function(Id,LabName, RoomNumber, Computers, Software,Hardware,X,Y){
	var Lab ={};
	Lab.id = Id;
	Lab.name = LabName;
	Lab.room = RoomNumber;
	Lab.computers = Computers;
	Lab.software = Software;
	Lab.hardware = Hardware;
	Lab.dimsx = X;
	Lab.dimsy = Y;
	return Lab;
}}