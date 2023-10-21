import { SessionKey } from '../../../../widget/src/config/session-key';
import { getSession } from '../../../../widget/src/services/session/get-session';

export function closeHints() {
  const session = getSession();

  if (!session) {
    return;
  }

  if (session.showHints === false) {
    return;
  }

  session.showHints = false;
  sessionStorage.setItem(SessionKey, JSON.stringify(session));
}
