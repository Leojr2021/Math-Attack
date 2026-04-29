# AI Prompts for Game Art

Estos prompts estan pensados para generar assets consistentes para `Pelea de Matematica`.
La idea es acercarse a un look cartoon 2D como tus referencias: cabezones, contorno grueso, colores planos y expresiones exageradas.

## Style bible

Usa esta base para todos los assets:

```text
Use case: illustration-story
Asset type: 2D side-scroller mobile game asset
Primary request: create a clean cartoon game sprite sheet asset for a kids zombie action game
Style/medium: 2D digital illustration, mobile game sprite, thick black outlines, chibi proportions, flat colors, soft cel shading, polished casual-game art
Lighting/mood: bright, playful, energetic, kid-friendly, not realistic, not horror
Color palette: saturated desert tones, turquoise zombie skin, warm sand yellows, bright red and purple accents
Materials/textures: smooth cartoon surfaces, simple shading, no realistic textures
Constraints: transparent background for character assets, full body visible, no watermark, no text, no extra characters, consistent proportions across all assets
Avoid: realism, blurry details, painterly brush strokes, photorealism, dark horror style, gore, extra limbs, cropped body, background clutter
```

## Asset list

Guarda los resultados con estos nombres:

- `public/assets/hero/hero-idle.png`
- `public/assets/hero/hero-hurt.png`
- `public/assets/zombie/zombie-idle.png`
- `public/assets/zombie/zombie-attack.png`
- `public/assets/zombie/zombie-hit.png`
- `public/assets/backgrounds/desert-stage.png`

## Hero idle

```text
Use case: illustration-story
Asset type: 2D side-scroller mobile game hero sprite
Primary request: create a full-body cartoon hero sprite for a math action game for kids
Scene/backdrop: transparent background
Subject: a small chibi ninja-style hero standing in idle pose, facing slightly right, oversized head, compact body, determined expression, wearing a purple suit, dark gloves, utility vest, boots, and a simple cartoon visor
Style/medium: 2D digital illustration, side-scroller sprite, thick black outlines, flat colors, soft cel shading
Composition/framing: centered, full body, enough padding around the silhouette, sprite ready for game placement
Lighting/mood: bright playful action mood
Color palette: purple, black, gray, small warm accents
Constraints: transparent background, one character only, clean silhouette, no weapon, no text, no watermark
Avoid: realistic anatomy, horror details, extra accessories, busy background
```

## Hero hurt

```text
Use case: illustration-story
Asset type: 2D side-scroller mobile game hero sprite
Primary request: create a hurt reaction variant of the same chibi ninja hero sprite
Scene/backdrop: transparent background
Subject: the same small chibi purple ninja hero, recoiling slightly backward, surprised face, body tilted, arms tense, readable hurt pose, same outfit and proportions as the idle version
Style/medium: 2D digital illustration, side-scroller sprite, thick black outlines, flat colors, soft cel shading
Composition/framing: centered full body, transparent background
Lighting/mood: playful action, readable damage reaction, still kid-friendly
Color palette: same palette as the hero idle asset
Constraints: same character identity and costume, transparent background, no blood, no text, no watermark
Avoid: realism, dark horror tone, extra props, dramatic gore, background elements
```

## Zombie idle

```text
Use case: illustration-story
Asset type: 2D side-scroller mobile game enemy sprite
Primary request: create a full-body cartoon zombie sprite for a kids action game
Scene/backdrop: transparent background
Subject: a big-headed chibi zombie with turquoise skin, large white eyes, short messy reddish-brown hair, torn red shirt, blue shorts, long arms, funny creepy expression, oversized shoes, idle stance facing slightly left
Style/medium: 2D digital illustration, side-scroller sprite, thick black outlines, flat colors, soft cel shading
Composition/framing: centered full body, readable silhouette, transparent background
Lighting/mood: playful spooky, not scary, arcade action look
Color palette: turquoise skin, red shirt, blue pants, white eyes, dark outlines
Constraints: one zombie only, transparent background, no gore, no text, no watermark
Avoid: realistic decay, horror blood, body damage, detailed organs, dark photorealism
```

## Zombie attack

```text
Use case: illustration-story
Asset type: 2D side-scroller mobile game enemy sprite
Primary request: create an attack pose variant of the same cartoon zombie sprite
Scene/backdrop: transparent background
Subject: the same chibi turquoise zombie lunging forward with raised arms, open mouth, exaggerated attack posture, same clothes and proportions as the idle version
Style/medium: 2D digital illustration, side-scroller sprite, thick black outlines, flat colors, soft cel shading
Composition/framing: centered full body, transparent background, dynamic readable silhouette
Lighting/mood: energetic playful danger, not horror
Color palette: same palette as the zombie idle asset
Constraints: transparent background, same character identity, no gore, no text, no watermark
Avoid: realistic anatomy, horror detail, extra enemies, background props
```

## Zombie hit

```text
Use case: illustration-story
Asset type: 2D side-scroller mobile game enemy sprite
Primary request: create a hit reaction variant of the same cartoon zombie sprite
Scene/backdrop: transparent background
Subject: the same chibi turquoise zombie reacting to damage, body leaning back, dizzy expression, arms loose, readable defeated reaction, same outfit and proportions as the idle version
Style/medium: 2D digital illustration, side-scroller sprite, thick black outlines, flat colors, soft cel shading
Composition/framing: centered full body, transparent background
Lighting/mood: playful arcade action
Color palette: same palette as the zombie idle asset
Constraints: transparent background, same character identity, no blood, no text, no watermark
Avoid: horror, gore, realistic wounds, background elements
```

## Desert stage background

```text
Use case: illustration-story
Asset type: 2D side-scroller mobile game background
Primary request: create a wide cartoon desert stage background for a kids zombie action game
Scene/backdrop: side-scrolling desert with layered depth
Subject: bright blue sky, soft rocky cliffs, cactus plants, stylized dead tree, sandy ground platform with decorative layered soil texture, simple distant bushes, enough open space in the middle for gameplay characters
Style/medium: 2D digital illustration, cartoon platformer background, thick outlines on foreground elements, flat colors, soft cel shading
Composition/framing: wide landscape, gameplay-friendly, horizon in upper middle, open readable foreground, no characters
Lighting/mood: sunny, playful, arcade-like
Color palette: warm yellows, orange sand, pale stone, teal cactus, light blue sky
Constraints: no text, no watermark, kid-friendly, clean readable shapes
Avoid: realism, gritty textures, excessive detail, dark mood, empty composition
```

## Consistency note

Si el generador te saca resultados muy distintos entre si, reutiliza este bloque en cada iteracion:

```text
Keep the exact same visual style, outline thickness, head-to-body ratio, cel shading level, and cartoon mobile game finish across all generated assets.
```
