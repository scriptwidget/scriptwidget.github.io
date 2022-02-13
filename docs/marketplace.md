---
id: marketplace
title: Marketplace
---



From ScriptWidget 3.x version, ScriptWiget support marketplace where everyone could publish widgets.


# How to publish widgets


1. Fork https://github.com/ScriptWidget/marketplace

2. Place your widgets here : https://github.com/ScriptWidget/marketplace/tree/main/widgets


For example: 

- field `files` is required for all the files of the widget.
- field `snapshots` is required for marketplace images.
- field `description` is required.
- field `author` is required.

```
{
  "description": "Display a leaf image",
  "author": "everettjf",
  "snapshots": [
    "snapshot/snapshot1.png"
  ],
  "files": [
    "image/image-leaf.png",
    "main.jsx"
  ]
}
```

3. Add widget name to https://github.com/ScriptWidget/marketplace/blob/main/marketplace.json

4. Create merge request and I will receive notification and deal with the scripts soon. You could contact me (everettjf) in the following groups.


# Discuss Group

1. Discord : https://discord.gg/eGzEaP6TzR
2. Telegram : https://t.me/scriptwidgetapp


