import { useQuery } from "react-query";
import { API_URL } from "../consts";
import { Appointment } from "../types";

const fetchCitas = () =>
  fetch(`${API_URL}/appointments`).then((res) => res.json());

export default function useCitas() {
  const { data, isLoading, refetch } = useQuery<Appointment[]>({
    queryFn: fetchCitas,
    queryKey: ["citas"],
  });

  return {
    citas: isLoading ? [] : data!,
    reloadCitas: refetch,
  };
}
