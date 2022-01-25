import { Component, OnInit } from '@angular/core';
import { LeaderBoardModel } from 'src/app/models/leaderboard.model';
import { LeaderboardService } from 'src/app/services/leaderboard.service';

@Component({
  selector: 'app-honor',
  templateUrl: './honor.component.html',
  styleUrls: ['./honor.component.scss']
})
export class HonorComponent implements OnInit {

  honourData: Array<LeaderBoardModel> = []

  constructor(private leaderboardService: LeaderboardService) { }

  ngOnInit(): void {
    this.getHonour()
  }

  getHonour(){
    this.leaderboardService.getHonour().subscribe((data) => {
      this.honourData = data
      console.log(this.honourData);
      
    });
  }

}
