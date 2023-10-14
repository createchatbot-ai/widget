import { Toggle } from './components/toggle';
import { ChatbotProps } from './models/chatbot-props';
import { initChatbot } from './services/chatbot/init-chatbot';
import { initSession } from './services/session/init-session';

export default function Chatbot({ id }: ChatbotProps) {
  initSession(id);

  document.addEventListener('DOMContentLoaded', async function() {
    await initChatbot(id);

    Toggle();
  });
}
