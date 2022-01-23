import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {
  
  private readonly ALL_LEADERBOARD_API_URL = `${environment.API_URL}/all`;
  private readonly HONOUR_API_URL = `${environment.API_URL}/honor`;
  private readonly RANKS_API_URL = `${environment.API_URL}/overall-rank`;

  constructor(private httpClient:HttpClient) { }

  public getAllLeaderBoard(): Observable<any> {
    return this.httpClient.get<any>(`${this.ALL_LEADERBOARD_API_URL}`);
  }

  public getHonour(): Observable<any> {
    return this.httpClient.get<any>(`${this.HONOUR_API_URL}`);
  }

  public getRanks(): Observable<any> {
    return this.httpClient.get<any>(`${this.RANKS_API_URL}`);
  }
}
