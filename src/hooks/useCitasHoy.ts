import { useQuery } from "react-query";
import { API_URL } from "../consts";
import { Appointment } from "../types";

const fetchCitas = () =>
  fetch(`${API_URL}/appointments/today`).then((res) => res.json());

export default function useCitasHoy() {
  const { data, isLoading, refetch } = useQuery<Appointment[]>({
    queryFn: fetchCitas,
    queryKey: ["citas", "hoy"],
  });

  return {
    citas: isLoading ? [] : data!,
    reloadCitas: refetch,
  };
}
