class Block extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.visiblity = 255;
  }
  display(){
    console.log(this.body.speed)
      if (this.body.speed<3){
        super.display()
      }else{
        World.remove(world, this.body);
        push()
        tint(255,this.visiblity)
        this.visiblity-=5
       rect(this.body.position.x,this.body.position.y,50,50)
       pop()
      }
      }
    
}