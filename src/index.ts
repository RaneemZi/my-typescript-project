abstract class User {
    name: string;
    phone: string;
    dateOfBirth: Date;

  constructor(name: string, phone: string, dateOfBirth: Date) {
    this.name = name;
    this.phone = phone;
    this.dateOfBirth = dateOfBirth;
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
        this.dateOfBirth = dateOfBirth;
          }
}

  class employee extends User {
    employeeId: number
    salary: number

    constructor(name: string, phone: string, dateOfBirth: Date, employeeId: number, salary: number) {
      super(name, phone, dateOfBirth);
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
}

class Student extends User {
    studentId: number
    marks: number[]
    gpa: number

    constructor(name: string, phone: string, dateOfBirth: Date, studentId: number,marks: number[], gpa: number) {
      super(name, phone, dateOfBirth);
      this.studentId = studentId;
      this.marks = marks;
      this.gpa = gpa;
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
            this.gpa = gpa;
        }

        calculateGPA(): number {
            const total = this.marks.reduce((sum, mark) => sum + mark, 0);
            this.gpa = total / this.marks.length;
            return this.gpa;
        }

}

const employee1 = new employee("ٌRaneem Zialnoon", "123-456-7890", new Date(2003, 6, 16), 101, 50000);
const student1 = new Student("Dana Zialnoon", "987-654-3210", new Date(2007, 11, 12), 202, [85, 90, 78], 0);

console.table([
    {
        type: "Employee",
        name: employee1.Name,
        phone: employee1.Phone,
        age: employee1.calculateAge()
    },
    {
        type: "Student",
        name: student1.Name,
        phone: student1.Phone,
        age: student1.calculateAge(),
        GPA: student1.calculateGPA()
    }
]);

