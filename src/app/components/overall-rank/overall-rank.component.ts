import { Component, OnInit } from '@angular/core';
import { LeaderboardService } from 'src/app/services/leaderboard.service';

@Component({
  selector: 'app-overall-rank',
  templateUrl: './overall-rank.component.html',
  styleUrls: ['./overall-rank.component.scss']
})
export class OverallRankComponent implements OnInit {

  rankData: Array<any> = []
  constructor(private leaderboardService: LeaderboardService) { }

  ngOnInit(): void {
    this.getRanks()
  }

  getRanks(){
    this.leaderboardService.getRanks().subscribe((data) => {
      this.rankData = data
      console.log("Ranks: ", this.rankData)
    });
  }

}
