import { IDisplay } from "./IDisplay";
import { IOperationTiming } from "./IOperationTiming";

export interface IOperationHours {
    IsClosed : boolean;
    IsHoliday: boolean;
    Display : IDisplay;
    OperationTimings: IOperationTiming[];
}

