---
id: develop
title: Develop widget
---


## Components

### text

```
    <text font="title">Hello ScriptWidget</text>
    <text font="caption" color="red">
      Hello ScriptWidget
    </text>
    <text font="caption" background="blue" color="white">
      Hello ScriptWidget
    </text>
```

Attributes:

- font
- color
- #general attributes


### image

```
    <vstack>
        <image systemName="mosaic.fill" />
        <image id="image0" />
    </vstack>
```


Attributes:

- systemName : SFSymbols
- id : image id in `Images`
- #general attributes

### vstack

```
    <vstack>
        <text>First</text>
        <text>Second</text>
    </vstack>
```

Attributes:

- #general attributes

### hstack

```
    <hstack>
        <text>First</text>
        <text>Second</text>
    </hstack>
```

Attributes:

- #general attributes

### zstack

```
    <zstack>
        <text>First</text>
        <text>Second</text>
    </zstack>
```

Attributes:

- #general attributes

### spacer

```
    <hstack>
        <text>First</text>
        <spacer/>
        <text>Second</text>
    </hstack>
```

Attributes:

- #general attributes


### date

```
    <date font="caption" date="now" style="time" />
    <date font="caption" date="now" style="date" />
    <date font="caption" date="start of today" style="timer" />
    <date font="title" date={Date.now()} style="timer" />
```

Attributes:

- date
- style
- font
- color
- #general attributes

## Component Attributes



### background (#general attributes)

```
background="red"
```

ref Color


### frame (#general attributes)

- max
- max,#alignment
- width,height
- width,height,#alignment

Example:

```
max
max,leading
100,50
100,50,leading
```


`#alignment`

- center
- leading
- trailing
- top
- bottom
- topLeading
- topTrailing
- bottomLeading
- bottomTrailing


### padding (#general attributes)


```
// padding all
padding="10"


// padding edge
padding="top,10"

- top
- leading
- bottom
- trailing
- all
- horizontal
- vertical


// padding top,trailing,bottom,leading
padding="10,20,30,40"



```



### date (date)


```
// string date
date="now"
date="start of today"

- now
- tomorrow
- yesterday
- start of today



// the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC
date={Date.now()}
date="1614870428904"


```


### style (date)

```
style="timer"

- time
- date
- relative
- offset
- timer


```


### font (date|text)


```
// font string name
font="title"

- largeTitle
- title
- title2
- title3
- headline
- subheadline
- body
- callout
- footnote
- caption
- caption2

// font with size
font="20"
font="70"

```


### color (date|text)

```
color="red"
```

ref Color

## Color


```
// color string name
color="red"

- clear
- black
- white
- gray
- red
- green
- blue
- orange
- yellow
- pink
- purple
- primary
- secondary



// hex color string
color="#ff00ff"


// opacity
color="red,0.5"
color="#ff00ff,0.5"


// gradient color

ref $gradient

```



## APIs


### $render

`$render` is the most core api, it specified the ui structure.

```
$render(
  <vstack frame="max">
    <text font="title">Hello ScriptWidget</text>
    <text font="caption" color="red">
      Hello ScriptWidget
    </text>
    <text font="caption" background="blue" color="white">
      Hello ScriptWidget
    </text>
  </vstack>
);

```


### console

```
console.log("Hello ScriptWidget");

```


### fetch

```
// fetch
const url = "https://jsonplaceholder.typicode.com/todos/1";
const result = await fetch(url);
const model = JSON.parse(result); // result is string , and model is object


// fetch with header
const url = "https://api.github.com/users/everettjf/orgs";
const result = await fetch(url, {
  headers: {
    Accept: "application/vnd.github.inertia-preview+json",
  },
});
const models = JSON.parse(result);
```


### $device

```
console.log($device.name());
console.log($device.model());
console.log($device.language());
console.log($device.systemVersion());
console.log(JSON.stringify($device.screen(), null, 2));
console.log(JSON.stringify($device.battery(), null, 2));
console.log($device.isdarkmode());

```


### $gradient

`$gradient` works with `background` and `color` attributes.

```
let linearGradient = {
  type: "linear",
  colors: ["blue", "white", "pink"],
  startPoint: "topLeading",
  endPoint: "bottomTrailing",
};

let angularGradient = {
  type: "angular",
  colors: ["green", "blue", "black", "green", "blue", "black", "green"],
  center: "center",
};

let radialGradient = {
  type: "radial",
  colors: ["orange", "red", "white"],
  center: "center",
  startRadius: 100,
  endRadius: 470,
};

$render(
  <vstack background={$gradient(linearGradient)} frame="max">
    <text font="title">LinearGradient</text>
  </vstack>
);

```



## Enjoy coding

:)