import {User} from "@core/models";

export const isUserDirector = (user: User | undefined): boolean => user?.role === 'director';
