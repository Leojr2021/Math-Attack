# Assets

Esta carpeta esta preparada para guardar los sprites y fondos finales del juego.

## Estructura sugerida

```text
public/assets/
|-- backgrounds/
|   `-- desert-stage.png
|-- hero/
|   |-- hero-idle.png
|   `-- hero-hurt.png
`-- zombie/
    |-- zombie-idle.png
    |-- zombie-attack.png
    `-- zombie-hit.png
```

## Uso

- Los personajes deberian exportarse con fondo transparente.
- El fondo `desert-stage.png` puede ser horizontal y mas ancho que alto.
- Si generas nuevas versiones, no sobreescribas la primera: usa sufijos como `hero-idle-v2.png`.

## Fuente de prompts

Los prompts base estan en `docs/ai-prompts/game-art-prompts.md`.
