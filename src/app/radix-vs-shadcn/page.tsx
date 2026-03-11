"use client";

import * as React from "react";
import { Button as BaseUIButton } from "@base-ui/react/button";
import { Dialog as DialogPrimitive } from "radix-ui";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function Code({ children }: { children: React.ReactNode }) {
  return (
    <pre className="overflow-x-auto rounded-lg bg-zinc-900 p-4 text-xs leading-relaxed text-zinc-300">
      <code>{children}</code>
    </pre>
  );
}

function Callout({
  children,
  color = "amber",
}: {
  children: React.ReactNode;
  color?: "amber" | "blue" | "emerald" | "purple";
}) {
  const colors = {
    amber:
      "text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950 border-amber-200 dark:border-amber-800",
    blue: "text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800",
    emerald:
      "text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 border-emerald-200 dark:border-emerald-800",
    purple:
      "text-purple-700 dark:text-purple-400 bg-purple-50 dark:bg-purple-950 border-purple-200 dark:border-purple-800",
  };
  return (
    <div className={`text-sm border rounded-lg p-3 leading-relaxed ${colors[color]}`}>
      {children}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default function PrimitivesVsShadcnPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12 space-y-10">
      {/* ----------------------------------------------------------------- */}
      {/* INTRO */}
      {/* ----------------------------------------------------------------- */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">
          Headless Primitives vs shadcn
        </h1>
        <Callout color="blue">
          <strong>The one-sentence version:</strong> Base UI and Radix make
          components <em>work</em> (accessibility, keyboard, focus). shadcn
          makes them <em>look good</em> (styling, variants, design tokens).
          They&apos;re different layers, not competitors.
        </Callout>
      </div>

      {/* ----------------------------------------------------------------- */}
      {/* THE ANALOGY */}
      {/* ----------------------------------------------------------------- */}
      <div className="rounded-xl border bg-muted/30 p-6 space-y-4">
        <h2 className="text-lg font-semibold">Think of It Like a Car</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
          <div className="rounded-lg border p-4 space-y-2">
            <div className="font-semibold text-purple-600 dark:text-purple-400">
              Base UI / Radix
            </div>
            <div className="text-muted-foreground">
              The <strong>engine, transmission, and safety systems</strong>.
              Everything that makes the car actually work — but it&apos;s
              invisible. No body, no paint, no interior.
            </div>
          </div>
          <div className="rounded-lg border p-4 space-y-2">
            <div className="font-semibold text-blue-600 dark:text-blue-400">
              shadcn
            </div>
            <div className="text-muted-foreground">
              The <strong>body kit, paint, and interior</strong>. Makes it look
              like a real car. But you get the blueprints — you can repaint it or
              swap the seats anytime.
            </div>
          </div>
          <div className="rounded-lg border p-4 space-y-2">
            <div className="font-semibold text-emerald-600 dark:text-emerald-400">
              CDS Registry
            </div>
            <div className="text-muted-foreground">
              The <strong>dealership</strong> that ships pre-configured cars
              (components) in Chainalysis brand colors. Design picks the colors
              in Figma, every car updates.
            </div>
          </div>
        </div>
      </div>

      {/* ----------------------------------------------------------------- */}
      {/* THE STACK */}
      {/* ----------------------------------------------------------------- */}
      <div className="rounded-xl border bg-muted/30 p-6 space-y-3">
        <h2 className="text-lg font-semibold">The Stack (Bottom → Top)</h2>
        <div className="space-y-0">
          {[
            {
              label: "DOM",
              detail: "Raw HTML elements",
              example: '<button>, <div role="dialog">',
              color: "bg-zinc-200 text-zinc-700 dark:bg-zinc-700 dark:text-zinc-200",
            },
            {
              label: "Headless Primitive",
              detail: "Makes it work correctly",
              example: "Focus trap, Escape to close, ARIA, keyboard nav",
              color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
            },
            {
              label: "shadcn",
              detail: "Makes it look good",
              example: "Tailwind styling, variant system, design tokens",
              color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
            },
            {
              label: "Your App",
              detail: "You just use it",
              example: '<Button variant="outline">Save</Button>',
              color: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200",
            },
          ].map((layer, i) => (
            <div key={layer.label}>
              {i > 0 && (
                <div className="flex items-center gap-3 py-1">
                  <span className="w-40 text-right text-xs text-muted-foreground">
                    ↑
                  </span>
                </div>
              )}
              <div className="flex items-start gap-3">
                <span className="w-40 shrink-0 text-right text-sm text-muted-foreground pt-1">
                  {layer.label}
                </span>
                <div className={`rounded px-3 py-1.5 text-xs ${layer.color}`}>
                  <span className="font-medium">{layer.detail}</span>
                  <span className="opacity-70"> — {layer.example}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Callout color="amber">
          <strong>You only interact with the top layer.</strong> When you
          write{" "}
          <code className="bg-amber-200/50 dark:bg-amber-800/50 px-1 rounded">
            {"<Button variant=\"outline\">"}
          </code>
          , the shadcn layer applies styling, the headless layer handles
          accessibility, and the DOM renders the HTML. You don&apos;t think about
          the lower layers — they just work.
        </Callout>
      </div>

      {/* ================================================================= */}
      {/* BUTTON — THREE LEVELS */}
      {/* ================================================================= */}
      <div className="rounded-xl border p-6 space-y-6">
        <div>
          <h2 className="text-xl font-semibold">Button — Three Levels</h2>
          <p className="text-muted-foreground text-sm mt-1">
            Same button, built three different ways. Each level adds something.
          </p>
        </div>

        {/* Level 1: Raw HTML */}
        <div className="space-y-3 rounded-lg border p-4">
          <div className="flex items-center gap-2">
            <h3 className="font-medium">Level 1: Raw HTML</h3>
            <span className="rounded-full bg-zinc-200 px-2 py-0.5 text-xs text-zinc-700 dark:bg-zinc-700 dark:text-zinc-300">
              Native
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button onClick={() => alert("Raw HTML click!")}>
              Unstyled
            </button>
            <button
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
              onClick={() => alert("Styled HTML click!")}
            >
              Manually Styled
            </button>
          </div>
          <Callout>
            <strong>Try clicking both.</strong> They work — a native{" "}
            <code className="bg-amber-200/50 dark:bg-amber-800/50 px-1 rounded">
              {"<button>"}
            </code>{" "}
            is clickable by default. The first has zero styling (the browser
            default). The second has Tailwind classes we wrote by hand —
            hardcoded blue, hardcoded radius. If design wants to change the
            brand color, you&apos;d have to find and update every{" "}
            <code className="bg-amber-200/50 dark:bg-amber-800/50 px-1 rounded">
              bg-blue-600
            </code>{" "}
            in your codebase.
          </Callout>
          <Code>{`// Level 1: Just HTML. You style everything by hand.
<button>Unstyled</button>
<button className="bg-blue-600 px-4 py-2 ...">Styled</button>

// Problems:
// - Colors are hardcoded (bg-blue-600) — not connected to any design system
// - You copy-paste styling for every button in your app
// - No concept of "variants" (primary, outline, ghost, etc.)
// - No disabled styling unless you write it yourself`}</Code>
        </div>

        {/* Level 2: Base UI */}
        <div className="space-y-3 rounded-lg border p-4">
          <div className="flex items-center gap-2">
            <h3 className="font-medium">Level 2: Base UI (Headless)</h3>
            <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs text-purple-800 dark:bg-purple-900 dark:text-purple-200">
              Base UI
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <BaseUIButton
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
              onClick={() => alert("Click went through!")}
            >
              Enabled — Click Me
            </BaseUIButton>
            <BaseUIButton
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
              disabled
              onClick={() => alert("You should never see this!")}
            >
              Disabled — Click Me
            </BaseUIButton>
          </div>
          <Callout>
            <strong>Try clicking both.</strong> The enabled one fires an alert.
            The disabled one blocks the click — that&apos;s Base UI working. But
            notice they <strong>look identical</strong>. Same blue, same hover
            state. Base UI adds a{" "}
            <code className="bg-amber-200/50 dark:bg-amber-800/50 px-1 rounded">
              data-disabled
            </code>{" "}
            attribute to the DOM so you <em>could</em> style it differently —
            but it won&apos;t do it for you. That&apos;s the &quot;headless&quot; part:
            behavior without opinions on appearance.
          </Callout>
          <Code>{`import { Button } from "@base-ui/react/button"

<Button onClick={() => alert("Clicked!")}>Enabled</Button>
<Button onClick={() => alert("Nope")} disabled>Disabled</Button>

// What Base UI adds over raw <button>:
// ✓ Blocks click events when disabled (even on <a> tags)
// ✓ Adds data-disabled to the DOM (you write CSS to style it)
// ✓ Proper aria-disabled for screen readers
// ✓ render prop — render as <a>, <Link>, anything
//
// What it does NOT add:
// ✗ No visual styling whatsoever
// ✗ Disabled button looks identical to enabled
// ✗ No variant system, no design tokens`}</Code>
        </div>

        {/* Level 3: shadcn */}
        <div className="space-y-3 rounded-lg border p-4">
          <div className="flex items-center gap-2">
            <h3 className="font-medium">Level 3: shadcn (The Full Package)</h3>
            <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              shadcn
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button>Default</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button disabled>Disabled</Button>
          </div>
          <Callout color="blue">
            <strong>Notice the disabled button actually looks disabled</strong>{" "}
            — it&apos;s faded out with{" "}
            <code className="bg-blue-200/50 dark:bg-blue-800/50 px-1 rounded">
              opacity-50
            </code>{" "}
            and the cursor changes. That&apos;s shadcn&apos;s styling layer. Also notice:
            every color comes from CSS variables like{" "}
            <code className="bg-blue-200/50 dark:bg-blue-800/50 px-1 rounded">
              --primary
            </code>
            , not hardcoded values. If design pushes a new brand color from
            Figma, <strong>every button in every app updates</strong> — zero
            code changes needed.
          </Callout>
          <Code>{`import { Button } from "@/components/ui/button"

<Button>Default</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>
<Button size="sm">Small</Button>
<Button disabled>Disabled</Button>

// What shadcn adds on top of the headless primitive:
// ✓ 6 visual variants — one prop, totally different looks
// ✓ 4 sizes — xs, sm, default, lg
// ✓ All colors from CSS vars (--primary, --secondary, etc.)
// ✓ Disabled state is visually obvious (opacity, cursor)
// ✓ Focus ring styled with --ring token
// ✓ Border radius from --radius token
// ✓ Dark mode built in
//
// Under the hood it's still a Base UI Button — all the
// accessibility stuff still works. shadcn just added the paint.`}</Code>
        </div>
      </div>

      {/* ================================================================= */}
      {/* DIALOG — WHERE IT REALLY MATTERS */}
      {/* ================================================================= */}
      <div className="rounded-xl border p-6 space-y-6">
        <div>
          <h2 className="text-xl font-semibold">
            Dialog — Where Headless Really Matters
          </h2>
          <p className="text-muted-foreground text-sm mt-1">
            A button is simple — the headless layer doesn&apos;t add much. But a
            dialog has <em>tons</em> of invisible behavior. This is where the
            headless primitive earns its keep.
          </p>
        </div>

        {/* Raw Radix Dialog */}
        <div className="space-y-3 rounded-lg border p-4">
          <div className="flex items-center gap-2">
            <h3 className="font-medium">Level 1: Raw Radix Dialog</h3>
            <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs text-purple-800 dark:bg-purple-900 dark:text-purple-200">
              Headless
            </span>
          </div>
          <div className="flex items-center gap-3">
            <DialogPrimitive.Root>
              <DialogPrimitive.Trigger className="rounded-lg border px-4 py-2 text-sm hover:bg-muted">
                Open Raw Dialog
              </DialogPrimitive.Trigger>
              <DialogPrimitive.Portal>
                <DialogPrimitive.Overlay />
                <DialogPrimitive.Content
                  style={{
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    background: "white",
                    color: "black",
                    padding: "24px",
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    zIndex: 100,
                    maxWidth: "400px",
                    width: "90%",
                  }}
                >
                  <DialogPrimitive.Title
                    style={{ fontWeight: "bold", fontSize: 16, marginBottom: 8 }}
                  >
                    Raw Radix Dialog
                  </DialogPrimitive.Title>
                  <DialogPrimitive.Description
                    style={{ fontSize: 14, color: "#666", lineHeight: 1.5 }}
                  >
                    This is a fully working dialog. Try pressing Escape. Try
                    pressing Tab repeatedly — focus stays trapped inside. A
                    screen reader would announce this correctly. But we had to
                    write every line of inline CSS by hand.
                  </DialogPrimitive.Description>
                  <div style={{ marginTop: 16, display: "flex", justifyContent: "flex-end" }}>
                    <DialogPrimitive.Close
                      style={{
                        padding: "6px 16px",
                        border: "1px solid #ccc",
                        borderRadius: 6,
                        cursor: "pointer",
                        fontSize: 14,
                      }}
                    >
                      Close
                    </DialogPrimitive.Close>
                  </div>
                </DialogPrimitive.Content>
              </DialogPrimitive.Portal>
            </DialogPrimitive.Root>
          </div>
          <Callout color="purple">
            <strong>Open it and try these things:</strong>
            <br />
            1. Press <strong>Escape</strong> — it closes. Radix handles that.
            <br />
            2. Press <strong>Tab</strong> repeatedly — focus stays inside the
            dialog, never escapes to the page behind it. Radix handles that.
            <br />
            3. Notice there&apos;s <strong>no dark overlay</strong> behind the
            dialog — we didn&apos;t style the overlay. Radix rendered it, but
            without CSS it&apos;s invisible.
            <br />
            4. Notice there&apos;s <strong>no X close button</strong> — we&apos;d have to
            add that ourselves.
            <br />
            <br />
            This is the tradeoff: Radix gives you all the hard stuff for free (focus
            trap, keyboard, ARIA), but you style everything yourself.
          </Callout>
          <Code>{`import { Dialog } from "radix-ui"

<Dialog.Root>
  <Dialog.Trigger>Open</Dialog.Trigger>
  <Dialog.Portal>
    <Dialog.Overlay />          ← invisible without CSS
    <Dialog.Content style={...}> ← we wrote all the CSS
      <Dialog.Title>Title</Dialog.Title>
      <Dialog.Description>...</Dialog.Description>
      <Dialog.Close>Close</Dialog.Close>
    </Dialog.Content>
  </Dialog.Portal>
</Dialog.Root>

// What Radix gave us for free (all invisible):
// ✓ Focus trap — Tab can't leave the dialog
// ✓ Escape to close
// ✓ Click outside to close
// ✓ Body scroll lock
// ✓ ARIA: role="dialog", aria-labelledby, aria-describedby
// ✓ Portal (renders at end of <body> to avoid z-index issues)
// ✓ Returns focus to trigger button when closed
//
// What we had to do ourselves:
// ✗ All the positioning (fixed, top 50%, translate)
// ✗ Background, border, padding, border-radius
// ✗ No overlay dimming (it's there but invisible)
// ✗ No close icon (X button)
// ✗ No animations
// ✗ All hardcoded colors — no design tokens`}</Code>
        </div>

        {/* shadcn Dialog */}
        <div className="space-y-3 rounded-lg border p-4">
          <div className="flex items-center gap-2">
            <h3 className="font-medium">Level 2: shadcn Dialog</h3>
            <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              shadcn
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Dialog>
              <DialogTrigger asChild>
                <Button>Open shadcn Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>shadcn Dialog</DialogTitle>
                  <DialogDescription>
                    Same Radix engine underneath — focus trap, Escape, ARIA, all
                    of it. But now everything is styled, animated, and connected
                    to design tokens. We wrote zero CSS.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button variant="outline">Cancel</Button>
                  <Button>Save</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <Callout color="blue">
            <strong>Compare this to the raw dialog above:</strong>
            <br />
            1. <strong>Dark overlay</strong> fades in behind the dialog — styled
            and animated.
            <br />
            2. <strong>X close button</strong> in the top-right corner —
            included automatically.
            <br />
            3. <strong>Fade + zoom animation</strong> on open and close.
            <br />
            4. <strong>Footer buttons</strong> are automatically right-aligned on
            desktop, stacked on mobile.
            <br />
            5. All colors come from CSS variables —{" "}
            <code className="bg-blue-200/50 dark:bg-blue-800/50 px-1 rounded">
              --background
            </code>
            ,{" "}
            <code className="bg-blue-200/50 dark:bg-blue-800/50 px-1 rounded">
              --border
            </code>
            ,{" "}
            <code className="bg-blue-200/50 dark:bg-blue-800/50 px-1 rounded">
              --radius
            </code>
            . Design changes tokens → this dialog updates automatically.
            <br />
            <br />
            <strong>
              All the Radix behavior still works identically
            </strong>{" "}
            (try Escape and Tab). shadcn just added the visual layer.
          </Callout>
          <Code>{`import { Dialog, DialogContent, ... } from "@/components/ui/dialog"

<Dialog>
  <DialogTrigger asChild>
    <Button>Open</Button>
  </DialogTrigger>
  <DialogContent>            ← all styling pre-built
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>...</DialogDescription>
    </DialogHeader>
    <DialogFooter>           ← responsive layout built in
      <Button variant="outline">Cancel</Button>
      <Button>Save</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>

// Same Radix behavior (focus, Escape, ARIA) PLUS:
// ✓ Animated overlay (fade in/out)
// ✓ Dialog zoom animation (scale in/out)
// ✓ X close button with hover state
// ✓ All colors from design tokens (not hardcoded)
// ✓ Responsive footer (stacks on mobile)
// ✓ Dark mode works automatically
//
// The code? It's in YOUR repo at components/ui/dialog.tsx.
// You can open it and change anything.`}</Code>
        </div>
      </div>

      {/* ================================================================= */}
      {/* THE REAL POINT — WHY THIS MATTERS FOR CDS */}
      {/* ================================================================= */}
      <div className="rounded-xl border bg-muted/30 p-6 space-y-4">
        <h2 className="text-lg font-semibold">So Why Does This Matter for Us?</h2>
        <Callout color="emerald">
          <strong>The key insight:</strong> Because shadcn components use CSS
          variables instead of hardcoded colors, we can control how every
          component looks across every app from <strong>one place</strong> —
          the design tokens in Figma. Designer changes a color → it flows through
          the pipeline → every Button, Dialog, Card, Input in every product app
          picks up the new value. No engineer touches any component code.
        </Callout>
        <div className="text-sm space-y-2 text-muted-foreground">
          <p>
            Without this system, changing the brand&apos;s primary color means
            finding and updating{" "}
            <code className="bg-muted px-1 rounded">bg-blue-600</code> in
            hundreds of files across multiple repos. With this system, it&apos;s
            one token change in Figma.
          </p>
          <p>
            That&apos;s why we don&apos;t use Base UI / Radix directly — we&apos;d lose the
            token system, the variant system, the consistent styling, and the
            registry distribution. We&apos;d be reinventing what shadcn already
            built.
          </p>
        </div>
      </div>

      {/* ================================================================= */}
      {/* TLDR */}
      {/* ================================================================= */}
      <div className="rounded-xl border p-6 space-y-4">
        <h2 className="text-lg font-semibold">TL;DR</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 pr-4 font-medium">Layer</th>
                <th className="text-left py-2 pr-4 font-medium">What It Does</th>
                <th className="text-left py-2 font-medium">Analogy</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b">
                <td className="py-2 pr-4 font-medium text-purple-600 dark:text-purple-400">
                  Base UI / Radix
                </td>
                <td className="py-2 pr-4">
                  Accessibility, keyboard nav, focus trap, ARIA. No styling.
                </td>
                <td className="py-2">The engine</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 pr-4 font-medium text-blue-600 dark:text-blue-400">
                  shadcn
                </td>
                <td className="py-2 pr-4">
                  Tailwind styling, variants, design tokens. Wraps the primitives.
                  Distributes as source code via CLI.
                </td>
                <td className="py-2">The body &amp; paint</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium text-emerald-600 dark:text-emerald-400">
                  CDS Registry
                </td>
                <td className="py-2 pr-4">
                  Our registry with Chainalysis tokens from Figma. Design pushes
                  tokens → every app updates.
                </td>
                <td className="py-2">The dealership</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
