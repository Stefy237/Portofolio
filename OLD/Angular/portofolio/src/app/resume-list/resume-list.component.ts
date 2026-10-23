import { Component, OnInit } from '@angular/core';
import { ResumeCardComponent } from '../resume-card/resume-card.component';
import { ResumeCard } from '../models/resume-card';
import { ResumeService } from '../services/resume.service';

@Component({
  selector: 'app-resume-list',
  imports: [
    ResumeCardComponent
  ],
  templateUrl: './resume-list.component.html',
  styleUrl: './resume-list.component.scss'
})
export class ResumeListComponent implements OnInit{
  resumeCards!: ResumeCard[];

  constructor(private resumeService: ResumeService) {}
  ngOnInit(): void {
    this.resumeCards = this.resumeService.getResumeCards();
  }

  onDownloadCV() {
    
  }
}
