import ExpenceTracker from "./components/ExpenceTracker"
import { ExpeneProvider } from "./context/context"

function App() {
  return (
    <ExpeneProvider>
      <ExpenceTracker />
    </ExpeneProvider>
  );
}

export default App
