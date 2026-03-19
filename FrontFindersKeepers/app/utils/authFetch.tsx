import AsyncStorage from '@react-native-async-storage/async-storage';

export default async function authFetch(input: RequestInfo, init?: RequestInit) {
  try {
    const token = await AsyncStorage.getItem("token");

    const headers = {
      ...(init?.headers || {}),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      "Content-Type": "application/json",
    };

    const response = await fetch(input, {
      ...init,
      headers,
    });


    if (response.status === 401) {
      // Gérer la déconnexion, redirection ou autre ici si nécessaire
      throw new Error("Non autorisé (401)");
    }

    return response;
  } catch (error) {
    throw error;
  }
}
