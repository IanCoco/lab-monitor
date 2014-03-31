module.exports = { makeLab:function(Id,LabName, RoomNumber, Computers, Software,Hardware,X,Y){
	var Lab ={};
	Lab.Id = Id;
	Lab.LabName = LabName;
	Lab.RoomNumber = RoomNumber;
	Lab.Computers = Computers;
	Lab.Software = Software;
	Lab.Hardware = Hardware;
	Lab.DimensionX = X;
	Lab.DimensionY = Y;
	return Lab;
}}