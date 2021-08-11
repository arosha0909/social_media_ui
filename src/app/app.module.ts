import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentications/login/login.component';
import { SignUpComponent } from './authentications/sign-up/sign-up.component';
import { from } from 'rxjs';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthLayoutComponent } from './authentications/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UserFeedComponent } from './components/user/user-feed/user-feed.component';
import { UserInfoComponent } from './components/user/user-info/user-info.component';
import { UserJobsComponent } from './components/user/user-jobs/user-jobs.component';
import { UserBidComponent } from './components/user/user-bid/user-bid.component';
import { UserPortfolioComponent } from './components/user/user-portfolio/user-portfolio.component';
import { UserReviewsComponent } from './components/user/user-reviews/user-reviews.component';
import { UserPaymentsComponent } from './components/user/user-payments/user-payments.component';
import { ManageJobComponent } from './components/user/user-jobs/job-tabs/manage-job/manage-job.component';
import { SavedJobsComponent } from './components/user/user-jobs/job-tabs/saved-jobs/saved-jobs.component';
import { AppliedJobsComponent } from './components/user/user-jobs/job-tabs/applied-jobs/applied-jobs.component';
import { AppliedCandidatesComponent } from './components/user/user-jobs/job-tabs/applied-candidates/applied-candidates.component';
import { ManageBidsComponent } from './components/user/user-bid/bid-tabs/manage-bids/manage-bids.component';
import { ManageBiddersComponent } from './components/user/user-bid/bid-tabs/manage-bidders/manage-bidders.component';
import { MyActiveBidsComponent } from './components/user/user-bid/bid-tabs/my-active-bids/my-active-bids.component';
import { AllCompaniesComponent } from './components/all-companies/all-companies.component';
import { AllProfilesComponent } from './components/all-profiles/all-profiles.component';
import { MarketComponent } from './components/market/market.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { PostComponent } from './components/post/post.component';
import { CustomInterceptor } from './common/custom-interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileSettingComponent } from './components/profile-setting/profile-setting.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    AuthLayoutComponent,
    MainLayoutComponent,
    HomePageComponent,
    ProfileComponent,
    UserFeedComponent,
    UserInfoComponent,
    UserJobsComponent,
    UserBidComponent,
    UserPortfolioComponent,
    UserReviewsComponent,
    UserPaymentsComponent,
    ManageJobComponent,
    SavedJobsComponent,
    AppliedJobsComponent,
    AppliedCandidatesComponent,
    ManageBidsComponent,
    ManageBiddersComponent,
    MyActiveBidsComponent,
    AllCompaniesComponent,
    AllProfilesComponent,
    MarketComponent,
    NotificationsComponent,
    PostComponent,
    ProfileSettingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
