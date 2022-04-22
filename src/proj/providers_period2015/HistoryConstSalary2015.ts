﻿import { HistoryConstSalary2014 } from '../providers_period2014/HistoryConstSalary2014';

// WORKING_SHIFT_WEEK      Počet pracovních dnů v týdnu
//
// WORKING_SHIFT_TIME      Počet pracovních hodin denně
//
// MIN_MONTHLY_WAGE        Minimální mzda měsíční
//
// MIN_HOURLY_WAGE         Minimální mzda hodinová (100*Kč)
export class HistoryConstSalary2015 {
  public static readonly VERSION_CODE = 2015;

  public static readonly WORKING_SHIFT_WEEK: number = HistoryConstSalary2014.WORKING_SHIFT_WEEK;
  public static readonly WORKING_SHIFT_TIME: number = HistoryConstSalary2014.WORKING_SHIFT_TIME;
  public static readonly MIN_MONTHLY_WAGE: number = 9200; // 8000
  public static readonly MIN_HOURLY_WAGE: number = 5500; // 4810
}
