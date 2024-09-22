import axios from 'axios';

const api = axios.create({
    baseURL: 'https://personal-finance-api-wjui.onrender.com',
});

export const fetchExpenses = () => api.get('/despesas');
export const fetchIncomes = () => api.get('/rendas');
export const fetchInvestments = () => api.get('/investimentos');