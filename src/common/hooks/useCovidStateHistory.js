import { useEffect, useState } from "react";
import { STATE_WISE_HISTORIC_DATA } from "../../constants/URI";
import useAxiosWithCallback from "./useAxiosWithCallback";

export function useCovidStateHistory() {
  const { isLoading, error, fetchData } = useAxiosWithCallback();
  const [data, setData] = useState();

  useEffect(() => {
    const applyData = (data) => {
      setData(data);
    };
    const fetchChannels = async () => {
      await fetchData(
        {
          url: STATE_WISE_HISTORIC_DATA,
        },
        applyData
      );
    };
    fetchChannels();
  }, [fetchData]);

  return { isLoading, data, error };
}
