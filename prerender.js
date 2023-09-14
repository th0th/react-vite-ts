import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { readdirSync, readFileSync } from "node:fs";
import { mkdirSync, writeFileSync } from "node:fs";

const __dirname = dirname(fileURLToPath(import.meta.url));

const template = readFileSync("dist/static/index.html", "utf-8");
const { render } = await import("./dist/server/entry-server.js");

/** @type {Array<string>} */
const routesToPrerender = readdirSync("src/pages", { recursive: true })
  .filter((file) => file.endsWith(".tsx"))
  .map((file) => {
    const path = `/${file.slice(0, -4)}`;

    if (path === "/index") {
      return "/";
    } else if (path.endsWith("/index")) {
      return path.slice(0, -6);
    } else {
      return path;
    }
  });

async function prerender() {
  routesToPrerender.forEach((route) => {
    const filePath = join(__dirname, "dist", "static", `${route === "/" ? "index" : route}.html`);

    mkdirSync(dirname(filePath), { recursive: true });

    const appHtml = render(route);
    const html = template.replace(`<!--app-html-->`, appHtml);

    writeFileSync(filePath, html);
  });
}

await prerender();
