import { useQuery } from "react-query";
import { API_URL } from "../consts";
import { Appointment } from "../types";

const fetchPatient = (id: number) =>
  fetch(`${API_URL}/patients/${id}`).then((res) => res.json());

export default function usePaciente(id: number) {
  const { data, refetch } = useQuery<Response>({
    queryFn: () => fetchPatient(id),
    queryKey: ["patients", id],
    staleTime: Infinity,
  });

  return {
    patient: data,
    reloadPatient: refetch,
  };
}

type Response = {
  id_patient: number;
  first_name: string;
  second_name: string;
  first_last_name: string;
  second_last_name: string;
  sex: "M" | "F";
  birthdate: string;
  address: string;
  email: string;
  cellphone: string;
  blood_type: string;
  appointments: Appointment[];
};
