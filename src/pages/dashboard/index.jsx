import { useFetchMetrics } from "api/payment";

export const Dashboard = () => {
  const metrics = useFetchMetrics(JSON.parse(localStorage.getItem("TFA")));

  return (
    <div>
      <div className="bg-white rounded-xl uppercase p-8 flex justify-between items-center text-left ">
        <div>
          <h1 className="text-md font-medium text-gray-500">Sommes des paiments</h1>
          <h2 className="text-2xl font-bold">{metrics?.data?.total.toFixed(2)}€</h2>
        </div>
        <div>
          <h1 className="text-md font-medium text-gray-500">Nombre de paiements  </h1>
          <h2 className="text-2xl font-bold">{metrics?.data?.length}</h2>
        </div>
        <div>
          <h1 className="text-md font-medium text-gray-500">Moyenne des paiments</h1>
          <h2 className="text-2xl font-bold">{metrics?.data?.medium.toFixed(2)}€</h2>
        </div>
      </div>
    </div>
  );
};
