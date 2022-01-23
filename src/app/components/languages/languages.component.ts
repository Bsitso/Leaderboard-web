import { Component, OnInit } from '@angular/core';
import { LeaderBoardModel } from 'src/app/models/leaderboard.model';
import { LeaderboardService } from 'src/app/services/leaderboard.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {

  languagesData: Array<LeaderBoardModel> = []
  language: string = ''
  showTable: boolean = false
  Toastr = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true
  })

  constructor(private leaderboardService: LeaderboardService) { }

  ngOnInit(): void {
  }

  getLanguages(){
    if(this.language){
      this.Toastr.fire({
        icon: 'error',
        title: 'Error',
        text: 'Language is required'
      })
      return false
    }
    
    this.leaderboardService.getLanguages(this.language).subscribe((data) => {
      if(data.length < 1){
        this.showTable = false
        this.Toastr.fire({
          icon: 'error',
          title: 'Error',
          text: `No data available for '${this.language}'`
        })
      }else{
        this.languagesData = data
        this.showTable = true
      }
      console.log("LanguageData", this.languagesData);
    })
    return true
  }

}
