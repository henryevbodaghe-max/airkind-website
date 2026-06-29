import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { extname, join, relative } from "node:path";

const root = process.cwd();
const scanRoots = ["app", "components", "lib", "public"];
const scanExtensions = new Set([".ts", ".tsx", ".js", ".jsx", ".json", ".html", ".css", ".md", ".txt", ".xml"]);
const ignoredDirs = new Set([".next", "node_modules", "outputs", ".git"]);
const allowedPhrases = [
  "diagnose, treat, cure, or prevent any disease",
  "not intended to diagnose, treat, cure, or prevent any disease",
  "avoids diagnosis, treatment, cure, or prevention language"
];

const restrictedWords = ["cure", "treat", "prevent", "heal", "insomnia", "anxiety", "depression", "cancer"];
const comparisonTerms = [["3", "x", "\\s+hydration"].join(""), ["Liquid", " I", ".", "V", "."].join("")];
const purchaseTerms = ["buy Hydration", "shop Hydration", "purchase Hydration"];
const restricted = new RegExp(
  `\\b(${restrictedWords.join("|")})\\b|FDA approved|${comparisonTerms.join("|")}|${purchaseTerms.join("|")}`,
  "i"
);

function collectFiles(dir) {
  const files = [];

  for (const entry of readdirSync(dir)) {
    if (ignoredDirs.has(entry)) continue;

    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      files.push(...collectFiles(fullPath));
    } else if (scanExtensions.has(extname(entry))) {
      files.push(fullPath);
    }
  }

  return files;
}

const violations = [];

for (const scanRoot of scanRoots) {
  const absoluteRoot = join(root, scanRoot);
  if (!existsSync(absoluteRoot)) continue;

  for (const file of collectFiles(absoluteRoot)) {
    let text = readFileSync(file, "utf8");

    for (const phrase of allowedPhrases) {
      text = text.replaceAll(phrase, "");
    }

    const match = text.match(restricted);
    if (match) {
      violations.push(`${relative(root, file)}: ${match[0]}`);
    }
  }
}

if (violations.length) {
  console.error("Compliance scan failed:");
  for (const violation of violations) {
    console.error(`- ${violation}`);
  }
  process.exit(1);
}

console.log("Compliance scan passed.");
