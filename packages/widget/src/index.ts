import { Chat } from './components/chat';
import { ChatBubble } from './components/chat-bubble';
import { ChevronDown } from './components/chevron-down';
import { Hints } from './components/hints';
import { Toggle } from './components/toggle';
import { ComponentIds } from './config/component-ids';
import { Events } from './config/events';
import { SessionKey } from './config/session-key';
import { ChatbotProps } from './models/chatbot-props';
import { initChatbot } from './services/chatbot/init-chatbot';
import { getSession } from './services/session/get-session';
import { initSession } from './services/session/init-session';

export default function Chatbot({ id }: ChatbotProps) {
  initSession(id);

  document.addEventListener('DOMContentLoaded', async function() {
    await initChatbot(id);

    Chat();
    Hints();
    Toggle();
  });

  window.addEventListener(Events.Toggled, () => {
    const session = getSession();
    if (!session || !session.chatbot) { return; }
    
    const toggle = document.getElementById(ComponentIds.Toggle)!
    const hints = document.getElementById(ComponentIds.Hints)!;
    const chat = document.getElementById(ComponentIds.Chat)!

    toggle.innerHTML = session.isOpen
      ? ChevronDown(session.chatbot.textColor)
      : ChatBubble(session.chatbot.textColor);

    hints.style.visibility = session.showHints ? 'visible' : 'hidden';
    chat.style.visibility = session.isOpen ? 'visible' : 'hidden';
  });

  window.addEventListener('message', function(event) {  
    if (event.data === Events.Closed) {
      const session = getSession();
      if (!session || !session.chatbot) { return; }

      const toggle = document.getElementById(ComponentIds.Toggle)!
      const chat = document.getElementById(ComponentIds.Chat)!

      toggle.innerHTML = ChatBubble(session.chatbot.textColor);
      chat.style.visibility = 'hidden';

      session.isOpen = false;
      sessionStorage.setItem(SessionKey, JSON.stringify(session));
    }
  });
}
