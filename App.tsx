import LoginScreen from "./src/screens/LoginScreen";
import { TermsScreen } from "./src/screens/TermsScreen";
import { StarshipFeedScreen } from "./src/screens/StarshipFeedScreen";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export default function App() {
  return (
    <QueryClientProvider client={(new QueryClient())}>
      {/* <LoginScreen /> */}
      {/* <TermsScreen />/ */}
      <StarshipFeedScreen />
    </QueryClientProvider>
  );
}