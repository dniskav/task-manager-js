/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

user = {
    tUsers: [],
    activeUser : 0,
    mainObj : this,
    /**
         *set user active to manipulate
         *@param {integer} userId
         *@return {bolean}
         */
    setActive : function(userId){
        for(id in this.tUsers){
            evId = "user-" + id;
            curId = document.getElementById(evId);
            curId.className = curId.className.replace( /(?:^|\s)active label-important(?!\S)/g , '' );                
        }
            
        document.getElementById(userId).className += ' active label-important';
        userId = userId.split('-')[1];
            
        this.activeUser = userId;
        console.info(this.activeUser);
    },
    /**
         * add user to scope
         * @param {integer} user
         * @return {integer} id user
         */
    setUser : function(user, idTask){
        if(typeof idTask == 'undefined'){
            current_id = TASKMANAGER.ids;
            objUser = {
                id: current_id,
                name: user,
                tasks : []
            };
            this.tUsers[current_id] = objUser;
            this.ids++;
                
        }else{
            task = this.task.getTaskObject(idTask);
            this.tUsers[idUsr].tasks.push(task);
        }
         
        if (typeof this.tUsers[current_id] != 'undefined') {

            return current_id;
        } else {
            return false;
        }
    },
    /**
         *get user from users array
         *@param {integer} id
         *@return {object} user
         **/
    getUser : function(id){
        return this.tUsers[id];
    },
    /**
         * add user to a enviroment
         * @param {integer} user
         * @return {bolean}
         */
    add : function(user){
            
        id_User = this.setUser(user);

        usr_data = this.getUser(id_User);
            
        if(typeof usr_data != 'undefined'){
            parent.render.user(usr_data);
        }

        console.info(usr_data);

        return true;

    },
    /**
         *  add a task to user
         *  @param {taskId} int 
         *  @return boolean
         */
    addTask : function(taskId){
        curTask = parent.task.getTaskObject(taskId);
        user = this.getUser(this.activeUser);
        user['tasks'].push(curTask);
            
        parent.render.taskBlock(user);
        console.info(user);
    },
    /**
         * edit user in a task
         * @return boolean
         */
    edit: function() {

        console.info("edit user: " + user);

        return true
    }

}

