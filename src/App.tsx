import { Routes } from 'Routes';
import CustomTheme from 'styles/Theme';
import GlobalStyle from 'styles/GlobalStyle';
import { ThemeProvider } from '@emotion/react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { GlobalPortal } from 'components/GlobalPortal/GlobalPortal.tsx';

export default function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={CustomTheme}>
        <GlobalPortal.Provider>
          <GlobalStyle />
          <Routes />
        </GlobalPortal.Provider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
