import { sign } from '../../utils/jwt';

export const login = (email: string) => sign(email);