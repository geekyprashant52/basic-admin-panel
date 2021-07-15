import { useEffect, useState } from "react";

export default function useChangeDetails(data) {
  const [details, setDetails] = useState({});

  const change = () => {
    setDetails(data);
  };
  useEffect(() => {
    change();
  }, data);
  return {
    details,
  };
}
