import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersModel } from '../model/users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

constructor(private httpClient: HttpClient) { }

configurl : string = 'https://jsonplaceholder.typicode.com/posts';

getPosts() : Observable<any>
{
  return this.httpClient.get<any>(this.configurl);
}

getPostById(id : number) : Observable<UsersModel>
{
  var geturl =`https://jsonplaceholder.typicode.com/posts/` + id;
  return this.httpClient.get<any>(geturl);
}

}
