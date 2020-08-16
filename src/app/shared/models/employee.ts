import { EmployeeData, Designation } from '../dataTypes';

export class Employee implements EmployeeData {
    id: string;
    name: string;
    company_name: string;
    email: string;
    contact_no: string;
    designation: Designation; 
    avatar?: string; 
    constructor(data: EmployeeData) {
        this.id = data.id;
        this.name = data.name;
        this.company_name = data.company_name;
        this.email = data.email;
        this.contact_no = data.contact_no;
        this.designation = data.designation;
        this.avatar = data.avatar;
    }
}
