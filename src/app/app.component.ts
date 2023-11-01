import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // array = [0,1]
  // items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  // items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  // title = 'angular-drag-drop-tutorial';
  // todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  // done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  public items = [
    {
      id: 1,
      src: 'https://random.imagecdn.app/500/250',
    },
    {
      id: 2,
      src: 'https://random.imagecdn.app/500/250',
    },
    {
      id: 3,
      src: 'https://random.imagecdn.app/500/250',
    },
    {
      id: 4,
      src: 'https://random.imagecdn.app/500/250',
    },
    {
      id: 5,
      src: 'https://random.imagecdn.app/500/250',
    },
    {
      id: 6,
      src: 'https://random.imagecdn.app/500/250',
    },
    {
      id: 7,
      src: 'https://random.imagecdn.app/500/250',
    },
    {
      id: 8,
      src: 'https://random.imagecdn.app/500/250',
    },
  ];

  drop(event: CdkDragDrop<string[]>) {
    console.log('event', event);
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
    console.log('this.items', this.items);

    // Move items between lists
    // transferArrayItem(
    //   event.previousContainer.data,
    //   event.container.data,
    //   event.previousIndex,
    //   event.currentIndex
    // );

    // adair reyes morales -> banorte

    /*
    if (event.previousContainer === event.container) {
      // Reorder items within the same list
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // Move items between lists
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    */
  }
}
