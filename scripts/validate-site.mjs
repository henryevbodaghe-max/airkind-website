import { readdirSync, readFileSync, statSync } from "node:fs";
import { extname, join } from "node:path";

const root = process.cwd();
const diseaseTerms = ["cure", "treat", "prevent", "reverse", "cancer"];
const allowedDisclaimer =
  "These statements have not been evaluated by the Food and Drug Administration. AirKind products are not intended to diagnose, treat, cure, or prevent any disease.";
const requiredFiles = [
  "index.html",
  "product-mushroom.html",
  "product-quercetin.html",
  "robots.txt",
  "sitemap.xml",
  "images/optimized/airkind-logo-brand.webp",
  "images/optimized/quercetin-plus-bottle-front-product.webp"
];

function walk(dir) {
  return readdirSync(dir).flatMap((entry) => {
    const path = join(dir, entry);
    if (entry === "node_modules" || entry === ".git" || entry === ".next" || entry === ".vercel") {
      return [];
    }
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

for (const file of requiredFiles) {
  statSync(join(root, file));
}

const textFiles = walk(root).filter((file) => [".html", ".txt", ".xml"].includes(extname(file)));
const findings = [];

for (const file of textFiles) {
  const raw = readFileSync(file, "utf8");
  const normalized = raw.replaceAll(allowedDisclaimer, "");
  for (const term of diseaseTerms) {
    const pattern = new RegExp(`\\b${term}\\b`, "i");
    if (pattern.test(normalized)) {
      findings.push(`${file.replace(`${root}/`, "")}: ${term}`);
    }
  }
}

if (findings.length > 0) {
  console.error("Potential disease-claim terms found outside the FDA disclaimer:");
  for (const finding of findings) {
    console.error(`- ${finding}`);
  }
  process.exit(1);
}

console.log("Static site validation passed.");
console.log("No cure/treat/prevent/reverse/cancer terms found outside the FDA disclaimer.");
