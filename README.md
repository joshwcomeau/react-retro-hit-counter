![example image](https://github.com/joshwcomeau/react-retro-hit-counter/blob/master/docs/demo.png?raw=true)

# React Retro Hit Counter

[![npm](https://img.shields.io/npm/v/react-retro-hit-counter.svg)]() [![GitHub code size in bytes](http://img.badgesize.io/http://tiny.cc/9t4mqy?compression=gzip)]() [![npm](https://img.shields.io/npm/l/react-retro-hit-counter.svg)]()

Remember when the web was this quirky place full of "Under Construction" clipart, guestbooks, and web rings? The time when animated GIFs were used for _everything_ - background images, cursors, nothing was off-limits. The time before we learned that [BonziBuddy](https://upload.wikimedia.org/wikipedia/en/9/9d/Bonzi_Buddy.png) was actually malware.

Sometimes I miss the 90s web. This is a small gesture to help share some of that nostalgia.

Relive your youth with this straight-outta-geocities hit counter. If you have a page on the Information SuperHighway, slap this bad boy on it and impress all your friends.

* 💾 Retro 90s aesthetic
* ⚙️ Highly [customizable](https://joshwcomeau.github.io/react-retro-hit-counter/)
* 🔲 Includes optional skeumorphic border, and soft glow.
* 🔨 Generated on-the-fly with SVG and Canvas. No images, totally scalable.
* ⚡️ Tiny! <3kb gzip.

> Easily the best React counter you'll find anywhere on Altavista.

---

### Is this serious?

Yes! It's a real thing.

**» [Try the demo!](https://joshwcomeau.github.io/react-retro-hit-counter/) 🎉**

### Does this actually track hits?

No. This is just a presentational component, you need your own tracking system.

I recommend [micro-analytics](https://github.com/micro-analytics/micro-analytics-cli). Super easy to set up and use.

### Compatibility

Compatible with React 15.3 or higher.

Works on all major browsers, including Edge. Haven't tested on IE.

### Installation

```bash
$ yarn install react-retro-hit-counter
# or
$ npm i -s react-retro-hit-counter
```

### Usage

```jsx
import RetroHitCounter from 'react-retro-hit-counter';

const YourComponent = () => (
  <RetroHitCounter
    hits={1337}
    /* The following are all default values: */
    withBorder={true}
    withGlow={false}
    minLength={4}
    size={40}
    padding={4}
    digitSpacing={3}
    segmentThickness={4}
    segmentSpacing={0.5}
    segmentActiveColor="#76FF03"
    segmentInactiveColor="#315324"
    backgroundColor="#222222"
    borderThickness={7}
    glowStrength={0.5}
  />
);
```

### API Reference

##### `hits`

| **Type:** | **Default Value** |
| --------- | ----------------- |
| `number`  | `undefined`       |

The number of hits to display!

> Protip: You can cheat, I won't tell! `hits={actualNumber * 100}`

##### `minLength`

| **Type:** | **Default Value** |
| --------- | ----------------- |
| `number`  | `4`               |

Single-digit hit counters are sad. Start-pad the number with 0s.

![minLength](https://github.com/joshwcomeau/react-retro-hit-counter/blob/master/docs/demo-minlength.gif?raw=true)

##### `size`

| **Type:** | **Default Value** |
| --------- | ----------------- |
| `number`  | `40`              |

The height, in pixels, of each digit. Not including `padding`.

![hits](https://github.com/joshwcomeau/react-retro-hit-counter/blob/master/docs/demo-size.gif?raw=true)

##### `padding`

| **Type:** | **Default Value** |
| --------- | ----------------- |
| `number`  | `4`               |

The padding, in pixels, around the hit counter.

![padding](https://github.com/joshwcomeau/react-retro-hit-counter/blob/master/docs/demo-padding.gif?raw=true)

##### `digitSpacing`

| **Type:** | **Default Value** |
| --------- | ----------------- |
| `number`  | `3`               |

The amount of space, in pixels, between each digit.

![digitSpacing](https://github.com/joshwcomeau/react-retro-hit-counter/blob/master/docs/demo-digitspacing.gif?raw=true)

##### `segmentThickness`

| **Type:** | **Default Value** |
| --------- | ----------------- |
| `number`  | `4`               |

The width of each segment, in pixels.

![segmentThickness](https://github.com/joshwcomeau/react-retro-hit-counter/blob/master/docs/demo-segmentthickness.gif?raw=true)

> You can make really abstract numbers with this prop! I've decided that this is a feature, not a bug.

##### `segmentSpacing`

| **Type:** | **Default Value** |
| --------- | ----------------- |
| `number`  | `0.5`             |

Spacing between the segments, in pixels.

![segmentSpacing](https://github.com/joshwcomeau/react-retro-hit-counter/blob/master/docs/demo-segmentspacing.gif?raw=true)

##### `segmentActiveColor`

| **Type:** | **Default Value** |
| --------- | ----------------- |
| `string`  | `#76FF03`         |

Each digit is comprised of 7 segments, and this prop controls the color of the active ones (AKA the number itself).

![segmentActiveColor](https://github.com/joshwcomeau/react-retro-hit-counter/blob/master/docs/demo-segmentactivecolor.gif?raw=true)

##### `segmentInactiveColor`

| **Type:** | **Default Value** |
| --------- | ----------------- |
| `string`  | `#315324`         |

Controls the color of the inactive segments. Pass "transparent" to not show the inactive ones.

![segmentInactiveColor](https://github.com/joshwcomeau/react-retro-hit-counter/blob/master/docs/demo-segmentinactivecolor.gif?raw=true)

##### `backgroundColor`

| **Type:** | **Default Value** |
| --------- | ----------------- |
| `string`  | `#222222`         |

Set a custom background color for your hit counter. Accepts any valid CSS value (pass "transparent" for no background).

![backgroundColor](https://github.com/joshwcomeau/react-retro-hit-counter/blob/master/docs/demo-backgroundcolor.gif?raw=true)

##### `withBorder`

| **Type:** | **Default Value** |
| --------- | ----------------- |
| `boolean` | `true`            |

No 90s hit counter would be complete without a skeumorphic chrome border!

![withBorder](https://github.com/joshwcomeau/react-retro-hit-counter/blob/master/docs/demo-withborder.gif?raw=true)

> Protip: You can use the border on your own if you like, it's a named export. `import {RetroBorder} from 'react-retro-hit-counter'`. You'll need to provide an explicit width/height, though (the border is made in Canvas, and I didn't want the cost of reading width/height from the DOM).
>
> You can find its props [here](https://github.com/joshwcomeau/react-retro-hit-counter/blob/master/src/components/RetroBorder/RetroBorder.js#L12)

##### `borderThickness`

| **Type:** | **Default Value** |
| --------- | ----------------- |
| `number`  | `7`               |

Width, in pixels, of the border. Only used if `withBorder` is set to `true`.

![borderThickness](https://github.com/joshwcomeau/react-retro-hit-counter/blob/master/docs/demo-borderthickness.gif?raw=true)

##### `withGlow`

| **Type:** | **Default Value** |
| --------- | ----------------- |
| `boolean` | `false`           |

If desired, a soft glow can be emitted from the hit counter. This works especially well with the border.

The color of the glow is based on `segmentActiveColor`.

![withGlow](https://github.com/joshwcomeau/react-retro-hit-counter/blob/master/docs/demo-withglow.gif?raw=true)

##### `glowSize`

| **Type:** | **Default Value** |
| --------- | ----------------- |
| `number`  | `2`               |

The size of the glow. This parameter controls both the negative margin, in pixels, as well as the blur amount (also in pixels). Only used if `withGlow` is set to `true`.

![glowSize](https://github.com/joshwcomeau/react-retro-hit-counter/blob/master/docs/demo-glowsize.gif?raw=true)

##### `glowStrength`

| **Type:** | **Default Value** |
| --------- | ----------------- |
| `number`  | `0.4`             |

The opacity of the glow. Only used if `withGlow` is set to `true`.

![glowStrength](https://github.com/joshwcomeau/react-retro-hit-counter/blob/master/docs/demo-glowstrength.gif?raw=true)

### Future Work and Contributions

Wanna help bring that 90s aesthetic back to the web?

There are a few things I'd like to do, and could use a hand with:

* [#1](https://github.com/joshwcomeau/react-retro-hit-counter/issues/1) - The segments are all the same shape. This can be harmful to legibility; ideally, you want the outer pieces to be trapezoids. [See an example](https://www.jqueryscript.net/images/Stylish-jQuery-CSS3-Based-Digital-Clock.jpg).

* [#2](https://github.com/joshwcomeau/react-retro-hit-counter/issues/2) - a11y: unclear if the best approach is to use aria tags, or just add actual zero-opacity text like "Hit counter. Number: n" that screen-readers can recite.

* [#3](https://github.com/joshwcomeau/react-retro-hit-counter/issues/3) - Tests! I have very few tests, none on the component itself. This should change.

* [#4](https://github.com/joshwcomeau/react-retro-hit-counter/issues/4) - Build process could use some work, specifically making it easier to work on the demo.

* Additional flourishes. Transitions right now are just a simple CSS transition, and they're the only animation. Possibly this is good enough and anything else would just be fluff... but I'm curious if we can do anything else to make it more interesting?

To set up locally, simply clone and run `yarn` or `npm i`. Then, run `yarn storybook` to get an interactive sandbox. Add stories as needed to test the contribution.

There's also a demo app, which offers far greater parameter control. You can `cd` into `/demo`, run `yarn` to install the demo dependencies, and then `yarn start` to run the demo. From the parent directory, whenever you `yarn build`, it updates the demo dependency.
