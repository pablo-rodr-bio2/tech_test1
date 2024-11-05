import { useQuery } from "@tanstack/react-query";
import { DB_URL } from "../utils/constants";

const fetchMeetups = async () => {
  const response = await fetch(DB_URL);
  const data = await response.json();
  return data;
}

export const useMeetupQuery = () => 
  useQuery({
    queryKey: ['meetups'],
    queryFn: fetchMeetups,
  })
