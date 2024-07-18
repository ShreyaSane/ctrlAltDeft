import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ToolBarComponentComponent } from '../tool-bar-component/tool-bar-component.component';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { UpdateRoutineComponent } from '../app/update-routine/update-routine.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnChanges{
  date:Date;
  schedules: any[] = [];
  allSchedules: any[] = [
    {
      date: '2024-07-18',
      time: '07:00 AM - 08:00 AM',
      tasks: ['Task 1'],
      details: [
        { activity: 'Detail 1', tip: 'Tip 1', youtubeLink: 'https://www.youtube.com/watch?v=example1' },
        { activity: 'Detail 2', tip: 'Tip 2', youtubeLink: 'https://www.youtube.com/watch?v=example2' },
        { activity: 'Detail 3', tip: 'Tip 3', youtubeLink: 'https://www.youtube.com/watch?v=example3' }
      ],
      suggestions: [
        { activity: 'Suggestion 1', tip: 'Tip A', youtubeLink: 'https://www.youtube.com/watch?v=exampleA' },
        { activity: 'Suggestion 2', tip: 'Tip B', youtubeLink: 'https://www.youtube.com/watch?v=exampleB' }
      ],
      expanded: false
    },{
      date: '2024-07-18',
      time: '08:00 AM - 09:00 AM',
      tasks: ['Task 1'],
      details: [
        { activity: 'Detail 1', tip: 'Tip 1', youtubeLink: 'https://www.youtube.com/watch?v=example1' },
        { activity: 'Detail 2', tip: 'Tip 2', youtubeLink: 'https://www.youtube.com/watch?v=example2' },
        { activity: 'Detail 3', tip: 'Tip 3', youtubeLink: 'https://www.youtube.com/watch?v=example3' }
      ],
      suggestions: [
        { activity: 'Suggestion 1', tip: 'Tip A', youtubeLink: 'https://www.youtube.com/watch?v=exampleA' },
        { activity: 'Suggestion 2', tip: 'Tip B', youtubeLink: 'https://www.youtube.com/watch?v=exampleB' }
      ],
      expanded: false
    },{
      date: '2024-07-18',
      time: '09:00 AM - 10:00 AM',
      tasks: ['Task 1'],
      details: [
        { activity: 'Detail 1', tip: 'Tip 1', youtubeLink: 'https://www.youtube.com/watch?v=example1' },
        { activity: 'Detail 2', tip: 'Tip 2', youtubeLink: 'https://www.youtube.com/watch?v=example2' },
        { activity: 'Detail 3', tip: 'Tip 3', youtubeLink: 'https://www.youtube.com/watch?v=example3' }
      ],
      suggestions: [
        { activity: 'Suggestion 1', tip: 'Tip A', youtubeLink: 'https://www.youtube.com/watch?v=exampleA' },
        { activity: 'Suggestion 2', tip: 'Tip B', youtubeLink: 'https://www.youtube.com/watch?v=exampleB' }
      ],
      expanded: false
    },
    {
      date: '2024-07-19',
      time: '11:00 AM',
      tasks: ['Task 2'],
      details: [
        { activity: 'Workshop', tip: 'Bring laptop', youtubeLink: 'https://www.youtube.com/watch?v=example3' }
      ],
      suggestions: [
        { activity: 'Preparation', tip: 'Review materials', youtubeLink: 'https://www.youtube.com/watch?v=example4' }
      ],
      expanded: false
    },
    // Add more schedule items as needed
  ];
  showUpdateRoutine: boolean;
  
  constructor(private toolbar :ToolBarComponentComponent, private dialog: MatDialog ) { }

  ngOnInit(): void {
    this.filterSchedules(new Date());
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("onchange");
  }

  onDateChange(event: MatDatepickerInputEvent<Date>) {
    const selectedDate = event.value;
    this.filterSchedules(selectedDate);
    console.log("selectedDate"+selectedDate);
  }

  filterSchedules(date: Date | null) {
    const formattedDate = date.toISOString().split('T')[0]; // format date as YYYY-MM-DD
    this.schedules = this.allSchedules.filter(schedule => schedule.date === formattedDate);
    console.log("formattedDate"+formattedDate);
  }

  
    completeActivity() {
      this.showUpdateRoutine = true;
      console.log(this.showUpdateRoutine);
    }
  
}
