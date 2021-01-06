import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../shared/post.service';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})
export class AddRecordComponent implements OnInit {
  public userdata:User;
  public pageHeading:string="Add User";
  public isUpdated:boolean=false;
  public isAddNew:boolean=false;
  constructor(private route:ActivatedRoute, private postService:PostService) {
    this.userdata;
   }

  ngOnInit(): void {
    if(this.route.snapshot.params.id!=="new")
    {
      this.userdata=this.postService.data[this.route.snapshot.params.id];
      this.pageHeading="Edit User";
    }
    else{
      this.userdata={
        firstname:"",
        lastname:"",
        email:"",
        avatar:"",
        id:null
      };
    }
  }
  public onSubmit()
  {
    if(this.userdata.firstname.includes(" ") || this.userdata.lastname.includes(" "))
    {
      alert("Please Remove Space from the field");
    }
    
    else{
      if(this.route.snapshot.params.id !== "new")
      {
        this.postService.onupdate(this.userdata).subscribe(responseData=>{
          console.log("Please wait to get Respnse From Server");
          console.log(responseData);
          this.isUpdated=true;
        }
        )
        
      }
      else{
        this.postService.onaddnew(this.userdata).subscribe(
          responseData=>{
            console.log("Please wait to get Respnse From Server");
            console.log(responseData);
            this.isAddNew=true;
          }
        )
       
      }
    }
  }
  



}
