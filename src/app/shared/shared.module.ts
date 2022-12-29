import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [SharedComponent, LoadingComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),
  ],
  exports: [
    LoadingComponent,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule,
  ],
})
export class SharedModule {}
