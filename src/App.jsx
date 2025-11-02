import Header from "./layouts/Header";
import Main from "./layouts/Main";
import "./App.css";
import { TabsContextProvider } from "./context/TabsConext";

function App() {
  return (
    <TabsContextProvider>
      <div className="bg-[#FFFAF0]">
        <div className="wrapper">
          <Header />

          <Main />
        </div>
      </div>
    </TabsContextProvider>
  );
}

export default App;
