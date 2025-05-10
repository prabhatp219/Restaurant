document.getElementById('rate-us-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get the rating value
    const rating = document.querySelector('input[name="rating"]:checked');
    
    // Get the feedback text
    const feedback = document.getElementById('feedback').value;

    // Validate the input
    if (!rating) {
        alert('Please select a rating.');
        return;
    }

    if (!feedback.trim()) {
        alert('Please provide your feedback.');
        return;
    }

    // Process the rating (this could be saved to a database or sent to a server)
    alert(`Thank you for your feedback!\nRating: ${rating.value} stars\nFeedback: ${feedback}`);
    
    // Reset the form after submission
    document.getElementById('rate-us-form').reset();
});
