import { ChatBubble } from './components/chat-bubble';
import { ChevronDown } from './components/chevron-down';
import { Hints } from './components/hints';
import { Toggle } from './components/toggle';
import { ComponentIds } from './config/component-ids';
import { Events } from './config/events';
import { ChatbotProps } from './models/chatbot-props';
import { initChatbot } from './services/chatbot/init-chatbot';
import { getSession } from './services/session/get-session';
import { initSession } from './services/session/init-session';

export default function Chatbot({ id }: ChatbotProps) {
  initSession(id);

  document.addEventListener('DOMContentLoaded', async function() {
    await initChatbot(id);

    Hints();
    Toggle();
  });

  window.addEventListener(Events.Toggled, () => {
    const session = getSession();
    if (!session || !session.chatbot) { return; }
    
    const toggle = document.getElementById(ComponentIds.Toggle)!
    const hints = document.getElementById(ComponentIds.Hints)!;

    toggle.innerHTML = session.isOpen
      ? ChevronDown(session.chatbot.textColor)
      : ChatBubble(session.chatbot.textColor);

    hints.style.visibility = session.showHints ? 'visible' : 'hidden';
  });
}
