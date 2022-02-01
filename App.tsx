import React from 'react';
import FeedScreen from "./Screens/FeedScreen"
import { QueryClient, QueryClientProvider } from 'react-query'
 
const queryClient = new QueryClient()

function App() {
  return (
  <QueryClientProvider client={queryClient}>
    <FeedScreen/>
</QueryClientProvider>
)
}


export default App;