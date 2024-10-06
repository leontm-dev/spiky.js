// Imports

import * as fs from "fs";
export class Spiky {
  readonly imports: string[];
  readonly code: string[];
  readonly comments: string[];
  fileName: string;
  projectName: string;
  /**
   * This class is used to export all the code to a file.
   * @param fileName The name of the file in which all the code will be exported.
   * @param projectName The name of the project.
   */
  constructor(fileName: string, projectName: string) {
    this.imports = [];
    this.code = [];
    this.comments = [];
    this.fileName = fileName;
    this.projectName = projectName;
  }
  addComment(comment: string) {
    this.comments.push(`#${comment}`);
  }
  render() {
    const imports = this.imports.join("\n");
    const comments = this.comments.join("\n");
    const code = this.code.join("\n");
    const fileContent = `#${this.projectName}\n\n${comments}\n\n${imports}\n\n${code}`;
    fs.writeFileSync(`${this.fileName}.py`, fileContent);
  }
}
