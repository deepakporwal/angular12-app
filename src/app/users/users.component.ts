import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private objService : UsersService) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers()
  {
    this.objService.getPosts().subscribe(res =>{
      console.log(res);
    })
  }

}
