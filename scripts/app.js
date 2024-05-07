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
    console.log(taskToSave);
    displayTask(taskToSave);
        //save to the sever
       //display the task
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
    
    
}

window.onload = init;
