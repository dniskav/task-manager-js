// Global object

/*+
 *
 */
var TM = function(jsonData){
    this.ids = 0;
    this.container = null;

    this.container = jsonData.container;
};

TM.prototype.render = render;

TM.prototype.templates = templates;

TM.prototype.task = task;

TM.prototype.user = user;


