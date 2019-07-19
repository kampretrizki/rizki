import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'siaran', loadChildren: './siaran/siaran.module#SiaranPageModule' },
  { path: 'klasmen', loadChildren: './klasmen/klasmen.module#KlasmenPageModule' },
  { path: 'topskor', loadChildren: './topskor/topskor.module#TopskorPageModule' },
  { path: 'jadwal', loadChildren: './jadwal/jadwal.module#JadwalPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
