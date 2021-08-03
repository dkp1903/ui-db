import {Person} from "./Person.js"
export class Hero extends Person{
    _mission = "secret mission";
    constructor(rtitle, rfname, rlname, pcity){
        super(pcity);
        this.title = rtitle;
        this.firstname = rfname;
        this.lastname = rlname;
    }
    static getVersion(){
        return 10001;
    }
    get mission(){
        return this._mission;
    }
    set mission(nmission){
        this._mission = nmission;
    }
    fullname(){
        return this.firstname+" "+this.lastname;
    }
}.