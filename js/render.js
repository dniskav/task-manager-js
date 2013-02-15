/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var render = {
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
}

