import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LeaderBoardModel } from '../models/leaderboard.model';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {
  getOverAlltRanks() {
    throw new Error('Method not implemented.');
  }
  
  private readonly ALL_LEADERBOARD_API_URL = `${environment.API_URL}/all`;
  private readonly HONOUR_API_URL = `${environment.API_URL}/honor`;
  private readonly OVER_ALL_RANKS_API_URL = `${environment.API_URL}/overall-rank`;

  constructor(private httpClient:HttpClient) { }

  public getAllLeaderBoard(): Observable<Array<LeaderBoardModel>> {
    return this.httpClient.get<Array<LeaderBoardModel>>(`${this.ALL_LEADERBOARD_API_URL}`);
  }

  public getHonour(): Observable<Array<LeaderBoardModel>> {
    return this.httpClient.get<Array<LeaderBoardModel>>(`${this.HONOUR_API_URL}`);
  }

  public getOverAllRanks(): Observable<Array<LeaderBoardModel>> {
    return this.httpClient.get<Array<LeaderBoardModel>>(`${this.OVER_ALL_RANKS_API_URL}`);
  }
}
