
class Parallelogram{
    constructor(){
        this.a=document.createElement("input");
        this.a.type="text";
        this.a.placeholder="a";

        this.b=document.createElement("input");
        this.b.type="text";
        this.b.placeholder="b";

        this.h=document.createElement("input");
        this.h.type="text";
        this.h.placeholder="h";

        this.rb1=document.createElement("input");
        this.rb1.type="radio";
        this.rb1.name="rb";
        this.rb2=document.createElement("input");
        this.rb2.type="radio";
        this.rb2.name="rb";

        this.div_res=document.createElement("div");
    }
    calc(){
        let cont=document.getElementById("container");
        cont.appendChild(this.a);
        cont.appendChild(this.b);
        cont.appendChild(this.h);
        cont.appendChild(this.rb1);
        cont.appendChild(this.rb2);
        cont.appendChild(this.div_res);

        this.rb1.onclick=()=>{
            let a=parseInt(this.a.value);
            let b=parseInt(this.b.value);
            let h=parseInt(this.h.value);
            if(isNaN(a)||isNaN(b)||isNaN(h)){
                this.div_res.innerHTML="Error";}
            else 
                {this.div_res.innerHTML='Square = '+(2*(a*h+a*b+b*h));}
        }
        this.rb2.onclick=()=>{
            let a=parseInt(this.a.value);
            let b=parseInt(this.b.value);
            let h=parseInt(this.h.value);
            if(isNaN(a)||isNaN(b)||isNaN(h)){
                this.div_res.innerHTML="Error";}
            else 
                {this.div_res.innerHTML='Value = '+(a*b*h);}
        }
    }
}
let x=new Parallelogram();
x.calc();
