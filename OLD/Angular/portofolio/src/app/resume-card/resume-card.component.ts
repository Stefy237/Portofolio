import { Component, Input } from '@angular/core';
import { ResumeCard } from '../models/resume-card';

@Component({
  selector: 'app-resume-card',
  imports: [],
  templateUrl: './resume-card.component.html',
  styleUrl: './resume-card.component.scss'
})
export class ResumeCardComponent {
  @Input() resumeCard!: ResumeCard;
}
