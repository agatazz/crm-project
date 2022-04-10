import { Team } from "./team";

export class Department{
    id: number;
    name: string;
    description: string;
    team: Team[];

    constructor(id = 0, name = '', description = '', team = []) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.team = team;
    }
}