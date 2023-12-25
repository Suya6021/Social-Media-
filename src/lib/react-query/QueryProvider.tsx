import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
export const QueryProvider = ({ children }: { children: ReactNode }) => {
  const queryclient = new QueryClient();

  return <QueryClientProvider client={queryclient}>{children}</QueryClientProvider>;
};
