import { Component, OnInit } from '@angular/core';
import { LeaderBoardModel } from 'src/app/models/leaderboard.model';
import { LeaderboardService } from 'src/app/services/leaderboard.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {
  
  allData: Array<LeaderBoardModel> = []
  showUsernameInput:boolean = false
  username:string = ''
  Toastr = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true
  })

  constructor(private leaderboardService: LeaderboardService, private userService: UserService) { }

  ngOnInit(): void {
    this.getLeaderboard()
  }

  getLeaderboard(){
    this.leaderboardService.getAllLeaderBoard().subscribe((data) => {
      this.allData = data
    });
  }

  toggleUsernameInput(){
  this.showUsernameInput = !this.showUsernameInput
  
    if(this.showUsernameInput){
      $('#add-user-btn').html('&times;').attr('title', 'Cancel')
      $('#username-input').fadeToggle('slow').focus()
      $('#save-user-btn').fadeToggle('slow')
    }else{
      $('#add-user-btn').html('<i class="fas fa-user-plus"></i>').attr('title', 'Add user')
      $('#username-input').fadeToggle('slow')
      $('#save-user-btn').fadeToggle('slow')
    }
  }
  
  addUser(){
    if(this.username.length < 1){
      this.Toastr.fire({
        icon: 'error',
        title: 'Error',
        text: 'Username is required'
      })
      return false
    }
    var response:any = {
      icon: 'success',
      title: `Success: `,
      text: `Inserted user `
    }
    this.userService.addUser(this.username).subscribe(() => {
      
    }), (error: any) => {
      response = {
        icon: 'error',
        title: `Error: `,
        text: `${error}`
      }
    }
    this.Toastr.fire(response)
    this.getLeaderboard()
    return true
  }
}
