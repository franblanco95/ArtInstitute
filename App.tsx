import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import TabNavigation from './src/navigation/TabNavigation';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <TabNavigation />
    </QueryClientProvider>
  );
}

export default App;
