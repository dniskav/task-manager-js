// Global object

var TASKMANAGER = TASKMANAGER || {};

TASKMANAGER = {
    ids: 0,
    container: null,
    /**
     *
     */
    init: function(jsonData) {
        TASKMANAGER.container = jsonData.container;
    },
    render: {
        /**
     *
     */
        user: function(user) {
        
            TASKMANAGER.container.appendChild(TASKMANAGER.templates.user(user));

        },
        taskComboBox : function(){
            
        },
        taskBlock : function(user){
            
            userPipe = document.getElementById('user-' + user.id);
            userPipe.appendChild(TASKMANAGER.templates.taskBlock(user));
            //TASKMANAGER.container.
        },
        modalBox : function (options){
            
        }
    },
    templates : {
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
            tmpl.className = 'task-block btn btn-warning';
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
    },
    task: {
        tStatuses : [
            'created',
            'assigned,',
            'in-progress',
            'done',
            'canceled'
        ],
        /**
         * Define Task properties
         * @type {object}
         */
               tasksData : [     
                    { tId:0,tName: 'task_0', tDesc: 'lorem ipsum', tSate: 0, tUser: null},
                    { tId:1,tName: 'task_1', tDesc: 'lorem ipsum', tSate: 0, tUser: null},
                    { tId:2,tName: 'task_2', tDesc: 'lorem ipsum', tSate: 0, tUser: null},
                    { tId:3,tName: 'task_3', tDesc: 'lorem ipsum', tSate: 0, tUser: null},
                    { tId:4,tName: 'task_4', tDesc: 'lorem ipsum', tSate: 0, tUser: null},
                    { tId:5,tName: 'task_5', tDesc: 'lorem ipsum', tSate: 0, tUser: null},
                    { tId:6,tName: 'task_6', tDesc: 'lorem ipsum', tSate: 0, tUser: null},
                    { tId:7,tName: 'task_7', tDesc: 'lorem ipsum', tSate: 0, tUser: null}
               ],
        //get & sets
         /**
         * Gets task object
         * @param {integer} id
         * @return {object} task
         */
       getTaskObject : function(id){
            task = this.tasksData[id];
            return task;
           },
        //other methodos
        
        /**
         *edit task to change state, description
         *@param {object} task
         *@return boolean
         */
        edit : function(task){
            console.info(task);
            
            modalWindow = document.getElementById('myModal');
            modalWindowTitle = document.getElementById('myModalLabel');
            modalWindowBody = document.getElementById('myModalBody');
            modalWindowId = document.getElementById('myModalId');
            
            tId = task.id.split('-')[1];
            taskData = this.getTaskObject(tId);
            
            modalWindowTitle.innerHTML = taskData.tName;
            modalWindowBody.innerHTML = taskData.tDesc;
            modalWindowId.value = tId; 
            
            $('#myModal').modal();
            return true;
        },
        /**
         *set the status of a task
         *@param {status} integer
         *@return {setStatus} object
         */
        setStatus : function(status){
            
            
            return setStatus;
        }


    },
    user:{
        tUsers: [],
        activeUser : 0,
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
                TASKMANAGER.ids++;
                
            }else{
                task = TASKMANAGER.task.getTaskObject(idTask);
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
                TASKMANAGER.render.user(usr_data);
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
            curTask = TASKMANAGER.task.getTaskObject(taskId);
            user = this.getUser(this.activeUser);
            user['tasks'].push(curTask);
            
            TASKMANAGER.render.taskBlock(user);
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
};


