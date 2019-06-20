import {animate, style, transition, trigger} from '@angular/animations';

export const FadeInAnimation = trigger('fadeIn', [
    transition(':enter', [
        style({ opacity: 0 }),
        animate('.4s ease-in', style({ opacity: 1 }))
    ]),
    transition(':leave', [
        style({ opacity: 1 }),
        animate('.4s ease-out', style({ opacity: 0 }))
    ])
]);
