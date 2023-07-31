import { FormControl, FormGroupDirective, NgForm } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";

export class ErrMatch implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      const isSubmitted = form && form.submitted;
      console.log('escherstate', isSubmitted);
      return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
  }
