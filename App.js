// App.tsx

import React from 'react';
import LoginScreen from './Screens/LoginScreen';
import TermsScreen from "./Screens/TermsScreen";
import FeedScreen from "./Screens/FeedScreen"
import { QueryClient, QueryClientProvider } from 'react-query'
 
const queryClient = new QueryClient()

function App() {
  return (<QueryClientProvider client={queryClient}>
    <FeedScreen></FeedScreen>
</QueryClientProvider>)
}


export default App;