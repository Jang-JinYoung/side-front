import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "@public/style.css";
import { Header, GoogleMap, Counter } from "@components/";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Header name="jjy" />
        <GoogleMap />
        <table border={1}>
          <tbody>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>
        <Counter />
      </div>
    </QueryClientProvider>
  );
};

export default App;
