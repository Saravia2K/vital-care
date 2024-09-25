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

export type Doctor = {
  id_doctor: number;
  names: string;
  last_names: string;
  email: string;
  specialty: { id_speciality: number; name: string };
};

export type Appointment = {
  id_appointment: number;
  date: string;
  patient: Patient;
  doctor: Doctor;
  diagnosis: string | null;
  treatment: string | null;
  observations: string | null;
  reference: Reference | null;
  finished: boolean;
};

export type Reference = {
  id_reference: number;
  from_doctor: Doctor;
  to_doctor: Doctor;
  comments: string;
};
