import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { ObservableComponent } from './components/pages/observable/observable.component';
import { FromEventComponent } from './components/pages/from-event/from-event.component';
import { IntervalComponent } from './components/pages/interval/interval.component';
import { OfFromComponent } from './components/pages/of-from/of-from.component';
import { ToArrayComponent } from './components/pages/to-array/to-array.component';
import { CustomObservableComponent } from './components/pages/custom-observable/custom-observable.component';
import { MapComponent } from './components/pages/map/map.component';
import { PluckComponent } from './components/pages/pluck/pluck.component';
import { FilterComponent } from './components/pages/filter/filter.component';
import { TapComponent } from './components/pages/tap/tap.component';
import { TakeComponent } from './components/pages/take/take.component';
import { RetryComponent } from './components/pages/retry/retry.component';
import { HttpClientModule } from '@angular/common/http';
import { DbounceTimeComponent } from './components/pages/dbounce-time/dbounce-time.component';
import { SubjectComponent } from './components/pages/subject/subject.component';
import { Comp1Component } from './components/pages/compSubject/comp1/comp1.component';
import { Comp2Component } from './components/pages/compSubject/comp2/comp2.component';
import { Comp3Component } from './components/pages/compSubject/comp3/comp3.component';
import { Comp4Component } from './components/pages/compSubject/comp4/comp4.component';
import { Comp5Component } from './components/pages/compSubject/comp5/comp5.component';
import { Comp6Component } from './components/pages/compSubject/comp6/comp6.component';
import { Subject2Component } from './components/pages/subject2/subject2.component';
import { ReplaySubjectComponent } from './components/pages/replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './components/pages/async-subject/async-subject.component';
import { ConcatComponent } from './components/pages/concat/concat.component';
import { MergeComponent } from './components/pages/merge/merge.component';
import { MergeMapComponent } from './components/pages/merge-map/merge-map.component';
import { ConcatMapComponent } from './components/pages/concat-map/concat-map.component';
import { ConcatMap2Component } from './components/pages/concat-map2/concat-map2.component';
import { SwitchMapComponent } from './components/pages/switch-map/switch-map.component';
import { MergeConcatSwitchMapComponent } from './components/pages/merge-concat-switch-map/merge-concat-switch-map.component';
import { SwitchMapSearchingComponent } from './components/pages/switch-map-searching/switch-map-searching.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ObservableComponent,
    FromEventComponent,
    IntervalComponent,
    OfFromComponent,
    ToArrayComponent,
    CustomObservableComponent,
    MapComponent,
    PluckComponent,
    FilterComponent,
    TapComponent,
    TakeComponent,
    RetryComponent,
    DbounceTimeComponent,
    SubjectComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    Comp5Component,
    Comp6Component,
    Subject2Component,
    ReplaySubjectComponent,
    AsyncSubjectComponent,
    ConcatComponent,
    MergeComponent,
    MergeMapComponent,
    ConcatMapComponent,
    ConcatMap2Component,
    SwitchMapComponent,
    MergeConcatSwitchMapComponent,
    SwitchMapSearchingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
