$.ajax({
    type: 'POST',
    url: 'https://fewd-todolist-api.onrender.com/tasks?api_key=199',
    contentType: 'application/json',
    dataType: 'json',
    data: JSON.stringify({
        task: {
            content: 'Do Something Crazy'
        }
    }),
    success: function (response, textStatus) {
        console.log(response);
    },
    error: function (request, textStatus, errorMessage) {
        console.log(errorMessage);
    }
});
     