import { useNavigationStore } from './store/useNavigationStore';
import { WelcomePage } from './pages/WelcomePage';
import { SignInPage } from './pages/SignInPage';
import { CreateAccountPage } from './pages/CreateAccountPage';
import { AccountSettingsPage } from './pages/AccountSettingsPage';
import { SuccessPage } from './pages/SuccessPage';
import { Navigation } from './components/Navigation';

function App() {
  const { page } = useNavigationStore();

  const renderPage = () => {
    switch (page) {
      case 1:
        return <WelcomePage />;
      case 2:
        return <SignInPage />;
      case 3:
        return <CreateAccountPage />;
      case 4:
        return <AccountSettingsPage />;
      case 5:
        return <SuccessPage />;
      default:
        return <WelcomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FEEAC9] gap-6">
      <div className="w-[370px] min-h-[80vh] bg-gray-50 shadow-md rounded-lg p-6 flex flex-col justify-start">
        {renderPage()}
      </div>
      <Navigation />
    </div>
  );
}

export default App;
