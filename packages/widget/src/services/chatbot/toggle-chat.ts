import { getSession } from '../session/get-session';
import { ComponentIds } from '../../config/component-ids';
import { ChevronDown } from '../../components/chevron-down';
import { ChatBubble } from '../../components/chat-bubble';

export function toggleChat() {
  const session = getSession();
  if (!session || !session.chatbot) { return; }

  const toggle = document.getElementById(ComponentIds.Toggle)!

  toggle.innerHTML = session.isOpen
      ? ChevronDown(session.chatbot.textColor)
      : ChatBubble(session.chatbot.textColor);
}
