# calendar-loop

Utility that makes creating visual representations of calendar months a bit less painful.

## Examples

```javascript
import loop from 'calendar-loop'

loop({ year: 2016, month: 5 })
```

The output of the example above will be:

```javascript
[
  [-1, -1, -1,  1,  2,  3,  4],
  [ 5,  6,  7,  8,  9, 10, 11],
  [12, 13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24, 25],
  [26, 27, 28, 29, 30, -1, -1]
]
```

Here's how you might use it to build a calendar:

```javascript
const weeks = loop({ year: 2016, month: 2 })

weeks.reduce((rows, week) => {
  return `${rows}<div>${week.reduce((cells, day) => {
    return `${cells}<span>${day > -1 ? day : ''}</span>`
  }, '')}</div>`
}, '')
```

Which will return:

```html
<div>
  <span></span>
  <span></span>
  <span>1</span>
  <span>2</span>
  <span>3</span>
  <span>4</span>
  <span>5</span>
</div>
<div>
  <span>6</span>
  <span>7</span>
  <span>8</span>
  <span>9</span>
  <span>10</span>
  <span>11</span>
  <span>12</span>
</div>
<div>
  <span>13</span>
  <span>14</span>
  <span>15</span>
  <span>16</span>
  <span>17</span>
  <span>18</span>
  <span>19</span>
</div>
<div>
  <span>20</span>
  <span>21</span>
  <span>22</span>
  <span>23</span>
  <span>24</span>
  <span>25</span>
  <span>26</span>
</div>
<div>
  <span>27</span>
  <span>28</span>
  <span>29</span>
  <span>30</span>
  <span>31</span>
  <span></span>
  <span></span>
</div>
```

Add some (conditional) styling and you're in business!

## API

### loop(options: object): Array<Array<number>>

`options` must contain at least `year: number` and `month: number`. Note that `month` is zero-based, so January is `0`, February is `1`, and so on. This choice was made to mirror [`new Date(year, month)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date). You can also provide `startOfWeek: number` to determine which weekday should be used as the first. Sunday is `0` (default), and Monday is `1` (these are the only two supported atm.). Again, this was done to mirror [`Date#getDay()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay). `calendar-loop` exports two enums so you don't have to remember the numbers: `import loop, { SUNDAY, MONDAY } from 'calendar-loop'`.

The return value is a two-dimensional array of numbers. `-1` should be treated as a day belonging to the previous/next month, render accordingly.

## ISC License

Copyright (c) 2016, Christian Maughan Tegnér <christian.tegner@gmail.com>

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
