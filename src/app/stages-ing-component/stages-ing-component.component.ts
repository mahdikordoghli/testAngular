import { Component, OnInit } from '@angular/core';
import { AddStageService } from '../service/add-stage.service';
import { Stage } from 'src/core/models/Stage';

@Component({
  selector: 'app-stages-ing',
  templateUrl: './stages-ing-component.component.html',
  styleUrls: ['./stages-ing-component.component.css']
})
export class StagesIngComponentComponent implements OnInit {
  stages: Stage[] = [];

  constructor(private stageService: AddStageService) {}

  ngOnInit(): void {
    this.stageService.getStages().subscribe({
      next: (data) => {
        this.stages = data;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des stages', err);
      }
    });
  }
}
