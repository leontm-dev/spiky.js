export declare class Spiky {
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
    constructor(fileName: string, projectName: string);
    addComment(comment: string): void;
    render(): void;
}
