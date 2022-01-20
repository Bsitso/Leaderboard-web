import { Component, OnInit } from '@angular/core';
import { LeaderboardService } from 'src/app/services/leaderboard.service';

@Component({
  selector: 'app-honor',
  templateUrl: './honor.component.html',
  styleUrls: ['./honor.component.scss']
})
export class HonorComponent implements OnInit {
  honourData: Array<any> = []
  constructor(private leaderboardService: LeaderboardService) { }

  ngOnInit(): void {
    this.getLeaderboard()
  }

  getLeaderboard(){
    this.leaderboardService.getHonour().subscribe((data) => {
      this.honourData = data
      console.log(this.honourData);
      
    });
  }

}
