import { Component, OnDestroy, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { UsersModel } from '../model/users.model';
import { UsersService } from '../services/users.service';
import { AddAnimal, GetUsers } from '../store/actions/users.action';
import { UsersState } from '../store/state/user.state';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit , OnDestroy {

  userLoadedSub! : Subscription

  @Select(UsersState.usersLoaded) isUserLoaded$! : Observable<boolean>;
  @Select(UsersState.getUsersList) usersCollection$! : Observable<UsersModel[]>

  constructor(private store : Store,private objService : UsersService) { }
  ngOnDestroy(): void {
    // unsubscribe the subscription
    this.userLoadedSub.unsubscribe();
  }

  ngOnInit() {
    this.loadUsers();
    //this.addAnimal('cow');
  }

  loadUsers()
  {
    this.userLoadedSub =  this.isUserLoaded$.subscribe(res=>{
      // if res = true then
      if(!res)
      {
        // the way to dispatch
        this.store.dispatch(new GetUsers());
      }
    })
    
    // this.objService.getPosts().subscribe(res =>{
    //   console.log(res);
    // })
    this.usersCollection$.subscribe(res=>{
      console.log(res);
    })
  }

  // added for test
  addAnimal(name: string) {
    this.store.dispatch(new AddAnimal(name));
  }

}
