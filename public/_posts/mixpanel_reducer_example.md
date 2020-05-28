---
title: 'Mixpanel reducer() example'
slug: 'mixpanel_reducer_example'
description: 'An example which describes how mixpanel reducer() wroks.'
date: '2020-05-19'
---

We use Mixpanel to calculate conversion rates at our office and I had a really difficult time understanding mixpanel API `reducer()` function.
https://medium.com/@gilbertwat/reducer-in-mixpanel-api-is-weird-but-genius-5968ac9996d7 helped me to understand what happens inside the `reducer()`.

Here is an example which discuss a JQL query with a `reducer()`.

Consider an array with 7 elements `arr=[e1,e2,e3,e4,e5,e6,e7]`

and we have a distributed system where 3 cores are present.

our `main()` is like

```
function main() {
return Events({
from_date: "2016-01-01",
to_date: "2016-01-07"
})
.reduce(function(previous_counts, events) {
var count = events.length;
for (var i = 0; i < previous_counts.length; i++) {
count += previous_counts[i];
}
return count;
});
}
```

So the reducer breaks down elements into 3 threads/arrays:

```
array1=[e1,e2]
array2=[e3,e4,e5]
array3= [e6,e7]
```

now in the 1st core:

```
previous_counts = 0
events = 2
```

after running the for loop we set `count = 2`
likewise,

in 2nd core:

```
previous_counts = 0
events = 3
count = 3
```

in 2nd core:

```
previous_counts = 0
events = 2
count = 2
```

then we collect the processed data in all 3 cores into 1,
Now we run the program sequentially,

`previous_counts` is the counts from results from different cores.

Initially,

```
previous_counts = [2,3,2]
events = 0
count = 0
```

inside for loop we get count value from
`previous_counts[i]`
so finally `count = 7`
