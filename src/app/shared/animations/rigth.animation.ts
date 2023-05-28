import { animate, group, query, style } from '@angular/animations';

const right = [
  query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
    optional: true,
  }),
  group([
    query(
      ':enter',
      [
        style({ transform: 'translateX(100%)' }),
        animate('.5s ease-out', style({ transform: 'translateX(0%)' })),
      ],
      {
        optional: true,
      }
    ),
    query(
      ':leave',
      [
        style({ transform: 'translateX(0%)' }),
        animate('.5s ease-out', style({ transform: 'translateX(-100%)' })),
      ],
      {
        optional: true,
      }
    ),
  ]),
];

export default right;
