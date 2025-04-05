/** @format */

import { httpBase } from "./http";

export function sendDeploymentData(data: any) {
  return httpBase.post("/users", data);
}
export function editService(id: string, data: any) {
  return httpBase.put(`/users/${id}`, data);
}
export function deleteService(id: string) {
  return httpBase.delete(`/users/${id}`);
}
