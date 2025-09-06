
const API_BASE_URL = `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/api`

export const userDetails = async () => {
  const response = await fetch(`${API_BASE_URL}/user-details`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });

  const data = await response.json();

  if (data.status != "success") {
    throw new Error(data.error);
  }
  
  return data;
};

export const verifyToken = async () => {
  const response = await fetch(`${API_BASE_URL}/verify-token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });

  const data = await response.json();

  if (data.status != "success") {
    await logout()
    throw new Error(data.error);
  }
  
  return data;
};

export const logout = async () => {
  const response = await fetch(`${API_BASE_URL}/logout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (data.status != "success") {
    throw new Error(data.error);
  }
  
  return data;
};
