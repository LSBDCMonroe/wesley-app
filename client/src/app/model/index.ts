export interface Line {x: number; y: number; }
export interface Position { prevPos: Line; currentPos: Line; }

export interface User {
    firstName: string;
    lastName: string;
    email: string;
    classification ?: number;
    signature: Position[];
}