# Phoenix based floating and tiling window manager

Written in TypeScript, based on [mafredri/phoenix-config](https://github.com/mafredri/phoenix-config). Using [Phoenix](https://github.com/kasper/phoenix). Just my personal configuration.

## Concept

Inspired by i3. Tbd.

## Key bindings

Tbd.

## Debugging

In a terminal, run:

```console
$ log stream --process Phoenix
```

Anything logged via logger (`import log from './logger';`) will show up as human friendly output in the terminal. `Phoenix.log` can also be used, but it only supports strings, much of the heavy lifting is already done by logger to create a similar experience to `console.log` in the browser.

You can also read about [Attaching to Web Inspector for Debugging](https://github.com/kasper/phoenix/wiki/Attaching-to-Web-Inspector-for-Debugging) in the Phoenix wiki. This gives access to true `console.log` and ability to use `debugger` statements in your code.
