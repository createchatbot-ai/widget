import { SessionKey } from '../../config/session-key';
import { getSession } from '../session/get-session';

export async function initChatbot(id: string): Promise<void> {
  const session = getSession();

  if (!session) {
    console.error('No chat session initialized');
    return;
  }

  if (session.chatbot && session.chatbot.id === id) {
    return;
  }

  try {
    const res = await fetch(`https://app.createchatbot.ai/api/v1/public/chatbots/${id}`);
    const chatbot = await res.json();
    session.chatbot = chatbot;
    sessionStorage.setItem(SessionKey, JSON.stringify(session));
  } catch (error) {
    console.error('No chatbot found with this ID');
  }
}
