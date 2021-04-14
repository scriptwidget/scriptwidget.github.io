---
id: animation
title: animation document
---


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

