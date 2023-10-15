import { ComponentIds } from '../../config/component-ids';
import { SessionKey } from '../../config/session-key';
import { getSession } from '../../services/session/get-session';
import { XMark } from '../x-mark';
import styles from './style.css';

export function Hints() {
  const session = getSession();
  if (!session || !session.chatbot) {
    return;
  }

  function closeHint() {
    const hints = document.getElementById(ComponentIds.Hints);
    if (hints) {
      hints.style.visibility = 'hidden';
    }

    if (session) {
      session.showHints = false;
      sessionStorage.setItem(SessionKey, JSON.stringify(session));
    }    
  }

  const hints = document.createElement('div');
  hints.id = ComponentIds.Hints;
  hints.classList.add(styles.hints);
  hints.style.visibility = session.showHints ? 'visible' : 'hidden';

  const hintsContainer = document.createElement('div');
  hintsContainer.classList.add(styles.hintsContainer);
  hints.appendChild(hintsContainer);

  const close = document.createElement('div');
  close.classList.add(styles.close);
  close.innerHTML = XMark('#2D3748', '15px');
  close.addEventListener('click', () => closeHint())
  hintsContainer.appendChild(close);

  session.chatbot.messages.map((message) => {
    const hint = document.createElement('div');
    hint.classList.add(styles.hint);
    hint.innerText = message;
    hintsContainer.appendChild(hint);
  });

  const body = document.body;
  body.appendChild(hints);
}
