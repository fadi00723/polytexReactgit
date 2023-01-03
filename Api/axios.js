import {View, Text} from 'react-native';
import React from 'react';
import axios from 'axios';
export const instance = axios.create({
  baseURL: 'https://l1.gotomy.dev/shorex-api/api/v1/',
});
