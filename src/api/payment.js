import { useState, useEffect } from "react";
import { createAxiosInstance } from "./config";

export const useFetchPayments = (input, reload) => {
  const [data, setData] = useState();
  useEffect(() => {
    async function fetchData() {
      createAxiosInstance()
        .get(`payments/getPayments/${input.data.userId}`)
        .then((res) => {
          setData(res.data);
        });
    }
    fetchData();
  }, [reload]);
  return data;
};

export const useFetchMetrics = (id) => {
  const [data, setData] = useState();
  useEffect(() => {
    async function fetchData() {
      createAxiosInstance()
        .get(`payments/getMetrics/${id.data.userId}`)
        .then((res) => {
          setData(res.data);
        });
    }
    fetchData();
  }, []);
  return data;
};

export const updatePayment = async (id, input) => {
  console.log(input);
  const res = await createAxiosInstance().put(
    `payments/updatePayment/${id}`,
    input
  );
  const { data } = res;
  return data;
};
