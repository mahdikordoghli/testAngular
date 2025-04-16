import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddStageService } from '../service/add-stage.service';
import { Stage } from '../../core/models/Stage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-stage-ing-component',
  templateUrl: './add-stage-ing-component.component.html',
  styleUrls: ['./add-stage-ing-component.component.css'],
})
export class AddStageIngComponentComponent {
  stageForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private stageService: AddStageService,
    private router: Router 
  ) {
    this.stageForm = this.fb.group({
      titre: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(3)]],
      duree: ['', Validators.required],
      entreprise: ['', [Validators.required, Validators.pattern('^[A-Z].*')]]
    });

  }

  onSubmit() {
    if (this.stageForm.valid) {
      const newStage: Stage = this.stageForm.value;

      this.stageService.addStage(newStage).subscribe({
        next: (response) => {
          console.log('Stage ajouté avec succès !', response);
          this.stageForm.reset(); // reset du formulaire
          this.router.navigate(['/stage']);
        },
        error: (err) => {
          console.error('Erreur lors de l’ajout du stage :', err);
        }
      });
    }
  }
}