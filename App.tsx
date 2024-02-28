import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { NetworkProvider } from 'react-native-offline';
// import { ScreenContainer } from "@/components/ScreenContainer/ScreenContainer";
import Constants from 'expo-constants';
import Navigator from "@/navigation/Navigator";
import { AuthContextProvider } from '@/context/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <NetworkProvider>
        <QueryClientProvider client={(new QueryClient())}>
          <Navigator />
        </QueryClientProvider>
      </NetworkProvider>
    </AuthContextProvider>
  );
}

let AppEntryPoint = App;

if (Constants && Constants.expoConfig && Constants.expoConfig.extra && Constants.expoConfig.extra.storybookEnabled === 'true') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  AppEntryPoint = require('./.storybook').default;
}

export default AppEntryPoint;