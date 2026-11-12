export namespace Users {

export interface IUser {
    Name: string;
    Phone: string;
    DateOfBirth: Date;
    Role: string;

    calculateAge(): number;
    displayInfo(): void;
}

export interface IStudent {
    StudentId: number;
    Marks: number[];

    calculateGPA(): number;
    validateMarks(marks: number[]): void;
}

export interface IEmployee {
    EmployeeId: number;
    Salary: number;
    calculateBonus(): number;
    displayInfo(): void;
}
}