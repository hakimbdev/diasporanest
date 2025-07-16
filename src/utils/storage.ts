interface AccessData {
  paid: boolean;
  timestamp: number;
  reference: string;
  email: string;
}

const ACCESS_KEY = 'diaspora_nest_access';
const ACCESS_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

export const hasValidAccess = (): boolean => {
  try {
    const stored = localStorage.getItem(ACCESS_KEY);
    if (!stored) {
      console.log('No access data found');
      return false;
    }

    const accessData: AccessData = JSON.parse(stored);
    
    // Check if all required fields are present
    if (!accessData.paid || !accessData.timestamp || !accessData.reference || !accessData.email) {
      console.log('Invalid access data structure');
      return false;
    }

    // Check if payment was made
    if (!accessData.paid) {
      console.log('Payment not marked as paid');
      return false;
    }

    // Check if access hasn't expired (24 hours)
    const now = Date.now();
    const timeSincePurchase = now - accessData.timestamp;
    
    // For production, you might want to make this permanent or have a longer duration
    // For demo purposes, we'll keep it as 24-hour access
    if (timeSincePurchase >= ACCESS_DURATION) {
      console.log('Access has expired');
      localStorage.removeItem(ACCESS_KEY); // Clear expired access
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error checking access:', error);
    return false;
  }
};

export const clearAccess = (): void => {
  localStorage.removeItem(ACCESS_KEY);
};

export const getAccessInfo = (): AccessData | null => {
  try {
    const stored = localStorage.getItem(ACCESS_KEY);
    if (!stored) return null;
    
    return JSON.parse(stored);
  } catch (error) {
    console.error('Error getting access info:', error);
    return null;
  }
};