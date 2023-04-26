import clientsData from "../data/clients.json";

function useClients() {
  return {
    data: clientsData,
  };
}

export default useClients;
