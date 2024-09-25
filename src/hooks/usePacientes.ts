import { useQuery } from "react-query";
import { API_URL } from "../consts";

const fetchPatients = () =>
  fetch(`${API_URL}/patients`).then((res) => res.json());

export default function usePatients() {
  const { data, isLoading, refetch } = useQuery<Response>({
    queryFn: fetchPatients,
    queryKey: ["patients"],
  });

  return {
    patients: isLoading ? [] : data!,
    reloadPatients: refetch,
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
}[];
