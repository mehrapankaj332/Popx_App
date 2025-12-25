import { Button } from '@mantine/core';
import { useNavigationStore } from '../store/useNavigationStore';

export const WelcomePage = () => {
  const { goToPage } = useNavigationStore();

  return (
    <div className="relative flex flex-col justify-between h-full">
      <div className="flex justify-center mt-8">
        <div className="w-7 h-7 flex items-center justify-center rounded-full bg-yellow-500 hover:bg-blue-500 text-white text-xs font-semibold cursor-pointer">
          1
        </div>
      </div>
      <div className="flex flex-col items-start justify-end text-center h-[70vh]">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome to PopX
        </h1>
        <p className="text-gray-500 text-lg mb-6 text-left">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, perferendis.
        </p>
        <div className="space-y-3 w-full">
          <Button
            onClick={() => goToPage(3)}
            fullWidth
            size="lg"
            className="bg-violet-600 hover:bg-violet-700"
          >
            Create Account
          </Button>
          <Button
            onClick={() => goToPage(2)}
            fullWidth
            size="lg"
            variant="light"
            className="bg-purple-200 text-purple-800 hover:bg-purple-300"
          >
            Already Registered? Login
          </Button>
        </div>
      </div>
    </div>
  );
};


