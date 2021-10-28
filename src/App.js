import "./App.css";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./Components/ChatFeed";
function App() {
  return (
    <ChatEngine
      height="100vh"
      projectID="d3340db2-d939-4e5f-ad47-98efd4e874f2"
      userName="chouaib"
      userSecret="Ultras49"
      renderChatFeed={(chatProps) => <ChatFeed {...chatProps} />}
    />
  );
}

export default App;
