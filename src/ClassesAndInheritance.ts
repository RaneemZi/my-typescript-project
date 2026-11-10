import { UserRole } from "./UserRole";
import { Users } from "./interface";

abstract class User implements Users.IUser {
    name: string;
    phone: string;
    dateOfBirth: Date;
    role: UserRole;

  constructor(name: string, phone: string, dateOfBirth: Date, role: UserRole = UserRole.User) {
    this.name = name;
    this.phone = phone;
    this.dateOfBirth = dateOfBirth;
    this.role = role;

    if(dateOfBirth > new Date()) {
        throw new Error("Date of birth cannot be in the future");
    }
  }

    calculateAge(): number {
        const today = new Date();
        let age = today.getFullYear() - this.dateOfBirth.getFullYear();
        const monthDifference = today.getMonth() - this.dateOfBirth.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < this.dateOfBirth.getDate())) {
            age--;
        }
        return age;
    }

    get Name(): string {
        return this.name;
         }

    set Name(name: string) {
        this.name = name;
         }

    get Phone(): string {
        return this.phone; 
          }

    set Phone(phone: string) {
        this.phone = phone;
          }
    get DateOfBirth(): Date {
        return this.dateOfBirth;
          }
    set DateOfBirth(dateOfBirth: Date) {
        if(dateOfBirth > new Date()) {
            throw new Error("Date of birth cannot be in the future");
        }
        this.dateOfBirth = dateOfBirth;
          }

          displayInfo(): void {
            console.log(`Name: ${this.name}`);
            console.log(`Phone: ${this.phone}`);
            console.log(`Date of Birth: ${this.dateOfBirth.toDateString()}`);
            console.log(`Age: ${this.calculateAge()}`);
            console.log(`Role: ${this.role}`);
          }
}

  class Employee extends User implements Users.IEmployee {
     employeeId: number
     salary: number

    constructor(name: string, phone: string, dateOfBirth: Date, employeeId: number, salary: number) {
      super(name, phone, dateOfBirth, UserRole.Employee);
      this.employeeId = employeeId;
      this.salary = salary;
    }
    get EmployeeId(): number {
            return this.employeeId;
        }
    set EmployeeId(employeeId: number) {
            this.employeeId = employeeId;
        }
    get Salary(): number {
            return this.salary;
        }
    set Salary(salary: number) {
            this.salary = salary;
        }

    calculateBonus(): number {
            return this.salary * 0.1; // 10% bonus
        }

    displayInfo(): void {
            super.displayInfo();
            console.log(`Employee ID: ${this.employeeId}`);
            console.log(`Salary: $${this.salary.toFixed(2)}`);
        }
}

class Student extends User implements Users.IStudent {
     studentId: number
     marks: number[] 
     gpa: number

    constructor(name: string, phone: string, dateOfBirth: Date, studentId: number, marks: number[], gpa: number) {
      super(name, phone, dateOfBirth, UserRole.Student);
      this.studentId = studentId;
      this.marks = marks;
      this.gpa = gpa;

      this.validateMarks(marks);
      this.marks = [...marks];
    }

    get StudentId(): number {
            return this.studentId;
        }
    set StudentId(studentId: number) {
            this.studentId = studentId;
        }
    get GPA(): number {
            return this.gpa;
        }
    set GPA(gpa: number) {
        if (gpa < 0 || gpa > 100) {
        throw new Error("GPA must be between 0 and 100");
    }
            this.gpa = gpa;
        }

     validateMarks(marks: number[]): void {
    if (!marks.every(mark => mark >= 0 && mark <= 100)) {
        throw new Error("All marks must be between 0 and 100");
    }
}
     calculateGPA(): number {
              if (this.marks.length === 0) {
        throw new Error("Marks array cannot be empty"); }
            const total = this.marks.reduce((sum, mark) => sum + mark, 0);
            this.gpa = total / this.marks.length;
            return this.gpa;
        }

    displayInfo(): void {
            super.displayInfo();
            console.log(`Student ID: ${this.studentId}`);
            console.log(`Marks: ${this.marks.join(", ")}`);
            console.log(`GPA: ${this.calculateGPA().toFixed(2)}`);
            console.log(`Role: ${this.role}`);
        }
}

const employee1 = new Employee("ٌRaneem Zialnoon", "123-456-7890", new Date(2003, 6, 16), 101, 50000);
const student1 = new Student("Dana Zialnoon", "987-654-3210", new Date(2007, 11, 12), 202, [85, 80, 78], 0);

function displayUsers<T extends User>(users: T[]): void {
    users.forEach(user => {
        console.group(user.role);

        user.displayInfo();

        console.groupEnd();
    });
}

const users: User[] = [
    employee1,
    student1
];

displayUsers(users);