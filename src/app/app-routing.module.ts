import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileType, MfeUtil } from '@ddggroup/angular-lib';
import { environment } from '../environments/environment';

console.log('remoteEntry_Rootapp: ' + environment.remoteEntry_Rootapp)
console.log('remoteEntry_Orders: ' + environment.remoteEntry_Orders)
console.log('remoteEntry_Restaurant: ' + environment.remoteEntry_Restaurant)

export const mfe = new MfeUtil();
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'order',
    loadChildren: () => mfe.loadRemoteFile({
      remoteName: "orders",
      remoteEntry: environment.remoteEntry_Orders,
      exposedFile: "OrderModule",
      exposeFileType: FileType.Module
    }).then((m) => m.OrderModule),
  },
  {
    path: 'rootapps',
    loadChildren: () => mfe.loadRemoteFile({
      remoteName: "rootapp",
      remoteEntry: environment.remoteEntry_Rootapp,
      exposedFile: "RootappModule",
      exposeFileType: FileType.Module
    }).then((m) => m.RootappModule),
  },
  {
    path: 'restaurants',
    loadChildren: () => import('./restaurant/restaurant.module').then(m => m.RestaurantModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
