/**
* model for task manager
* 
*/

var baseModel = function(currentObject, currentQuery, currentIndex){
	this.currentObject = currentObject;
	this.currentQuery = currentQuery;
	this.currentIndex = currentIndex;

}

baseModel.prototype.add = function(){
	console.log(this.currentObject, this.currentQuery, this.currentIndex);
}

baseModel.prototype.del = function(){
	console.log(this.currentObject, this.currentQuery, this.currentIndex);
}

baseModel.prototype.edit = function(){
	console.log(this.currentObject, this.currentQuery, this.currentIndex);
}

baseModel.prototype.read = function(){
	console.log(this.currentObject, this.currentQuery, this.currentIndex);
}
