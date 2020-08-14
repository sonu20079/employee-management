
export interface EmployeeData {
    id: string;
    name: string;
    company_name: string;
    email: string;
    contact_no: string;
    designation: Designation; 
  }

  export enum Designation {
      SoftwareDeveloper =  'Software Developer',
      SeniorSoftwareDeveloper =  'Senior Software Developer',
      QualityAssurance =  'Quality Assurance',
      TeamLead =  'Team Lead',
      Manager =  'Manager',
  }

  export const DESIGNATIONS  = [Designation.SoftwareDeveloper, Designation.SeniorSoftwareDeveloper, Designation.QualityAssurance, Designation.TeamLead, Designation.Manager]