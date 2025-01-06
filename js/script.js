    // Wait for the DOM to fully load
    document.addEventListener('DOMContentLoaded', function() {
        // Set a timeout to display the message after 10 seconds
        setTimeout(function() {
            // Get the modal
            var modal = document.getElementById('message');
            // Display the modal
            modal.style.display = 'block';
        }, 3600000); // 3,600,000 milliseconds = 1 hour

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName('close')[0];

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            var modal = document.getElementById('message');
            modal.style.display = 'none';
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            var modal = document.getElementById('message');
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        }
    });
