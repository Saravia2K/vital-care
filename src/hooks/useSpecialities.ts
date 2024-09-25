import { useQuery } from "react-query";
import { API_URL } from "../consts";

const fetchSpecialities = () =>
  fetch(`${API_URL}/specialities`).then((res) => res.json());

export default function useSpecialities() {
  const { data, isLoading } = useQuery<Response>({
    queryFn: fetchSpecialities,
    queryKey: ["specialities"],
    staleTime: Infinity,
  });

  return isLoading ? [] : data!;
}

type Response = {
  id_speciality: string;
  name: string;
}[];
