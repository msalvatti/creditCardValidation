import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

export const validateCard = async (cardNumber: string): Promise<{ isValid: boolean }> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/validate`, {
      params: {
        cardNumber,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error validating card:', error);
    throw error;
  }
};
