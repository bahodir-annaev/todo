import { Constants } from '../constants';

export class Task {
  constructor(
    public description = '',
    public priority = Constants.PRIORITY_NORMAL,
    public complete = false,
  ) {}
}
