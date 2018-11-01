import { IAddress } from "./IAddress";
import { IOperationHours } from "./IOperationHours";

export interface IPharmacy {
    IsDefault : boolean;
    OperationHours: IOperationHours;
    Address : IAddress;
    StoreNumber: string;
    FaxNumber: string;
    PhoneNumber: string;
    Name : string;
}