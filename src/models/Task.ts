import {Constants} from "../constants";

export class Task{
    constructor(public description:string = "", public priority = Constants.PRIORITY_NORMAL, public complete:boolean = false){
    }
}