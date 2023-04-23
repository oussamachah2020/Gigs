import { create } from "zustand";

export const useBaseUrl = create((set) => ({
  baseUrl: "http://192.168.107.222:6000",
}));
