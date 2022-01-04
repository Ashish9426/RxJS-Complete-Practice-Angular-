import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsyncSubjectComponent } from './components/pages/async-subject/async-subject.component';
import { ConcatMapComponent } from './components/pages/concat-map/concat-map.component';
import { ConcatMap2Component } from './components/pages/concat-map2/concat-map2.component';
import { ConcatComponent } from './components/pages/concat/concat.component';
import { CustomObservableComponent } from './components/pages/custom-observable/custom-observable.component';
import { DbounceTimeComponent } from './components/pages/dbounce-time/dbounce-time.component';
import { FilterComponent } from './components/pages/filter/filter.component';
import { FromEventComponent } from './components/pages/from-event/from-event.component';
import { IntervalComponent } from './components/pages/interval/interval.component';
import { MapComponent } from './components/pages/map/map.component';
import { MergeConcatSwitchMapComponent } from './components/pages/merge-concat-switch-map/merge-concat-switch-map.component';
import { MergeMapComponent } from './components/pages/merge-map/merge-map.component';
import { MergeComponent } from './components/pages/merge/merge.component';
import { ObservableComponent } from './components/pages/observable/observable.component';
import { OfFromComponent } from './components/pages/of-from/of-from.component';
import { PluckComponent } from './components/pages/pluck/pluck.component';
import { ReplaySubjectComponent } from './components/pages/replay-subject/replay-subject.component';
import { RetryComponent } from './components/pages/retry/retry.component';
import { SubjectComponent } from './components/pages/subject/subject.component';
import { SwitchMapSearchingComponent } from './components/pages/switch-map-searching/switch-map-searching.component';
import { SwitchMapComponent } from './components/pages/switch-map/switch-map.component';
import { TakeComponent } from './components/pages/take/take.component';
import { TapComponent } from './components/pages/tap/tap.component';
import { ToArrayComponent } from './components/pages/to-array/to-array.component';


const routes: Routes = [
  
  {path:'observable', component:ObservableComponent, children:[
    {path:'fromEvent', component:FromEventComponent},
    {path:'interval', component:IntervalComponent},
    {path:'of-from', component:OfFromComponent},
    {path:'to-array', component:ToArrayComponent},
    {path:'custom-observable', component:CustomObservableComponent},
    {path:'map', component:MapComponent},
    {path:'pluck', component:PluckComponent},
    {path:'filter', component:FilterComponent},
    {path:'tap', component:TapComponent},
    {path:'take', component:TakeComponent},
    {path:'retry', component:RetryComponent},
    {path:'dbounce-time', component:DbounceTimeComponent},
    {path:'subject', component:SubjectComponent},
    {path:'replay-subject', component:ReplaySubjectComponent},
    {path:'async-subject', component:AsyncSubjectComponent},
    {path:'concat', component:ConcatComponent},
    {path:'merge', component:MergeComponent},
    {path:'merge-map', component:MergeMapComponent},
    {path:'concat-map', component:ConcatMapComponent},
    {path:'concat-map2', component:ConcatMap2Component},
    {path:'switch-map', component:SwitchMapComponent},
    {path:'merge-concat-switch-map', component:MergeConcatSwitchMapComponent},
    {path:'switch-map-searching', component:SwitchMapSearchingComponent},

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
