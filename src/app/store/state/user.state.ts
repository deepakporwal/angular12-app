import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { UsersModel } from "src/app/model/users.model";
import { UsersService } from "src/app/services/users.service";
import { GetUsers, SetSelectedUser } from "../actions/users.action";
import { tap } from 'rxjs/operators';


//State Model
export class UsersStateModel
{
    users : UsersModel[];
    usersLoaded : boolean;
    singleuser: UsersModel;
}

@State<UsersStateModel>({
    name : 'userslist',
    defaults : {
        users : [],
        usersLoaded: false,
        singleuser : null
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

    // get selected user from the state
    @Selector()
    static singleUser(state : UsersStateModel)
    {
        return state.singleuser;
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

    @Action(SetSelectedUser)
    setSelectedUser({getState,setState} : StateContext<UsersStateModel>,{id}: SetSelectedUser)
    {
       const state = getState();
       const userList = state.users;
       const index = userList.findIndex(usr=> usr.id == id);
       setState({
        ...state,singleuser : userList[index],
       })
       //console.log('userslist : ' ,userList[index]);
    }
}