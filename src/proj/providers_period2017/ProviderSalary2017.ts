﻿import { VersionId } from '../service_types/versionid';
import { IPeriod } from '../service_types/period';
import { ProviderBase } from '../providers/ProviderBase';
import { IProviderSalary } from '../providers/IProviderSalary';
import { IPropsSalary } from '../service_interfaces/IPropsSalary';
import { PropsSalary } from '../props/PropsSalary';
import { HistoryConstSalary2017 } from './HistoryConstSalary2017';

export class ProviderSalary2017 extends ProviderBase implements IProviderSalary {
  constructor() {
    super(VersionId.get(HistoryConstSalary2017.VERSION_CODE));
  }
  GetProps(period: IPeriod): IPropsSalary {
    return new PropsSalary(
      this.Version(),
      this.WorkingShiftWeek(period),
      this.WorkingShiftTime(period),
      this.MinMonthlyWage(period),
      this.MinHourlyWage(period),
    );
  }

  WorkingShiftWeek(period: IPeriod): number {
    return HistoryConstSalary2017.WORKING_SHIFT_WEEK;
  }

  WorkingShiftTime(period: IPeriod): number {
    return HistoryConstSalary2017.WORKING_SHIFT_TIME;
  }

  MinMonthlyWage(period: IPeriod): number {
    return HistoryConstSalary2017.MIN_MONTHLY_WAGE;
  }

  MinHourlyWage(period: IPeriod): number {
    return HistoryConstSalary2017.MIN_HOURLY_WAGE;
  }
}
