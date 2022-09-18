import "./App.css";
import TopNews from "./components/TopNews";
import Currency from "./components/Currency";
import Search from "./components/Input";
import PromoBanner from "./components/PromoBanner";
import WidgetContainer from "./components/WidgetContainer";
import Service from "./components/Service";


function App() {
  return (
    <div className="Wrapper">
      <TopNews />
      <Currency />
      <Service />
      <Search />
      <PromoBanner />
      <WidgetContainer />
    </div>
  );
}

export default App;