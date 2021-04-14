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
    <image />
    <image systemName="mosaic.fill" />
    <image id="image0" />
    <image url="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" frame="20,20"/>
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

### rect

```
$render(
  <vstack frame="max">
    <rect frame="50,30" color="blue"></rect>
    <rect frame="50,30" color="blue" corner="5"></rect>
  </vstack>
);
```

### circle

```
  <vstack frame="max">
    <circle frame="50,50" color="blue"></circle>
  </vstack>
```

### ellipse

```
  <vstack frame="max">
    <ellipse frame="50,30" color="blue"></ellipse>
  </vstack>
```

### capsule

```
  <vstack frame="max">
    <capsule frame="50,30" color="blue"></capsule>
  </vstack>

```




### guage

```

var percent = $device.battery().level * 100;
percent = percent.toFixed(0);

let gaugeSections = [
  {color: "yellow", value: 0.1},
  {color: "blue", value: 0.2},
  {color: "orange", value: 0.3},
  {color: "green", value: 0.4},
];

$render(
  <vstack frame="max">
    <gauge 
      angle="260" 
      value={percent/100}
      thickness="10" 
      label={percent + "%"} labelFont="caption"
      title="BATTERY" titleFont="caption"
      sections={$json(gaugeSections)}
      >
    </gauge>
  </vstack>
);

```


### link

- `linkurl` can be applied to root component.
- <link url=""></link> only work under "Medium" and "Large" widgets.

```

$render(
  <vstack frame="max" linkurl="https://scriptwidget.app">
    <link url="https://www.baidu.com" background="blue">
      <text font="title">Hello Baidu</text>
    </link>
    <link url="https://www.google.com" background="green">
      <hstack>
        <text>Hello</text>
        <text>Google</text>
      </hstack>
    </link>
    <link url="https://www.bing.com" background="yellow">
      <vstack>
        <text>Hello</text>
        <text>Bing</text>
      </vstack>
    </link>
  </vstack>
);

```


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

### $getenv

`$getenv` can get several environment state. But for now, getenv only support `widget-size`.


```
/*
 widget-size
 - large
 - medium
 - small
*/
const widget_size = $getenv("widget-size");

if (widget_size == "small") {
  //...
}
```


### $json

`$json` used for some complex attributes. It simply called `JSON.stringfy` internal.

```
var percent = $device.battery().level * 100;
percent = percent.toFixed(0);

let gaugeSections = [
  {color: "yellow", value: 0.1},
  {color: "blue", value: 0.2},
  {color: "orange", value: 0.3},
  {color: "green", value: 0.4},
];

$render(
  <vstack frame="max">
    <gauge 
      value={percent/100}
      sections={$json(gaugeSections)}
      >
    </gauge>
  </vstack>
);

```


### $http

- $http.get
- $http.post
- $http.put
- $http.patch
- $http.delete


The second parameter for each api supports: 

- headers
- body : usually usefull for post body

```
const result = await $http.get("https://jsonplaceholder.typicode.com/todos/1");
const result = await $http.post("https://jsonplaceholder.typicode.com/posts", {
  body: {
    userId: 1,
    id: 1,
    title: "Hello ScriptWidget",
  }
});
const result = await $http.post("https://jsonplaceholder.typicode.com/posts", {  
  headers: {
    Accept: "application/vnd.github.inertia-preview+json",
  },
  body: {
    userId: 1,
    id: 1,
    title: "Hello ScriptWidget",
  }
});
```


## Animation

support:
- animation can be applied to any components.
- only support rotation animation


animation type:

- clockSecond
- clockMiniute
- clockHour
- clockCustom

We use json to config animations:

```
 let animationSecond = {
  type: "clockSecond",  // clockMinute , clockHour
  timezone: "current",
  anchor: "center"
 }
 
 
 let animationCustom = {
  type: "clockCustom",
  interval: 60, // 60 means 1 second , 30 means 0.5 second
  timezone: "current",
  anchor: "center"
 }

 $render(
   <vstack frame="max" animation={$animation(animationSecond)}>
     <rect frame="30,30" color="green"></rect>
   </vstack>
 )
```

attributes:

timezone:
- current 
- timezone list , please ref https://stackoverflow.com/questions/47494222/getting-the-city-country-list-in-ios-time-zone


anchor:

- zero
- center
- leading
- trailing
- top
- bottom
- topLeading
- topTrailing
- bottomLeading
- bottomTrailing



Quick format for clockCustom:

```
$render(
  <vstack frame="max" animation="clockCustom,1">
    <circle frame="30,30" color="green"></circle>
    <circle frame="30,30" color="pink"></circle>
    <circle frame="30,30" color="gray"></circle>
    <circle frame="30,90" color="orange"></circle>
  </vstack>
);

```


## Enjoy coding

:)