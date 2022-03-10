import { ChatEngine } from "react-chat-engine";

import "./App.css";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";
const App = () => {
  if (!localStorage.getItem("userName")) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID="fb2f150c-ea44-420d-b9bf-836f1929965a"
      userName={localStorage.getItem("userName")}
      userSecret={localStorage.getItem("userSecret")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
