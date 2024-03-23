import { Routes } from '@angular/router';
import { ListAdsComponent } from './pages/list-ads/list-ads.component';
import { FormNewAdComponent } from './pages/form-new-ad/form-new-ad.component';

export const routes: Routes = [
    {path: "new-ads",  component: FormNewAdComponent},
    {path: "ads",  component: ListAdsComponent}
];
