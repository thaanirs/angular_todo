import { Guid } from "guid-typescript";
export class Task {
    id !: Guid;
    task !: string;
    isCompleted !: boolean;
}
