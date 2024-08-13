import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsIconsComponent } from './buttons-icons/buttons-icons.component';
import { FormFieldInputComponent } from './form-field-input/form-field-input.component';

const routes: Routes = [
  {path: 'buttonIcon', component: ButtonsIconsComponent},
  {path: 'formFiledInput',component: FormFieldInputComponent},
  {path: 'progBarSpinner',component: ProgressSpinnerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
