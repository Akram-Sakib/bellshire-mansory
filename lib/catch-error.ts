// Error handling wrapper
const catchError = (fn: Function) => {
  return async (...args: any[]) => {
    try {
      return await fn(...args);
    } catch (error: any) {
      throw new Error(error?.response?.data?.message || 'Something went wrong');
    }
  };
};

export default catchError;
