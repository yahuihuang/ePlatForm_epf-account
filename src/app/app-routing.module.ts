import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileType, MfeUtil } from '@ddggroup/angular-lib';

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
      remoteEntry: `https://epf-newpwd.web.app/remoteOrders.js`,
      exposedFile: "OrderModule",
      exposeFileType: FileType.Module
    }).then((m) => m.OrderModule),
  },
  {
    path: 'rootapps',
    loadChildren: () => mfe.loadRemoteFile({
      remoteName: "rootapp",
      remoteEntry: `https://epf-rootapp.web.app/remoteRootapp.js`,
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
