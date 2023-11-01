import { SessionKey } from '../../config/session-key';
import { getSession } from '../session/get-session';
import state from '../../store';

export function disableHints() {
  const session = getSession();

  if (!session) {
    return;
  }

  if (!session.showHints) {
    return;
  }

  state.showHints = false;
  session.showHints = false;
  sessionStorage.setItem(SessionKey, JSON.stringify(session));
}
