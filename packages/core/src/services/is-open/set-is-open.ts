import { SessionKey } from '../../config/session-key';
import { getSession } from '../session/get-session';

export function setIsOpen(value: boolean) {
  const session = getSession();

  if (!session) {
    return;
  }

  if (session.isOpen === value) {
    return;
  }

  session.isOpen = value;
  sessionStorage.setItem(SessionKey, JSON.stringify(session));
}
