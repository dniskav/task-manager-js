/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
    task = {
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
         *@param {task} integer
         *@return {setStatus} object
         */
        setStatus : function(task){
            
            
            
            return setStatus;
        }


    }


