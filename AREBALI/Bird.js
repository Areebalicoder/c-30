class Bird extends BaseClass {
      constructor(x,y){
        super(x,y,50,50);
        this.location = [];
      }
    
      display() {
        //this.body.position.x = mouseX;
        //this.body.position.y = mouseY;
    
        super.display();
        if(this.body.velocity.x>10 && this.body.position.x>200){
        var position=[this.body.position.x, this.body.position.y];
        this.location.push(position);
        }
        for(var i=0 ; i<this.location.length; i++){
          image(this.smoke, this.location[i][0], this.location[i][1]);
        }
      }
    }