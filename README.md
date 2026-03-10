# My Product App

Example consumer app demonstrating how a product team pulls components and design tokens from the [CDS Registry](https://github.com/christian-chainalysis/registry).

## What This Demonstrates

This is a standard Next.js app that consumes the Chainalysis design system via a shadcn registry. All UI components and the theme (colors, radius, spacing) are pulled from the registry — not installed from npm.

## Setup

### 1. Install dependencies

```bash
pnpm install
```

### 2. Registry is already configured

`components.json` points to the CDS registry:

```json
{
  "registries": {
    "@cds": {
      "url": "https://<registry-url>/r/{name}.json"
    }
  }
}
```

### 3. Run locally

```bash
pnpm dev
```

## Pulling Updates from the Registry

### When design pushes updated tokens (colors, radius, etc.):

```bash
npx shadcn@latest add @cds/theme --overwrite
```

This overwrites `src/app/globals.css` with the latest CSS variable values. Run `git diff` to see what changed — it's just value changes in one file:

```diff
 :root {
-  --primary: #2563eb;
+  --primary: #7c3aed;
-  --radius: 8px;
+  --radius: 12px;
 }
```

Commit, open a PR, merge, deploy.

### When a registry component is updated (e.g. Button markup changes):

```bash
npx shadcn@latest add @cds/button --overwrite
```

### To pull a new component you haven't used before:

```bash
npx shadcn@latest add @cds/dialog
```

## What's In Here

| Path | Source |
|---|---|
| `src/app/globals.css` | Pulled from registry (`@cds/theme`) — design tokens as CSS variables |
| `src/components/ui/` | Pulled from registry (`@cds/button`, `@cds/card`, etc.) — component source code |
| `src/app/page.tsx` | Showcase page built with registry components |
| `components.json` | shadcn config pointing to the CDS registry |

## Tech Stack

- Next.js 16, Tailwind CSS v4, shadcn v4
- pnpm
