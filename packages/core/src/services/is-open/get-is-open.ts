import { getSession } from '../session/get-session';

export function getIsOpen(): boolean {
  const session = getSession();

  if (!session) {
    return false;
  }

  return session.isOpen;
}
