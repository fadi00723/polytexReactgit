import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

class OwnStorage {
  constructor() {}
  SaveLoginPref = async (token, username, password) => {
    try {
      await AsyncStorage.setItem("api_token_Warehouse", token);
      await AsyncStorage.setItem("username_Warehouse", username);
      await AsyncStorage.setItem("password_Warehouse", password);
      console.log("token saved");
    } catch (error) {
      console.log("error", error);
    }
  };
  ////////////////////////////////////////////////////////////
  setvalue = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
      console.log("item saved");
      return true;
    } catch (error) {
      console.log("error:", error);
      return error;
    }
  };
  getvalue = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      console.log("token_ingerlogin:", value);
      if (value !== null) {
        return value;
      } else {
        return undefined;
      }
    } catch (e) {
      console.log("error", e);
      return null;
    }
  };
  removeItem = async (key, value) => {
    try {
      AsyncStorage.clear();
    } catch (error) {}
  };
  UpdateToken = async (token) => {
    try {
      await AsyncStorage.setItem("api_token_Warehouse", token);
      console.log("Token Updated");
    } catch (error) {
      console.log("error", error);
    }
  };
  UpdateUserID = async (userID) => {
    try {
      await AsyncStorage.setItem("user_id_warehouse", userID.toString());
      console.log("user_id Updated");
    } catch (error) {
      console.log("error", error);
    }
  };
  GetLoginPref = async () => {
    try {
      const token = await AsyncStorage.getItem("api_token_Warehouse");
      console.log("token_ingerlogin:", token);
      if (token !== null) {
        return token;
      } else {
        return undefined;
      }
    } catch (e) {
      console.log("error", e);
      return null;
    }
  };
  getusername = async () => {
    try {
      const username_Warehouse = await AsyncStorage.getItem(
        "username_Warehouse"
      );
      if (username_Warehouse !== null) {
        return username_Warehouse;
      } else {
        return undefined;
      }
    } catch (error) {
      return null;
    }
  };
  getpassword = async () => {
    try {
      const password = await AsyncStorage.getItem("password_Warehouse");
      if (password !== null) {
        return password;
      } else {
        return undefined;
      }
    } catch (error) {
      return null;
    }
  };
  Logout = async () => {
    try {
      await AsyncStorage.removeItem("api_token_Warehouse");
      await AsyncStorage.removeItem("username_Warehouse");
      await AsyncStorage.removeItem("password_Warehouse");
      console.log("logout");
      return true;
    } catch (e) {
      console.log("error", e);
      return false;
    }
  };
}
export default OwnStorage;
