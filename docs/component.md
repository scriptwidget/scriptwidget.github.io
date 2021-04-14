---
id: component
title: components document
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
