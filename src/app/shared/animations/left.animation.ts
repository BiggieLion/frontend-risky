import { animate, group, query, style } from '@angular/animations';

const left = [
  query(
    ':enter, :leave',
    style({
      position: 'fixed',
      width: '100%',
    }),
    { optional: true }
  ),
  group([
    query(
      ':enter',
      [
        style({ transform: 'translateX(-100%)' }),
        animate('.5s ease-out', style({ transform: 'translateX(0%)' })),
      ],
      { optional: true }
    ),
  ]),
];

export default left;
