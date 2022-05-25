function setup() {
        createCanvas(640, 480);
        // Create the video
        video = createCapture(VIDEO);
        video.size(640, 480);
        video.hide();

        flippedVideo = ml5.flipImage(video);
        // Start classifying
        classifyVideo();
    }

    function draw() {
        background(0);
        // Draw the video
        image(flippedVideo, 0, 0);

        // Draw the label
        fill(255);
        textSize(16);
        textAlign(CENTER);
        text(label, width / 2, height - 4);
    }
