import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent{
  scheduleForm: FormGroup;
  schedules = [
    { date: new Date('2024-07-17'), time: '10:00', description: 'Meeting with team', isSelected: false },
    { date: new Date('2024-07-17'), time: '14:00', description: 'Client call', isSelected: false },
    // Add more schedules here
  ];

  filteredSchedules = [];


  constructor(private fb: FormBuilder) {}

  // ngOnInit(): void {
  //   this.scheduleForm = this.fb.group({
  //     selectedDate: [null]
  //   });

  //   this.scheduleForm.get('selectedDate').valueChanges.subscribe(date => {
  //     this.filterSchedules(date);
  //   });
  // }

  // filterSchedules(date: Date | null): void {
  //   if (date) {
  //     this.filteredSchedules = this.schedules
  //       .map(schedule => ({
  //         ...schedule,
  //         isSelected: false
  //       }))
  //       .filter(schedule => schedule.date.toDateString() === date.toDateString());
  //   } else {
  //     this.filteredSchedules = [];
  //   }
  // }

  // toggleScheduleSelection(schedule: any): void {
  //   schedule.isSelected = !schedule.isSelected;
  // }

}
