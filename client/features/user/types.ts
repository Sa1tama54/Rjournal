import { ResponseCreateUser } from '../../utils/api/types';

export interface UserSliceState {
  data: ResponseCreateUser | null;
}
