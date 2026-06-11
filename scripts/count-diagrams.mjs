import fs from "fs";
import path from "path";

const lib = "src/lib";
const one = [];
const zero = [];
for (const d of fs.readdirSync(lib)) {
  if (!d.startsWith("concepts-bl-pb") && !d.startsWith("concepts-founder")) continue;
  if (!fs.statSync(path.join(lib, d)).isDirectory()) continue;
  for (const f of fs.readdirSync(path.join(lib, d))) {
    if (!f.startsWith("chapter-")) continue;
    const c = fs.readFileSync(path.join(lib, d, f), "utf8");
    const n = (c.match(/kind: "diagram"/g) || []).length;
    if (n === 0) zero.push(`${d}/${f}`);
    if (n === 1) one.push(`${d}/${f}`);
  }
}
console.log("zero:", zero.length, zero);
console.log("one:", one.length, one);
