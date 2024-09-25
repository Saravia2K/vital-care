import { useQuery } from "react-query";
import { API_URL } from "../consts";
import { Doctor } from "../types";

const fetchDoctors = () =>
  fetch(`${API_URL}/doctors`).then((res) => res.json());

export default function useDoctores() {
  const { data, isLoading, refetch } = useQuery<Doctor[]>({
    queryFn: fetchDoctors,
    queryKey: ["doctores"],
  });

  return {
    doctores: isLoading ? [] : data!,
    reloadDoctores: refetch,
  };
}
