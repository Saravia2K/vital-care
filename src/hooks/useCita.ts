import { useQuery } from "react-query";
import { API_URL } from "../consts";
import { Appointment } from "../types";

const fetchCita = (id: number) =>
  fetch(`${API_URL}/appointments/${id}`).then((res) => res.json());

export default function useCita(id: number) {
  const { data, refetch } = useQuery<Appointment>({
    queryFn: () => fetchCita(id),
    queryKey: ["patients", id],
  });

  return {
    cita: data,
    reloadCita: refetch,
  };
}
