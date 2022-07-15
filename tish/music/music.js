let my_sound = document.getElementById("my-sound");
let icon = document.getElementById("icon");

// Creating a function that will change
// pause to play and vice-versa
icon.onclick = function () {
    if (my_sound.paused) {

        // If paused then play the
        // music and change the image
        my_sound.play();
        icon.src =
            "https://media.geeksforgeeks.org/wp-content/uploads/20210402235545/Pause.png";
    } else {

        // If playing then pause the
        // music and change the image
        my_sound.pause();
        icon.src =
            "https://media.geeksforgeeks.org/wp-content/uploads/20210402235520/play.png";
    }
}