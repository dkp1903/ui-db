let message:string = "Welcome to the life";
//Union
let val:(number|string)= "one";

let arr=[13,7,20,["hey"]];
//generics
let arr1:Array<number>=[13,7,20];

class Person1{
    city;
    Constructor(ncity){
        this.city=ncity;
    }
}
class Person{
    constructor(public city:string){
    }
}
interface Ihero{
    firstname;
    lastname;
    fullname():String;
}
class Hero extends Person implements Ihero{
    constructor(public firstname:string,public lastname:string, public ncity:string){
        super(ncity);
    }
    fullname():string{
        return this.firstname+" "+this.lastname;
    }
}

alert(message);
let hero = new Hero("Tony", "Stark","New York");
onload=function():void{
    document.body.innerHTML+="<h1>"+arr1.reduce((intval,val)=>intval+val,0)+"</h1>"
    document.body.innerHTML+="<h1>"+new Person("dgp").city+"</h1>";
    document.body.innerHTML+="<h1>"+new Hero("y","c","city").firstname+new Hero("y","c","city").lastname+new Hero("y","c","city").city+"</h1>";
    document.body.innerHTML+="<h1>Hero's City : "+hero.fullname()+"</h1>";

}