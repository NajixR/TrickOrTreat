function Bucket() {


    this.x = random(width - 64);
    this.y = random(height - 64);
    this.w = 46;
    this.h = 36;
    this.image = loadImage("img/bucket.jpg");

    this.show = function() {
        image(this.image, this.x, this.y);
    }

    
}