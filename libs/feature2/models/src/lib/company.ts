import {User} from "@core/models";

export interface Company {
  id: string;
  name: string;
  address: string;
  phone?: string;
  user?: User;
}
