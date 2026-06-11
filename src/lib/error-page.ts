export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>This page didn't load</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root {
        --background: #ffffff;
        --foreground: #1a1a2e;
        --muted: #5c5c6f;
        --primary: #534ab7;
        --primary-hover: #3c3489;
        --primary-foreground: #ffffff;
        --border: #e8e8ef;
      }
      @media (prefers-color-scheme: dark) {
        :root {
          --background: #14141f;
          --foreground: #f2f2f7;
          --muted: #a0a0b0;
          --primary: #8b83e8;
          --primary-hover: #a59ef0;
          --primary-foreground: #14141f;
          --border: #2e2e3d;
        }
      }
      body {
        font: 15px/1.5 ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        background: var(--background);
        color: var(--foreground);
        display: grid;
        place-items: center;
        min-height: 100vh;
        margin: 0;
        padding: 1.5rem;
      }
      .card { max-width: 28rem; width: 100%; text-align: center; padding: 2rem; }
      h1 { font-size: 1.25rem; font-weight: 500; margin: 0 0 0.5rem; }
      p { color: var(--muted); margin: 0 0 1.5rem; }
      .actions { display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; }
      a, button {
        padding: 0.5rem 1rem;
        border-radius: 0.375rem;
        font: inherit;
        cursor: pointer;
        text-decoration: none;
        border: 1px solid transparent;
      }
      .primary { background: var(--primary); color: var(--primary-foreground); }
      .primary:hover { background: var(--primary-hover); }
      .secondary { background: var(--background); color: var(--foreground); border-color: var(--border); }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>This page didn't load</h1>
      <p>Something went wrong on our end. You can try refreshing or head back home.</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">Try again</button>
        <a class="secondary" href="/">Go home</a>
      </div>
    </div>
  </body>
</html>`;
}
