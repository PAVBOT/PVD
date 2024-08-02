document.addEventListener('DOMContentLoaded', function() {
    const getStoryButton = document.getElementById('get-story-btn');
    const storyMessage = document.getElementById('story-message');
    let credits = 0;

    getStoryButton.addEventListener('click', function() {
        if (credits > 0) {
            credits--;
            updateCreditsDisplay();
            // Simulate story download
            simulateStoryDownload();
        } else {
            storyMessage.textContent = "You need at least 1 credit to get a story.";
        }
    });

    function simulateStoryDownload() {
        // Simulate story download action
        storyMessage.textContent = "Your story is downloading...";
        setTimeout(function() {
            storyMessage.innerHTML =<a href="file:///D:/PAV%20games/STORY/STORYs/the%20fire/shree%20by%20pawan.PDF">Download Shree by Pawan PDF</a>;
        }, 2000); // Simulate 2 seconds delay for download
    }

    function updateCreditsDisplay() {
        const creditsSection = document.getElementById('credits');
        creditsSection.innerHTML = `<h2>Credits</h2><p>You have ${credits} credit(s).</p>`;
    }
});
