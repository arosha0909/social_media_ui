import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authentications/login/login.component';
import { AuthLayoutComponent } from './authentications/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AllCompaniesComponent } from './components/all-companies/all-companies.component';
import { AllProfilesComponent } from './components/all-profiles/all-profiles.component';
import { MarketComponent } from './components/market/market.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { MessagesComponent } from './components/messages/messages.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { PostComponent } from './components/post/post.component';
import { ProfileSettingComponent } from './components/profile-setting/profile-setting.component';

const appRoutes: Routes = [
    {
        path: '',
        component: AuthLayoutComponent
    },
    {
        path: 'user',
        // pathMatch: 'full',
        component: MainLayoutComponent,
        children: [
            {
                path: 'home',
                // pathMatch: 'full',
                component: HomePageComponent
            },
            {
                path: 'profile',
                component: ProfileComponent
            },
            {
                path: 'profile-setting',
                component: ProfileSettingComponent
            },
            {
                path: 'all-companies',
                component: AllCompaniesComponent
            },
            {
                path: 'all-profiles',
                component: AllProfilesComponent
            },
            {
                path: 'all-product',
                component: MarketComponent
            },
            {
                path: 'jobs',
                component: JobsComponent
            },
            {
                path: 'messages',
                component: MessagesComponent
            },
            {
                path: 'notifications',
                component: NotificationsComponent
            },
            {
                path: 'post',
                component: PostComponent
            }
        ]
    },

];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
