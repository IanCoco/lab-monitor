module.exports = { makeComputer:function(ComputerId, Status,X,Y){
	var Computer ={};
	Computer.ComputerId = ComputerId;
	Computer.Status = Status;
	Computer.PositionX = X;
	Computer.PositionY = Y;
	return Computer;
}}