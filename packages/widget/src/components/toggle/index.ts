import { ComponentIds } from '../../config/component-ids';
import { SessionKey } from '../../config/session-key';
import { toggleChat } from '../../services/chatbot/toggle-chat';
import { getSession } from '../../services/session/get-session';
import { ChatBubble } from '../chat-bubble';
import { ChevronDown } from '../chevron-down';
import styles from './style.css';

export function Toggle() {
  const session = getSession();
  if (!session || !session.chatbot) {
    return;
  }

  const chatbot = session.chatbot;

  function setIsOpen() {
    const session = getSession();
    if (!session) { return; }

    session.isOpen = !session.isOpen;
    session.showHints = false;
    sessionStorage.setItem(SessionKey, JSON.stringify(session));
    toggleChat();
  }

  const toggle = document.createElement('div');
  toggle.classList.add(styles.toggle);
  toggle.id = ComponentIds.Toggle;
  toggle.style.background = chatbot.bgColor;
  toggle.innerHTML = session.isOpen
      ? ChevronDown(chatbot.textColor)
      : ChatBubble(chatbot.textColor);

  toggle.addEventListener('click', () => setIsOpen())

  const body = document.body;
  body.appendChild(toggle);
}
