$(document).ready(function() {
    $('#loginForm').on('submit', function(event) {
        event.preventDefault();
        
        let username = $('#username').val();
        let password = $('#password').val();
        
        $.ajax({
            url: api_url + '/login', // Adjust this URL to your backend endpoint
            type: 'POST',
            contentType: 'application/json', // Specify the content type
            data: JSON.stringify({
                username: username,
                password: password
            }),
            success: function(response) {
                if (response.success) {
                    $('#message').text('Login successful!').css('color', 'green');
                   location.assign('/');
                } else {
                    $('#message').text('Invalid username or password.');
                }
            },
            error: function() {
                $('#message').text('An error occurred. Please try again.');
            }
        });
    });
});
