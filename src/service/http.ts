/** @format */

import axios from "axios";

const baseUrl = `https://reqres.in/api/`;

const httpBase = axios.create({
  baseURL: baseUrl,
});

export { httpBase };
