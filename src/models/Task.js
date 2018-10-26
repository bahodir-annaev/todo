import {constants} from "../constants";

export function Task({description = "", priority = constants.PRIORITY_NORMAL, complete = false} = {}){
    this.description = description;
    this.priority = priority;
    this.complete = complete;
}