import AboutMe from "./components/AboutMe";
import MainLayout from "./components/layouts/MainLayout";
import TimeLine from "./components/TimeLine";
import Header from "./components/ui/Header";
import Slider from "./components/ui/Slider";

function App() {
  return (
    <>
      <MainLayout>
        <Header />
        <Slider />
        <AboutMe />
        <TimeLine />
      </MainLayout>
    </>
  );
}

export default App;
