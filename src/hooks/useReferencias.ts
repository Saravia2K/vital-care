import { useQuery } from "react-query";
import { API_URL } from "../consts";
import { Appointment } from "../types";

const fetchCitas = (id: string) =>
  fetch(`${API_URL}/appointments/referred/${id}`).then((res) => res.json());

export default function useReferencias() {
  const id = window.sessionStorage.getItem("doctorId");
  const { data, isLoading, refetch } = useQuery<Appointment[]>({
    queryFn: () => fetchCitas(id!),
    queryKey: ["citas", "referidos"],
  });

  return {
    citas: isLoading ? [] : data!,
    reloadCitas: refetch,
  };
}
