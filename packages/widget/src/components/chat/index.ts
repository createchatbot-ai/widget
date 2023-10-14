import { ComponentIds } from '../../config/component-ids';
import { getSession } from '../../services/session/get-session';
import styles from './style.css';

export function Chat() {
  const session = getSession();
  if (!session || !session.chatbot) {
    return;
  }

  const chat = document.createElement('div');
  chat.id = ComponentIds.Chat;
  chat.classList.add(styles.chat);
  chat.style.visibility = session.isOpen ? 'visible' : 'hidden';

  chat.innerText = 'Chat comes here...';

  const body = document.body;
  body.appendChild(chat);
}
