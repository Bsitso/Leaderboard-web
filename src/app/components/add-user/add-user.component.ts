import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(private userService: UserService) { }
  username = ""
  ngOnInit(): void {
  }

  addUser(){
    if(this.username != ""){
      this.userService.addUser(this.username).subscribe((data) => {
        console.log("User added: ", data);
      })
//     }else{
// Username);
      
    }
  }
  
}