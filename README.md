# Karabiner actions

Here are some [Karabiner-element](https://karabiner-elements.pqrs.org/) actions I've put together.
I've done it with the wonderful tool [Karabiner.ts](https://github.com/evan-liu/karabiner.ts), and [my index.ts file](my-index.ts) is in this repo, if you want to check it out.

## Table of Contents

- [How to add to Karabiner](https://github.com/Erlendms/karabiner-actions?tab=readme-ov-file#how-to-add-to-karabiner)
- [Meh key](https://github.com/Erlendms/karabiner-actions?tab=readme-ov-file#meh-key)
  - [How thresholds work](https://github.com/Erlendms/karabiner-actions?tab=readme-ov-file#how-thresholds-work)
  - [Finding your threshold](https://github.com/Erlendms/karabiner-actions?tab=readme-ov-file#you-should-find-the-threshold-that-works-for-you)
  - [Meh actions](https://github.com/Erlendms/karabiner-actions?tab=readme-ov-file#meh-actions)
- [Hyper key](https://github.com/Erlendms/karabiner-actions?tab=readme-ov-file#hyper-key)
- [Nordic Markdown Helper](https://github.com/Erlendms/karabiner-actions?tab=readme-ov-file#nordic-markdown-helper)
- [Home row mods](https://github.com/Erlendms/karabiner-actions?tab=readme-ov-file#home-row-mods)
  - [Pros and cons vs QMK/ZMK](https://github.com/Erlendms/karabiner-actions?tab=readme-ov-file#pros-and-cons-vs-qmkzmk)
  - [Home row actions](https://github.com/Erlendms/karabiner-actions?tab=readme-ov-file#home-row-actions)

## How to add to Karabiner

![First click "Complex Modifications", then "Add your own rule". Then copy and paste everything from the .json files here, and hit save.](images/Karabiner-add-action.png)

## Meh key

I have two versions of turning `R` and `U` into the **Meh key** (which is `Shift + Control + Option`) _if_ they are held down.

### How thresholds work

In Karabiner-Elements settings, you can set the threshold for how long you must _hold_ a key for it to be registered as being _held down_, and not just _tapped_. A pretty normal threshold, is 200 ms. So, if you have that threshold and the _Mey key action_ installed, it would work like this:

- Input: Press down (just) `R`, and release it _before_ 200 ms.
  - Output: `r`
- Input: Press down (just) `R`, and release it _after_ 200 ms.
  - Output: `Meh click`
- Input: Press down `R`, and then hit `A` _before_ releasing `R` **and** _before_ 200 ms.
  - Output: `ra`
- Input: Press down `R`, and then hit `A` _before_ releasing `R`, but _after_ 200ms.
  - Output: `Meh + A`

### You should find the threshold that works for you

The default threshold is 500 ms, which is very long. **You change it here:** 👇🏻

![I've went into "Parameters", and then highighted to_if_alone and to_if_held_down. About the first, i've said: "This does the following, when on 1000 milliseconds (1 second): If you hold F for 1 second, and then release it without hitting any other buttons, F gets written. But if you hold for 1.1 secons, Command gets sent instead." And about the second, I wrote: "This starts on 500 - but I'd set it to 200, and see what you ike. It's how long you must hold F before it becomes Command. Lower value makes it possible to do hotkeys faster. But if it's too low, and you write the word "Fast" and hold F and A together for a few milliseconds, you wil send "Command + A"." ](images/Karabiner-settings.png)

Having it higher, means you have to wait after holding, before hitting the second part of the hotkey. But having it lower will lead to more misfirings - like if you just meant to type "react", but you held `R` and `E` together for some milliseconds, so you sent the command `Meh + E`.

The better you are at just giving the keys a little peck while you type, the lower you can have the threshold (and thus wait less).

While testing, it could be a good idea to use Karabiner's EventViewer. 👇🏻

![Click Karabiner in the menu bar, then "Launch EventViewer".](images/Karabiner-eventviewer.png)

### Meh actions

- I have [one version](actions/r_u-meh.json), where the threshold of the meh keys will follow the default you've set,
- and [another version](actions/r_u-meh-220ms.json) with the treshold set to 220 ms even if the other keys have a lower threshold.

## Hyper key

The most important one for me, is having `Caps Lock`, and `Quote` (`Æ` on Norwegian keyboards) become the **Hyper key**. That means all four of `Shift+Control+Option+Command`. No apps use this for hotkeys, so you can always make them your own.

- I have [one version](actions/no-caps_quote-hyper.json) that makes `Caps Lock` _always_ be Hyper, and `Quote` be hyper if you hold it longer than your to_if_held_down_threshold,
- and [another version](actions/caps_quote-hyper.json) that keeps `Caps Lock`'s function if it's clicked alone _and_ under your threshold.

## Nordic Markdown Helper

Typing \_ and \* requiers modifiers on (at least) Nordic keyboard layouts. So [this little action](actions/nordic_markdown_helper.json) is designed to make typing those easier.

(PS: I'm _Team Single Underscore for Italics and Double Asterisks for Bold_. 💪🏻)

We don't use the key to make `¨` often, as we have designated letter keys for Æ Ø Å / Ä Ö Å. So, I've sacrificed it to do this instead:

- **On tap**: `_`
- **On hold**: `**`
- **With Shift + Option _or_ Meh**: Regular unmodified function

Using the key with modifiers works like normal.

## Home row mods

There's an [excellent guide here](https://precondition.github.io/home-row-mods), with tons of information and usage tips. But the gist of it, is that the keys on the home row (usually `A`, `S`, `D`, `F` and `J`, `K`, `L`, `semicolon`) becomes modifiers (like shift and control) when held down.

The same principles apply here as for the actions above - so you got to find the right threshold for you.

### Pros and cons vs QMK/ZMK

The most common way to activate home row mods, is by changing your keyboard's firmware, via QMK or ZMK. One of the major benefits of this, is that it allows some more advanced features, like _permissive hold_, _ignore mod tap_, and being able to map keys to change thresholds.

But there are two main benefits of doing it through Karabiner-Elements:

- It works on _any_ keyboard, including internal laptop keyboards,
- and it has less lag while typing (I _greatly_ prefer the typing feel).

### Home row actions

I have [one version](actions/home_row_mods-ct_o_s_c.json), where:

- A -> Control
- S -> Option
- D -> Shift
- F -> Command
- ... and mirrored on the other hand.

And [one version](actions/home_row_mods-ct_o_c_s.json) where:

- A -> Control
- S -> Option
- D -> Command
- F -> Shift
- ... and mirrored on the other hand.

But I have _two_ versions with the same order as regular keyboards, so:

- A -> Shift
- S -> Control
- D -> Option
- F -> Command

[One regular version](actions/home_row_mods-s-ct-o-c.json), and one version [with sticky shifts](actions/home_row_mods-s-ct-o-c.json).

Sticky shifts mean that if you hold `A` or `semicolon` and then click something else, you'll get the shifted version _even_ if was before 200 ms. This mimics the _Permissive Hold_ function of QMK - but not perfectly (as that's not possible in Karabiner-Elements). The upside is that you don't need to wait for shifts - but it'll lead to more unintended activations, _and you can't keep holding and get more shifts afterwards_.

A better solultion, if you really want fast shifts, might be to just have a lower threshold on just those keys.

**Holding several modifiers also works, btw!** But you have to start holding them at the same time. `simultaneous_threshold_milliseconds` is how strictly you have to hit them at the same time.

Good luck! 🤗

-Erlend
