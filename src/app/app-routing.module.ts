import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent }      from './history/history.component';
import { SkillComponent } from './skill/skill.component';

const routes: Routes = [
  { path: 'history', component: HistoryComponent },
  { path: 'skill', component: SkillComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
