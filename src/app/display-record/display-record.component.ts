import { HttpClient } from '@angular/common/http';
//import { Route } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../shared/post.service';
import { User } from '../shared/user.model';


@Component({
  selector: 'app-display-record',
  templateUrl: './display-record.component.html',
  styleUrls: ['./display-record.component.css']
})
export class DisplayRecordComponent implements OnInit {
  userdata:User[]=[];
  currentPage:number=1;
  public isDeleted:boolean=false;
  public deletedMsg: string;
  constructor(private http:HttpClient, private sharedservice:PostService,private router: Router) { }

  ngOnInit() {
    this.onFetchPosts(this.currentPage);
  }
 
  public onFetchPosts(id:number) {
    this.sharedservice.getData(id).subscribe(
      responseData=>{
        this.userdata=responseData;
        //this.totalPages=responseData['total_pages'];
      }
    );
  }
  public ondelete(id:number)
  {
    alert("Are you sure to delete the data with ID "+ (this.userdata[id].id) + "?" );
    this.sharedservice.ondeletepost(id).subscribe(respnseData=>
      {
       // this.userdata.splice(id,);
        //this.userdata = this. userdata.filter(item => item.id !== id);//this actually remove from front page but problem in id
        //this.userdata.push();
        console.log("Your Request is Sent");
        console.log(respnseData);
        console.log("You have successfully deleted "+this.userdata[id].firstname);
      });
    //this.onFetchPosts(this.currentPage);
    this.isDeleted=true;
  }
  public onEdit(id:number)
  {
    this.router.navigateByUrl(`/recordList/${id}`);
  }

}
