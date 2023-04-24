import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";

export const useBearStore = create((set) => ({
  baseUrl: "http://192.168.107.222:6000",
}));

interface AuthStore {
  token: string;
  setToken: (token: string) => void;
  getToken: () => Promise<string>;
}

const useAuthStore = create<AuthStore>((set) => ({
  token: "",
  setToken: async (token: string) => {
    try {
      await AsyncStorage.setItem("userToken", token);
      set(() => ({ token }));
    } catch (error) {
      console.log(error);
    }
  },
  getToken: async () => {
    try {
      const token = await AsyncStorage.getItem("userToken");
      if (token !== null) {
        set(() => ({ token }));
        return token;
      }
      return "";
    } catch (error) {
      console.log(error);
      return "";
    }
  },
}));

export default useAuthStore;
