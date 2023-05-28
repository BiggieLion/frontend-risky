import { animate, group, query, style } from '@angular/animations';

const down = (isShell: boolean = false) => [
  query(
    ':enter, :leave',
    style({
      position: 'fixed',
      width: isShell ? 'calc(100vw - 80px)' : 'width: 100%',
    }),
    { optional: true }
  ),
  group([
    query(
      ':enter',
      [
        style({ transform: 'translateY(100%)' }),
        animate('.4s ease-out', style({ transform: 'translateY(0%)' })),
      ],
      {
        optional: true,
      }
    ),
    query(
      ':leave',
      [
        style({ transform: 'translateY(0%)' }),
        animate('.4s ease-out', style({ transform: 'translateY(-100%)' })),
      ],
      {
        optional: true,
      }
    ),
  ]),
];

export default down;
