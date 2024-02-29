# Karabiner actions

Here are some Karabiner-element actions I've put together.

(I wouldn't use those in the folders "layer" and "simlayer" - so there's two relevant actions here.)

- [Caps lock and quote (hold) -> Hyperkey](caps+quote_hyper.json)
- [R (hold) and U (hold) -> Meh](r_u-meh.json)
- **Home row mods**
  - [Shift - Control - Option - Command](home_row_mods-s-ct-o-c.json)
  - [Control - Option - Shift - Command](home_row_mods-ct-o-s-c.json)

## How to add to Karabiner

![First click "Complex Modifications", then "Add your own rule". Then copy and paste everything from the .json, and hit save.](images/Karabiner-add-action.png)

### But remember to change settings!

There's no thresholds added to the actions, so that you can adjust yourself. But one value is pretty high as default, so take a look here. 👇🏻
![I've went into "Parameters", and then highighted to_if_alone and to_if_held_down. About the first, i've said: "This does the following, when on 1000 milliseconds (1 second): If you hold F for 1 second, and then release it without hitting any other buttons, F gets written. But if you hold for 1.1 secons, Command gets sent instead." And about the second, I wrote: "This starts on 500 - but I'd set it to 200, and see what you ike. It's how long you must hold F before it becomes Command. Lower value makes it possible to do hotkeys faster. But if it's too low, and you write the word "Fast" and hold F and A together for a few milliseconds, you wil send "Comman + A"." ](images/Karabiner-settings.png)

Let's say you put this on 200 ms (which is pretty normal, but I like it lower). Here's some scenarios then:

- Input: **Click (just) F and release it _before_ 200 ms**
  - Output: **F**
- Input: **Click (just) F and release it _after_ 200 ms**
  - Output: **Command click**
- Input: **Hold F, then hit A _before_ 200 ms**
  - Output: **F** **A**
- Input: **Hold F, then hit A _after_ 200 ms**
  - Output: **Command + A**
- Input: **Hold F, then hit C _after_ 200 ms, then V**
  - Output: **Command + C**, **Command + V**

If you set the number higher, you will almost never get any unintended modifiers. However, when activating stuff like **Command + A**, you would have to wait a bit, after holding **F**, before hitting **A**. Otherwise it would just write `fa`. But you can hold F for as long as you want, before hitting A. You missed your chance to type the letter, and if you don't hit any other keys, it will just me a Command click. (So if you're on windows, this means you can hit the windows key by holding for more than 200 ms.)

If you set it lower, you don't have to wait. But if you type fast, and want to write the word "Fast", you might do **Command + A** before getting to **S** and **T**. Experiemnt, to find your sweet spot!

---

Holding several modifiers also works - but you have to start holding them at the same time. `simultaneous_threshold_milliseconds` is how strictly you have to hit them at the same time.

While testing, it could be a good idea to use Karabiner's EventViewer. 👇🏻

![Click Karabiner in the menu bar, then "Launch EventViewer".](images/Karabiner-eventviewer.png)

Good luck! 🤗

-Erlend
