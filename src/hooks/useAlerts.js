import { useState } from "react";
import { alertsRecordList } from "../pages/Alerts/alertsMockData";

export function useAlerts() {
  const [alerts, setAlerts] = useState(alertsRecordList);
  const [loading] = useState(false);
  const [error] = useState(null);

  function deleteAlert(id) {
    setAlerts((prev) => prev.filter((alert) => alert.id !== id));
  }

  function addAlert(alert) {
    setAlerts((prev) => [...prev, alert]);
  }

  return { alerts, loading, error, deleteAlert, addAlert };
}
