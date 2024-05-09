function saveTask()
{
    console.log("saving tasks");
    //get values
    const title = $("#inputTitle").val();
    const desc = $("#inputDescription").val();
    const color = $("#inputColor").val();
    const date = $("#inputDate").val();
    const status = $("#inputStatus").val();
    const budget = $("#inputBudget").val();    
    console.log(title, desc, color, date, status, budget);
    //build an object
    let taskToSave = new Task (title, desc, color, date, status,budget);
    //displayTask(taskToSave);
   
    //save to the sever

        $.ajax({
            type: "POST",
            url:"http://fsdiapi.azurewebsites.net/api/tasks/",
            data: JSON.stringify(taskToSave),
            contentType: "application/json",
            success: function(response){
                console.log(response);
                // displayTask(response);
                // displayTask(res);
            },
            error: function(error){
                console.log(error);
            }
        });

       //display the task
    
}

function displayTask(task)
    {
        let syntax = `<div class="task" style="border-color:${task.color}">
        <div class="info">
        <h3>${task.title}</h3>
        <p>${task.description}</p>
        </div>
        <label class="status">${task.status}</label>
        <div class="date-budget">
            <label>${task.date}</label>
            <label>${task.budget}<label>
        </div>
        </div>
        `;
        $(".pending-task").append(syntax);
    }

function loadTask(){
    $.ajax({
        type: "GET",
        url: "http://fsdiapi.azurewebsites.net/api/tasks",
        success: function(res)
        {
            let data = JSON.parse(res);
            console.log(data);
            for(let i=0; i<data.length; i++) {
                let task = data[i];
                if(task.name == "ch47")
                {                
                displayTask(task)
                }
            }
            displayTask(data);
            console.log(res);
        },
        error: function(error)
        {
            console.log(error)
        }

    });
}

function testResquest()
{
    $.ajax({
        type: "GET",
        url:"http://fsdiapi.azurewebsites.net",
        success: function(response) {
            console.log(response);
        },
        error: function(error) {
            console.log(error);
        }
    });
}

function init() {
    //load data  
    //retrive data
    //hook events
    $("#btnSave").click(saveTask);//this is usign jQuery
    loadTask();
    
    
}

window.onload = init;
