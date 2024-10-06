import { Spiky } from "..";

export function writeLine(
  line: string,
  type: "comments" | "code" | "imports"
): void {
  switch (type) {
    case "comments":
      Spiky.prototype.comments.push(line);
      break;
    case "code":
      Spiky.prototype.code.push(line);
      break;
    case "imports":
      Spiky.prototype.imports.push(line);
      break;
  }
}
