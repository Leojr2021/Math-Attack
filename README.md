# Pelea de Matematica

Juego educativo 2D para ninos de 9 a 10 anos hecho con `Next.js`, `React` y `TypeScript`. El objetivo es derrotar 10 monstruos caricaturescos resolviendo operaciones matematicas.

## Como funciona

1. La pantalla de inicio muestra el titulo **Pelea de Matematica**.
2. El jugador elige su genero.
3. Se explican las reglas en una pantalla de instrucciones.
4. En el juego principal el heroe avanza por un escenario tipo plataforma.
5. Cada monstruo presenta una operacion matematica.
6. Si la respuesta es correcta, el monstruo es derrotado y el contador sube.
7. Si la respuesta es incorrecta, el jugador pierde una vida y debe resolver la misma operacion.
8. El juego termina con victoria al lograr 10 respuestas correctas o con derrota al quedarse sin vidas.

## Reglas matematicas aplicadas

- Las multiplicaciones y divisiones usan operandos entre `0` y `100`.
- Las divisiones siempre son exactas, sin decimales.
- Se evita repetir preguntas recientes.
- Las respuestas se mantienen en un rango amigable para ninos de 9 a 10 anos.

## Sonidos

Los efectos de acertar, fallar y ganar se generan con `Web Audio API`, asi que no hacen falta archivos de audio pesados.

## Estructura del proyecto

```text
.
|-- app
|   |-- globals.css
|   |-- layout.tsx
|   `-- page.tsx
|-- components
|   |-- game
|   |   |-- DivisionPrompt.tsx
|   |   |-- GameHud.tsx
|   |   |-- HeroFigure.tsx
|   |   |-- PlatformScene.tsx
|   |   `-- ZombieFigure.tsx
|   |-- screens
|   |   |-- CharacterSelectScreen.tsx
|   |   |-- GameScreen.tsx
|   |   |-- InstructionsScreen.tsx
|   |   |-- ResultScreen.tsx
|   |   `-- StartScreen.tsx
|   `-- GameShell.tsx
|-- hooks
|   `-- useGameSounds.ts
|-- lib
|   `-- divisions.ts
|-- types
|   `-- game.ts
|-- .eslintrc.json
|-- .gitignore
|-- next.config.mjs
|-- next-env.d.ts
|-- package.json
|-- tsconfig.json
`-- README.md
```

## Ejecutar en local

### 1. Instalar dependencias

```bash
npm install
```

### 2. Levantar el entorno de desarrollo

```bash
npm run dev
```

Abre `http://localhost:3000`.

### 3. Crear el build de produccion

```bash
npm run build
```

### 4. Ejecutar el build localmente

```bash
npm start
```

## Deploy en Vercel

### Opcion web

1. Sube este repositorio a GitHub.
2. Entra a Vercel y elige **Add New Project**.
3. Importa el repositorio.
4. Vercel detectara automaticamente `Next.js`.
5. Pulsa **Deploy**.

### Opcion CLI

```bash
npm i -g vercel
vercel
vercel --prod
```

## Notas tecnicas

- El proyecto usa App Router de Next.js.
- El estado del juego se controla desde `components/GameShell.tsx`.
- Las divisiones validas se generan desde `lib/divisions.ts`.
- La interfaz es responsive y funciona bien en navegador para escritorio y movil.
