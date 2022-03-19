import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'home-patient',
    loadChildren: () => import('./HompePatient/home-patient/home-patient.module').then( m => m.HomePatientPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login/login.module').then( m => m.LoginPageModule),
    
     
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register/register.module').then( m => m.RegisterPageModule)
  },
 
  
  {
    path: 'banque-sang',
    loadChildren: () => import('./BanqueSang/banque-sang/banque-sang.module').then( m => m.BanqueSangPageModule)
  },
  
  
  {
    path: 'rendez-vous',
    loadChildren: () => import('./RendezVous/rendez-vous/rendez-vous.module').then( m => m.RendezVousPageModule)
  },
 
  {
    path: 'groupe-sanguin',
    loadChildren: () => import('./GroupeSanguin/groupe-sanguin/groupe-sanguin.module').then( m => m.GroupeSanguinPageModule)
  },
  {
    path: 'list-utilisateur',
    loadChildren: () => import('./ListUtilisateur/list-utilisateur/list-utilisateur.module').then( m => m.ListUtilisateurPageModule)
  },
 
  {
    path: "update/:id",
    loadChildren: () => import('./Update/update/update.module').then( m => m.UpdatePageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./profil/profil/profil.module').then( m => m.ProfilPageModule)
  },
  {
    path: 'demande/:id',
    loadChildren: () => import('./Demande/demande/demande.module').then( m => m.DemandePageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./Notification/notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./Detail/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'retour-notification',
    loadChildren: () => import('./RetourNotification/retour-notification/retour-notification.module').then( m => m.RetourNotificationPageModule)
  },
  {
    path: 'detail-accept/:id',
    loadChildren: () => import('./DetailAccept/detail-accept/detail-accept.module').then( m => m.DetailAcceptPageModule)
  },

  {
    path: 'confirmation',
    loadChildren: () => import('./Confirmation/confirmation/confirmation.module').then( m => m.ConfirmationPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./Splash/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'detail-group/:id',
    loadChildren: () => import('./DetailGroup/detail-group/detail-group.module').then( m => m.DetailGroupPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
