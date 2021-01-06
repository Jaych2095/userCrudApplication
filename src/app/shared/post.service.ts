import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {map} from "rxjs/operators";
import { User } from "./user.model";

@Injectable()

export class PostService{
    public data:User[]=[];
    public totalPage:number;
    constructor(private http:HttpClient)
    {

    }
    public getData(id:number)
    {
        return this.http.get("https://reqres.in/api/users?page="+id).pipe
        (map(responseData=>
            {
                this.data=[];
               
            for(let i=0;i<responseData['data'].length;i++)
            {
              this.data.push(
                {
                    id:responseData['data'][i]['id'],
                  firstname:responseData['data'][i]['first_name'],
                  lastname:responseData['data'][i]['last_name'],
                  email:responseData['data'][i]['email'],
                  avatar:responseData['data'][i]['avatar'],
                }
              )
            }
            return this.data;
            }));
    }
    public ondeletepost(id:number)
    {
      return this.http.delete("https://reqres.in/api/users?page="+id);
    }
    public onupdate(userdata:User)
    {
      return this.http.put('https://reqres.in/api/users/' + userdata.id, '{ "first_name": userdata.firstName, "last_name": userdata.lastName }')
    }

    public onaddnew(userdata:User)
    {
      return this.http.post('https://reqres.in/api/users', '{ "first_name": userdata.firstName, "last_name": userdata.lastName }')
    }
}