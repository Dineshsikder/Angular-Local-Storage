import { FormGroup, FormControl } from '@angular/forms';

export default class FormUtil {

    static markAsTouch(formGroup: FormGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if(control instanceof FormControl) {
                control.markAsDirty({ onlySelf: true});
            } else if(control instanceof FormGroup) {
                this.markAsTouch(control);
            }
        });
    }

    static isFieldValid(field: FormControl) {
        return field?(!field.valid && field.dirty): false;
    }

    static isErrorExist(field: FormControl, errorType: string) {
        return field?((!field.valid ? (field.errors[errorType]):false) && field.dirty): false;
    }
    
}