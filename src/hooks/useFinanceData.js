import { useEffect, useState } from 'react';
import { fetchExpenses, fetchIncomes, fetchInvestments } from '../api';

const useFinanceData = () => {
    const [expenses, setExpenses] = useState([]);
    const [incomes, setIncomes] = useState([]);
    const [investments, setInvestments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const [expensesResponse, incomesResponse, investmentsResponse] = await Promise.all([
                    fetchExpenses(),
                    fetchIncomes(),
                    fetchInvestments(),
                ]);

                setExpenses(expensesResponse.data);
                setIncomes(incomesResponse.data);
                setInvestments(investmentsResponse.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, []);

    return { expenses, incomes, investments, loading, error };
};

export default useFinanceData;
