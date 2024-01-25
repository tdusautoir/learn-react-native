import LoginScreen from "./src/screens/LoginScreen";
import { TermsScreen } from "./src/screens/TermsScreen";
import { StarshipFeedScreen } from "./src/screens/StarshipFeedScreen";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { NetworkProvider } from 'react-native-offline';
import { ScreenContainer } from "@/components/ScreenContainer";

export default function App() {
  return (
    <NetworkProvider>
      <QueryClientProvider client={(new QueryClient())}>
        <ScreenContainer>
          {/* <StarshipFeedScreen /> */}
          <LoginScreen />
          {/* <TermsScreen />/ */}
        </ScreenContainer>
      </QueryClientProvider>
    </NetworkProvider>
  );
}