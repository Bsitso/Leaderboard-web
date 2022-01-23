import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { HonorComponent } from './components/honor/honor.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { OverallRankComponent } from './components/overall-rank/overall-rank.component';

const routes: Routes = [
  // {path:'', redirectTo:'board',pathMatch:'full'},
  {
    path:'',
    component: LayoutComponent,
    children: [
      {path:'', component: LeaderboardComponent},
      {path:'honor', component: HonorComponent},
      {path:'rank', component: OverallRankComponent},
      {path:'user', component: AddUserComponent},
    ]
  },
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }