import MainHeader from "~/components/headers/mainHeader";
import SkipMetaPage from "~/pages/skipMetaPage/skipMetaPage";

function App() {
  return (
    <>
      < MainHeader currentStep={3} totalSteps={6} stepTitle="Select a Skip" />
      < SkipMetaPage />
    </>
  );
}

export default App;
