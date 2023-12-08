import { Source } from '@/shared/domain/entities/sources';

/* eslint-disable no-use-before-define */
interface IBaseCondition {
  type: string;
  key: string;
  name: string;
  description: string;
  source: Source;
}

export interface IBasicCondition extends IBaseCondition {
  type: 'basic';
}

export interface ICombinedCondition extends IBaseCondition {
  type: 'combined';
  components: ICondition[];
}

export type ICondition = IBasicCondition | ICombinedCondition;
