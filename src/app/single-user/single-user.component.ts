import { Component, OnInit } from '@angular/core';
import { Select,  Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { UsersModel } from '../model/users.model';
import { AddUsers, DeleteUser, SetSelectedUser } from '../store/actions/users.action';
import { UsersState } from '../store/state/user.state';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {

  userid : number;
  usrjsondata : string;
  objUser : UsersModel;

  @Select(UsersState.singleUser) selectedUser$ : Observable<UsersModel>;

  constructor(private store : Store) { }

  ngOnInit() {
  }

  dispatchAction(id)
  {
    this.store.dispatch(new SetSelectedUser(id));
    this.selectedUser$.subscribe(res=>{
      console.log(res);
      this.usrjsondata = JSON.stringify(res);
    })
  }

  addusertoStore()
  {
      this.objUser = {id :1001,
      userId : 101,
      title:"test user",
      body : "this is a test record added to store."};
    
    this.store.dispatch(new AddUsers(this.objUser))
  }

  deleteuserfromStore(id : number)
  {
    this.store.dispatch(new DeleteUser(id));
  }
}
