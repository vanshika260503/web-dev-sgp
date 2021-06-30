class Colour {
    constructor(r,g,b) {
      if(r<256)
    this.r=r;
      if(g<256)
    this.g=g;
      if(b<256)
    this.b=b;
    }
  rgb()
  {
    let str;
    str ="rgb("+ this.r + "," + this.g + ","+ this.b+")";
    return str
  }  
    hex(){
     var r,g,b;
     r=(this.r)
    g = (this.g)
    b = (this.b)
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
    
  }
  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  purple =new Colour(101, 31, 255);
  turquoise = new Colour(64,224,208);
  purple.rgb();
