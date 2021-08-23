import { UsersModel } from "src/app/model/users.model";

export class GetUsers {
    static readonly type = '[Users] GetUsers';
}

export class AddUsers
{
    static readonly type = '[Users] AddUser';
    constructor(public payload : UsersModel)
    {

    }
    
}

export class AddAnimal {
    static readonly type = '[Zoo] Add Animal';
    constructor(public name: string) {}
  }
