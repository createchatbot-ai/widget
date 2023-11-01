import { SessionKey } from '../../config/session-key';
import { Session } from '../../models/session';
import { getSession } from './get-session';

export function initSession(chatbotId: string) {
  const session = getSession();

  if (session && session.chatbot && session.chatbot.id === chatbotId) {
    return;
  }

  const sessionObj = {
    id: window.crypto.randomUUID(),
    isOpen: false,
    showHints: true,
    messages: [],
  } as Session;

  sessionStorage.setItem(SessionKey, JSON.stringify(sessionObj));
}
