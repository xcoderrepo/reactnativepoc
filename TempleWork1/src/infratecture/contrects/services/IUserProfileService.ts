import { IPharmacy } from "../../../models/IPharmacy";

export interface IUserProfileService {
    getAllPharmacy(url: string): Promise<IPharmacy[]>;
}