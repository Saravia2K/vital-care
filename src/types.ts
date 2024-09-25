export type Patient = {
  id_patient: number;
  first_name: string;
  second_name?: string;
  first_last_name: string;
  second_last_name?: string;
  sex: string;
  birthdate: string | Date;
  email: string;
  cellphone: string;
  blood_type: string;
  address: string;
};
