function Player() {
    
    this.x = width / 2 - 24;
    this.y = width / 2 - 24;
    this.w = 24;
    this.h = 24;
    this.vel = 5;

    this.show = function() {
        rect(this.x, this.y, this.w, this.h);
    
    }
}