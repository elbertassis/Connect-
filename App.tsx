
import React, { useState, useCallback } from 'react';
import type { Screen, Provider, ServiceRequest } from './types';
import { MOCK_PROVIDERS } from './constants';
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import ProviderProfileScreen from './screens/ProviderProfileScreen';
import BookingScreen from './screens/BookingScreen';
import TrackingScreen from './screens/TrackingScreen';
import RatingScreen from './screens/RatingScreen';
import UserProfileScreen from './screens/UserProfileScreen';
import BottomNav from './components/common/BottomNav';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [selectedProvider, setSelectedProvider] = useState<Provider | null>(null);
  const [activeServiceRequest, setActiveServiceRequest] = useState<ServiceRequest | null>(null);
  const [lastCompletedService, setLastCompletedService] = useState<{provider: Provider, request: ServiceRequest} | null>(null);

  const navigate = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  const handleSelectProvider = (provider: Provider) => {
    setSelectedProvider(provider);
    navigate('providerProfile');
  };
  
  const handleHire = (provider: Provider) => {
    setSelectedProvider(provider);
    navigate('booking');
  };

  const handleBookingConfirm = (request: Omit<ServiceRequest, 'id' | 'status'>) => {
    if (selectedProvider) {
      const newRequest: ServiceRequest = {
        ...request,
        id: Date.now().toString(),
        status: 'Aguardando confirmação',
      };
      setActiveServiceRequest(newRequest);
      navigate('tracking');
    }
  };
  
  const handleCompleteService = () => {
    if (activeServiceRequest && selectedProvider) {
        setLastCompletedService({ provider: selectedProvider, request: activeServiceRequest });
        setActiveServiceRequest(null);
        navigate('rating');
    }
  };

  const handleRatingSubmit = () => {
    setLastCompletedService(null);
    setSelectedProvider(null);
    navigate('home');
  };
  
  const handleGoHome = () => {
    setSelectedProvider(null);
    setActiveServiceRequest(null);
    setLastCompletedService(null);
    navigate('home');
  }

  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return <WelcomeScreen onNavigate={() => navigate('home')} />;
      case 'home':
        return <HomeScreen providers={MOCK_PROVIDERS} onSelectProvider={handleSelectProvider} />;
      case 'providerProfile':
        return selectedProvider && <ProviderProfileScreen provider={selectedProvider} onBack={handleGoHome} onHire={handleHire} />;
      case 'booking':
        return selectedProvider && <BookingScreen provider={selectedProvider} onBack={() => navigate('providerProfile')} onConfirm={handleBookingConfirm} />;
      case 'tracking':
        return activeServiceRequest && selectedProvider && <TrackingScreen request={activeServiceRequest} provider={selectedProvider} onComplete={handleCompleteService} />;
      case 'rating':
        return lastCompletedService && <RatingScreen service={lastCompletedService} onSubmit={handleRatingSubmit} />;
      case 'userProfile':
        return <UserProfileScreen />;
      default:
        return <WelcomeScreen onNavigate={() => navigate('home')} />;
    }
  };

  return (
    <div className="h-screen w-screen bg-gray-50 font-sans antialiased">
        <main className="pb-16 h-full overflow-y-auto">
            {renderScreen()}
        </main>
        {currentScreen !== 'welcome' && <BottomNav currentScreen={currentScreen} onNavigate={navigate} />}
    </div>
  );
};

export default App;
