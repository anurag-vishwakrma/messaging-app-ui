import axios from 'axios';
import type { LoginData, SignupData } from '../types/auth';


const API_URL = import.meta.env.API_URL || 'http://localhost:8000';

export const login = async (data: LoginData) => {
  const response = await axios.post(`${API_URL}/auth/login`, data);
  return response.data;
};

export const signup = async (data: SignupData) => {
  const response = await axios.post(`${API_URL}/auth/signup`, data);
  return response.data;
};