import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


@Component({
  selector: 'weekly-view',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class WeeklyViewComponent {
  monday = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  tuesday = [];

  wednesday = [];

  thursday = [];

  friday = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}


