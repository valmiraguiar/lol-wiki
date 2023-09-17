import { ReactNode } from 'react';

export interface IAppRoute {
  Page: ReactNode;
  path: string;
  name: string;
}
