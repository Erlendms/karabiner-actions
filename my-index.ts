import {
  layer,
  map,
  NumberKeyValue,
  rule,
  withMapper,
  writeToProfile,
  isSideMultiModifierAlias,
  parseSideMultiModifierAlias,
  SideModifierAlias,
  ArrowKeyCode,
  arrowKeyCodes,
  ControlOrSymbolKeyCode,
  controlOrSymbolKeyCodes,
  fromOnlyKeyCodes,
  functionKeyCodes,
  internationalKeyCodes,
  japaneseKeyCodes,
  KeyCode,
  keypadKeyCodes,
  letterKeyCodes,
  modifierKeyCodes,
  numberKeyCodes,
  otherKeyCodes,
  pcKeyboardKeyCodes,
  stickyModifierKeyCodes,
  toOnlyKeyCodes,
  simlayer,
  mapSimultaneous,
  toKey,
  toStickyModifier,
  BasicParameters,
} from "karabiner.ts";

writeToProfile(
  "Erlend",
  [
    rule("Caps + Quote -> Hyper").manipulators([
      map("⇪").toHyper(),
      map("⇪")
        .toIfAlone("⇪", {}, { halt: true })
        .toDelayedAction(toKey("vk_none"), toKey("l⇧", "l⌘⌥⌃"))
        .toIfHeldDown("l⇧", "l⌘⌥⌃", { halt: true }),
      map("'")
        .toIfAlone("'", {}, { halt: true })
        .toDelayedAction(toKey("vk_none"), toKey("'"))
        .toIfHeldDown("r⇧", "r⌘⌥⌃", { halt: true })
        .parameters({ "basic.to_if_held_down_threshold_milliseconds": 220 }),
    ]),
    // Four - left hand
    rule("Home row mods - shift, ctrl, opt, cmd").manipulators([
      mapSimultaneous(["a", "s", "d", "f"]).toIfHeldDown("l⇧", ["l⌘⌥⌃"]),
      // Three - left hand
      mapSimultaneous(["a", "s", "d"]).toIfHeldDown("l⇧", ["l⌥⌃"]),
      mapSimultaneous(["a", "d", "f"]).toIfHeldDown("l⇧", ["l⌘⌥"]),
      mapSimultaneous(["s", "d", "f"]).toIfHeldDown("l⌃", ["l⌘⌥"]),
      // Two - left hand
      mapSimultaneous(["a", "s"]).toIfHeldDown("l⇧", "l⌃"),
      mapSimultaneous(["a", "d"]).toIfHeldDown("l⇧", "l⌥"),
      mapSimultaneous(["a", "f"]).toIfHeldDown("l⇧", "l⌘"),
      mapSimultaneous(["s", "d"]).toIfHeldDown("l⌃", "l⌥"),
      mapSimultaneous(["s", "f"]).toIfHeldDown("l⌃", "l⌘"),
      mapSimultaneous(["d", "f"]).toIfHeldDown("l⌥", "l⌘"),
      // One - left hand
      map("a")
        .toIfAlone("a", {}, { halt: true })
        .toDelayedAction(
          toKey("vk_none"),
          toStickyModifier("left_shift", "toggle"),
        )
        .toIfHeldDown("l⇧", {}, { halt: true }),
      map("s")
        .toIfAlone("s", {}, { halt: true })
        .toDelayedAction(toKey("vk_none"), toKey("s"))
        .toIfHeldDown("l⌃", {}, { halt: true }),
      map("d")
        .toIfAlone("d", {}, { halt: true })
        .toDelayedAction(toKey("vk_none"), toKey("d"))
        .toIfHeldDown("l⌥", {}, { halt: true }),
      map("f")
        .toIfAlone("f", {}, { halt: true })
        .toDelayedAction(toKey("vk_none"), toKey("f"))
        .toIfHeldDown("l⌘", {}, { halt: true }),
      //
      // Four - right hand
      mapSimultaneous(["j", "k", "l", ";"]).toIfHeldDown("r⇧", ["r⌘⌥⌃"]),
      // Three - right hand
      mapSimultaneous([";", "l", "k"]).toIfHeldDown("r⇧", ["r⌥⌃"]),
      mapSimultaneous([";", "k", "j"]).toIfHeldDown("r⇧", ["r⌘⌥"]),
      mapSimultaneous(["l", "k", "j"]).toIfHeldDown("r⌃", ["r⌘⌥"]),
      // Two - right hand
      mapSimultaneous([";", "l"]).toIfHeldDown("r⇧", "r⌃"),
      mapSimultaneous([";", "k"]).toIfHeldDown("r⇧", "r⌥"),
      mapSimultaneous([";", "j"]).toIfHeldDown("r⇧", "r⌘"),
      mapSimultaneous(["l", "k"]).toIfHeldDown("r⌃", "r⌥"),
      mapSimultaneous(["l", "j"]).toIfHeldDown("r⌃", "r⌘"),
      mapSimultaneous(["k", "j"]).toIfHeldDown("r⌥", "r⌘"),
      // One - right hand
      map("j")
        .toIfAlone("j", {}, { halt: true })
        .toDelayedAction(toKey("vk_none"), toKey("j"))
        .toIfHeldDown("r⌘", {}, { halt: true }),
      map("k")
        .toIfAlone("k", {}, { halt: true })
        .toDelayedAction(toKey("vk_none"), toKey("k"))
        .toIfHeldDown("r⌥", {}, { halt: true }),
      map("l")
        .toIfAlone("l", {}, { halt: true })
        .toDelayedAction(toKey("vk_none"), toKey("l"))
        .toIfHeldDown("r⌃", {}, { halt: true }),
      map(";")
        .toIfAlone(";", {}, { halt: true })
        .toDelayedAction(
          toKey("vk_none"),
          toStickyModifier("right_shift", "toggle"),
        )
        .toIfHeldDown("r⇧", {}, { halt: true }),
    ]),
    // Meh
    rule("R_U = Meh ").manipulators([
      map("r")
        .toIfAlone("r", {}, { halt: true })
        .toDelayedAction(toKey("vk_none"), toKey("r"))
        .toIfHeldDown("l⇧", "l⌥⌃", { halt: true })
        .parameters({ "basic.to_if_held_down_threshold_milliseconds": 220 }),
      map("u")
        .toIfAlone("u", {}, { halt: true })
        .toDelayedAction(toKey("vk_none"), toKey("u"))
        .toIfHeldDown("r⇧", "r⌥⌃", { halt: true })
        .parameters({ "basic.to_if_held_down_threshold_milliseconds": 220 }),
    ]),
  ],
  {
    "basic.to_if_held_down_threshold_milliseconds": 120,
  },
);
