import { AppComponent } from './app.component';
import { CauseEditComponent } from './cause-edit/cause-edit.component';
import { CauseListComponent } from './cause-list/cause-list.component';
import { CauseNewComponent } from './cause-new/cause-new.component';
import { CauseDetailComponent } from './cause-detail/cause-detail.component';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    component: CauseListComponent
  },
  {
    path: 'causes',
    component: CauseListComponent
  },
  {
    path: 'causes/new',
    component: CauseNewComponent
  },
  {
    path: 'causes/:id',
    component: CauseDetailComponent
  },
  {
    path: 'causes/:id/edit',
    component: CauseDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
