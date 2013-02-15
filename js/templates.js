/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var  templates = {
    /**
         *build a pipe for a user
         *@param {object} user
         *@return {object} html
         */
    user : function(user){
        usrData = user;
            
        active = (TASKMANAGER.user.tUsers.length <= 1)? 'active label-important': "";
        tmpl = document.createElement('div');
        tmpl.id = 'user-' + usrData.id;
        tmpl.className = 'user-pipe label ' + active;
        tmpl.appendChild(
            document.createTextNode(usrData.name)
            );
        tmpl.onclick = function(e){
            TASKMANAGER.user.setActive(this.id);
        }
            
        return tmpl;
    },
    /**
         *build a options in for tasks in comboBox
         *@param {object} taskData
         *@return {object} html
         */
    taskComboBox : function(tasksData){
            
    },
    /**
         *build a box for tasks in user pipe
         *@param {object} taskData
         *@return {object} html
         */
    taskBlock : function (user){
        curTask = user.tasks[user.tasks.length -1];
             
        tmpl = document.createElement('div');
        tmpl.id = 'tName-' + curTask.tId;
        tmpl.className = 'task-block btn btn-info';
        tmpl.appendChild(
            document.createTextNode(curTask.tName)
            );
        tmpl.onclick = function(e){
            //call option
            option = "";
            //buils json
            task = {
                id: this.id,
                opt : option
            }
            TASKMANAGER.task.edit(task);
        }
            
        return tmpl;
             
    }
}

