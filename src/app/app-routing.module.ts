import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsIconsComponent } from './buttons-icons/buttons-icons.component';
import { FormFieldInputComponent } from './form-field-input/form-field-input.component';
import { TabsComponent } from './tabs/tabs.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { DialogComponent } from './dialog/dialog.component';
import { DatatableComponent } from './datatable/datatable.component';

const routes: Routes = [
  {path: 'buttonIcon', component: ButtonsIconsComponent},
  {path: 'formFiledInput',component: FormFieldInputComponent},
  {path: 'progBarSpinner',component: ProgressSpinnerComponent},
  {path: 'tabs',component: TabsComponent},
  {path: 'datepicker',component: DatepickerComponent},
  {path: 'snackbar',component:   SnackbarComponent},
  {path: 'dialog',component:   DialogComponent},
  {path: 'datatable',component:     DatatableComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
