module.exports = { makeComputer:function(ComputerId, Status,X,Y){
	var Computer ={};
	Computer.id = ComputerId;
	Computer.status = Status;
	Computer.positionX = X;
	Computer.positionY = Y;
	return Computer;
}}