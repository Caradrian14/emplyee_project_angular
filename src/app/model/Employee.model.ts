export class LoginModel {
    emailId: string;
    password: string;

    constructor() {
        this.emailId = '';
        this.password = '';
    }
}

export interface APIResponseModel{
    message: "",
    result: true,
    data: any 
}

export interface EmployeeList {
    "employeeId":number,
    "employeeName": string,
    "deptId": number,
    "deptName": string,
    "contactNo": string,
    "emailId": string,
    "role": string 
}

export class EmployeeModel {
    employeeId:number
    employeeName: string
    contactNo: string
    emailId: string
    deptId: string
    password:string
    gender:string
    role: string 

    constructor() {
        this.contactNo = '';
        this.deptId = '';
        this.emailId = '';
        this.employeeId = 0;
        this.gender = '';
        this.employeeName = '';
        this.password = '';
        this.role = '';
    }
}