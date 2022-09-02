import { Component, OnInit } from '@angular/core';
import {
  merge,
  debounce,
  toArray,
  pluck,
  map,
  concat,
  timer,
  range,
  of,
  from,
  interval,
  take,
  empty,
} from 'rxjs';
import { startWith } from 'rxjs/operators';
@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css'],
})
export class RxjsComponent implements OnInit {
  panelOpenState = false;
  emptyCount = 0;
  fromarray: any = [];
  intervalarrayData: any = [];
  ofArray: any;
  constructor() {}

  ngOnInit(): void {
    this.empty();
    this.fromArray();
    this.intervalArray();
    this.ofArrayFun();
    this.range();
    this.timer();
    this.concat();
    this.merge();
    this.ToArray();
    this.pluck();
    this.debounce();
  }

  empty = () => {
    const result = empty().pipe(startWith(7));
    result.subscribe((x) => {
      this.emptyCount = x;
    });
  };
  fromArray = () => {
    const arr = [10, 20, 30];
    const result = from(arr);
    result.subscribe((x) => {
      this.fromarray.push(x);
    });
  };
  intervalArray = () => {
    const intervalData = interval(1000);
    const result = intervalData.pipe(take(3));
    result.subscribe({
      next(x) {
        // console.log(x);
      },
      complete() {
        // console.log('test', this.intervalarrayData);
      },
    });
  };

  ofArrayFun = () => {
    const result = of(1, 2, 3);
    result.subscribe((x) => {
      // console.log(x);
    });
  };
  range = () => {
    const result = range(3, 10);
    result.subscribe((x) => {
      // console.log(x);
    });
  };

  timer = () => {
    const result = timer(3000, 5000);
    result.subscribe((x) => {
      // console.log(x);
    });
  };

  concat = () => {
    const a = [10, 20, 30];
    const b = [40, 50];
    const result = concat(a, b).subscribe((x) => {
      // console.log(x);
    });
  };

  merge = () => {
    const a = timer(2000, 1000);
    const b = [40, 50];
    const result = merge(a, b).subscribe((x) => {
      // console.log(x);
    });
  };

  ToArray = () => {
    const source = interval(1000);
    const result = source.pipe(take(2), toArray());
    result.subscribe((val) => {
      //  console.log(val)
    });
  };

  pluck = () => {
    const source = from([{ name: 'akash', age: 28 }]);
    const result = source.pipe(pluck('name'), toArray());
    result.subscribe((val) => {
      // console.log(val);
    });
  };

  debounce = () => {
    const source = from([10]);
    const result = source.pipe(debounce(() => timer(2000)));
    result.subscribe((val) => {
      // console.log(val);
    });
  };
}
