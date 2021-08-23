import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { UsersModel } from "src/app/model/users.model";
import { UsersService } from "src/app/services/users.service";
import { GetUsers } from "../actions/users.action";
import { tap } from 'rxjs/operators';


//State Model
export class UsersStateModel
{
    users!: UsersModel[];
    usersLoaded! : boolean
}

@State<UsersStateModel>({
    name : 'userslist',
    defaults : {
        users : [],
        usersLoaded: false
    }
})

@Injectable()
export class UsersState {
    
    constructor(private objServive : UsersService){}

    // selector has logic to get the data
    // get employee data from state
    @Selector()
    static getUsersList(state : UsersStateModel) {
        return state.users;
    }

    // declare selector to return the users loaded flag
    @Selector()
    static usersLoaded(state : UsersStateModel)
    {
        return state.usersLoaded;
    }

    @Action(GetUsers)
    getUsers({getState,setState} : StateContext<UsersStateModel>)
    {
        //console.log('State Action');
        return this.objServive.getPosts().pipe(tap(res=>{
           //console.log('tap res', res);
            const state = getState();
            // merge state and response data using spread operator
            setState({
                ...state,users : res,
                usersLoaded : true
            })
            //console.log(state);
        }))
    }
}