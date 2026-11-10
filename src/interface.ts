export namespace Users {

export interface IUser {
    name: string;
    phone: string;

    calculateAge(): number;
    displayInfo(): void;
}

export interface IStudent {
    studentId: number;
    marks: number[];

    calculateGPA(): number;
    validateMarks(marks: number[]): void;
}

export interface IEmployee {
    employeeId: number;
    salary: number;
    calculateBonus(): number;
    displayInfo(): void;
}
}