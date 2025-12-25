import { Button } from '@mantine/core';
import { useNavigationStore } from '../store/useNavigationStore';

export const SuccessPage = () => {
  const { goHome } = useNavigationStore();

  return (
    <div className="flex flex-col items-center justify-center text-center h-[70vh]">
      <div className="w-20 h-20 bg-green-500 text-white flex items-center justify-center rounded-full mb-4">
        ✅
      </div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">
        Login Successful!
      </h1>
      <p className="text-gray-600 mb-6">
        Welcome back to your PopX account 🎉
      </p>
      <Button
        onClick={goHome}
        className="px-6 py-2 bg-violet-600 hover:bg-violet-700"
      >
        Go to Home
      </Button>
    </div>
  );
};


