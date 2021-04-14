---
id: api
title: api document
---

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
