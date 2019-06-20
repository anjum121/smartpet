// import the required animation functions from the angular animations module
import {animate, state, style, query, stagger, transition, trigger} from '@angular/animations';

export const SlideInOutAnimation =
  // trigger name for attaching this animation to an element using the [@triggerName] syntax
  trigger('slideInOutAnimation', [
    transition(':enter', [
      query('*', [
        style({ transform: 'translateX(200px)', opacity: 0 }),
        stagger(100, [
          animate('1200ms cubic-bezier(0.35, 0, 0.25, 1)', style('*'))
        ])
      ])
    ])
  ]);
