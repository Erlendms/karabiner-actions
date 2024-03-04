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
  toNone,
} from "karabiner.ts";

writeToProfile(
  "Erlend",
  [
    rule("Caps + Quote -> Hyper").manipulators([
      map("⇪")
        .toIfAlone("⇪", {}, { halt: true })
        .toDelayedAction(toNone(), [
          toStickyModifier("left_shift", "toggle"),
          toStickyModifier("left_control", "toggle"),
          toStickyModifier("left_option", "toggle"),
          toStickyModifier("left_command", "toggle"),
        ])
        .toIfHeldDown("l⇧", "l⌘⌥⌃", { halt: true }),
      map("'")
        .toIfAlone("'", {}, { halt: true })
        .toDelayedAction(toKey("vk_none"), toKey("'"))
        .toIfHeldDown("r⇧", "r⌘⌥⌃", { halt: true })
        .parameters({ "basic.to_if_held_down_threshold_milliseconds": 220 }),
    ]),

    // Home row mods
    rule("Home row mods - shift, ctrl, opt, cmd").manipulators([
      //
      // Four - left hand
      mapSimultaneous(["a", "s", "d", "f"]).toIfHeldDown("l⇧", ["l⌘⌥⌃"]),
      //
      // Three - left hand
      mapSimultaneous(["a", "s", "d"]).toIfHeldDown("l⇧", ["l⌥⌃"]),
      mapSimultaneous(["a", "d", "f"]).toIfHeldDown("l⇧", ["l⌘⌥"]),
      mapSimultaneous(["s", "d", "f"]).toIfHeldDown("l⌃", ["l⌘⌥"]),
      //
      // Two - left hand
      mapSimultaneous(["a", "s"], { key_down_order: "strict" })
        .toIfAlone("a")
        .toIfAlone("s")
        .toIfHeldDown("l⇧", "l⌃"),
      mapSimultaneous(["s", "a"], { key_down_order: "strict" })
        .toIfAlone("s")
        .toIfAlone("a")
        .toIfHeldDown("l⇧", "l⌃"),
      mapSimultaneous(["a", "d"], { key_down_order: "strict" })
        .toIfAlone("a")
        .toIfAlone("d")
        .toIfHeldDown("l⇧", "l⌥"),
      mapSimultaneous(["d", "a"], { key_down_order: "strict" })
        .toIfAlone("d")
        .toIfAlone("a")
        .toIfHeldDown("l⇧", "l⌥"),
      mapSimultaneous(["a", "f"]).toIfHeldDown("l⇧", "l⌘"),
      mapSimultaneous(["s", "d"], { key_down_order: "strict" })
        .toIfAlone("s")
        .toIfAlone("d")
        .toIfHeldDown("l⌃", "l⌥"),
      mapSimultaneous(["d", "s"], { key_down_order: "strict" })
        .toIfAlone("d")
        .toIfAlone("s")
        .toIfHeldDown("l⌃", "l⌥"),
      mapSimultaneous(["s", "f"], { key_down_order: "strict" })
        .toIfAlone("s")
        .toIfAlone("f")
        .toIfHeldDown("l⌃", "l⌘"),
      mapSimultaneous(["f", "s"], { key_down_order: "strict" })
        .toIfAlone("f")
        .toIfAlone("s")
        .toIfHeldDown("l⌃", "l⌘"),
      mapSimultaneous(["d", "f"], { key_down_order: "strict" })
        .toIfAlone("d")
        .toIfAlone("f")
        .toIfHeldDown("l⌥", "l⌘"),
      mapSimultaneous(["f", "d"], { key_down_order: "strict" })
        .toIfAlone("f")
        .toIfAlone("d")
        .toIfHeldDown("l⌥", "l⌘"),
      //
      // One - left hand
      map("a")
        .toIfAlone("a", {}, { halt: true })
        .toIfHeldDown("l⇧", {}, { halt: true })
        .toDelayedAction(toKey("vk_none"), toKey("a")),
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
        .toDelayedAction(toKey("vk_none"), toKey("f", {}, { halt: true }))
        .toIfHeldDown("l⌘", {}, { halt: true }),
      //
      //
      // Four - right hand
      mapSimultaneous(["j", "k", "l", ";"]).toIfHeldDown("r⇧", ["r⌘⌥⌃"]),
      //
      // Three - right hand
      mapSimultaneous([";", "l", "k"]).toIfHeldDown("r⇧", ["r⌥⌃"]),
      mapSimultaneous([";", "k", "j"]).toIfHeldDown("r⇧", ["r⌘⌥"]),
      mapSimultaneous(["l", "k", "j"]).toIfHeldDown("r⌃", ["r⌘⌥"]),
      //
      // Two - right hand
      mapSimultaneous([";", "l"], { key_down_order: "strict" })
        .toIfAlone(";")
        .toIfAlone("l")
        .toIfHeldDown("r⇧", "r⌃"),
      mapSimultaneous(["l", ";"], { key_down_order: "strict" })
        .toIfAlone("l")
        .toIfAlone(";")
        .toIfHeldDown("r⇧", "r⌃"),
      mapSimultaneous([";", "k"], { key_down_order: "strict" })
        .toIfAlone(";")
        .toIfAlone("k")
        .toIfHeldDown("r⇧", "r⌥"),
      mapSimultaneous(["k", ";"], { key_down_order: "strict" })
        .toIfAlone("k")
        .toIfAlone(";")
        .toIfHeldDown("r⇧", "r⌥"),
      mapSimultaneous([";", "j"], { key_down_order: "strict" })
        .toIfAlone(";")
        .toIfAlone("j")
        .toIfHeldDown("r⇧", "r⌘"),
      mapSimultaneous(["j", ";"], { key_down_order: "strict" })
        .toIfAlone("j")
        .toIfAlone(";")
        .toIfHeldDown("r⇧", "r⌘"),
      mapSimultaneous(["l", "k"], { key_down_order: "strict" })
        .toIfAlone("l")
        .toIfAlone("k")
        .toIfHeldDown("r⌃", "r⌥"),
      mapSimultaneous(["k", "l"], { key_down_order: "strict" })
        .toIfAlone("k")
        .toIfAlone("l")
        .toIfHeldDown("r⌃", "r⌥"),
      mapSimultaneous(["l", "j"], { key_down_order: "strict" })
        .toIfAlone("l")
        .toIfAlone("j")
        .toIfHeldDown("r⌃", "r⌘"),
      mapSimultaneous(["j", "l"], { key_down_order: "strict" })
        .toIfAlone("j")
        .toIfAlone("l")
        .toIfHeldDown("r⌃", "r⌘"),
      mapSimultaneous(["k", "j"], { key_down_order: "strict" })
        .toIfAlone("k")
        .toIfAlone("j")
        .toIfHeldDown("r⌥", "r⌘"),
      mapSimultaneous(["j", "k"], { key_down_order: "strict" })
        .toIfAlone("j")
        .toIfAlone("k")
        .toIfHeldDown("r⌥", "r⌘"),
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
        .toDelayedAction(toKey("vk_none"), toKey(";"))
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
