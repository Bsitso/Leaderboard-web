import { Component, OnInit } from '@angular/core';
import { LeaderboardService } from 'src/app/services/leaderboard.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {

  allData: Array<any> = []
  constructor(private leaderboardService: LeaderboardService) { }

  ngOnInit(): void {
    this.getLeaderboard()
  }

  getLeaderboard(){
    this.leaderboardService.getAllLeaderBoard().subscribe((data) => {
      this.allData = data
    });
  }

  orderData(){
    this.allData.sort(
      function(a, b) {          
         if (a.honour === b.honour) {
          return a.overall_rank > b.overall_rank ? 1 : -1;
         }
         return a.honour < b.honour ? 1 : -1;
      });
      console.log("sortedData: ", this.allData);
      
  }
}
