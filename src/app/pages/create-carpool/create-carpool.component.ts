import { Component } from '@angular/core';
import { SelectorFormComponent } from "../../components/selector-form/selector-form.component";
import { LabelInputComponent } from "../../components/label-input/label-input.component";
import { TimeSelectorComponent } from "../../components/time-selector/time-selector.component";
import { ButtonComponent } from "../../components/buttons/button/button.component";

@Component({
    selector: 'app-create-carpool',
    standalone: true,
    templateUrl: './create-carpool.component.html',
    styleUrl: './create-carpool.component.css',
    imports: [SelectorFormComponent, LabelInputComponent, TimeSelectorComponent, ButtonComponent]
})
export class CreateCarpoolComponent {

}
