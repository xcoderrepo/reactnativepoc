import { IPharmacy } from "../../../models/IPharmacy";
import { getJSON } from "../../../utills/RequestUtils";
import { IUserProfileService } from "../../contrects/services/IUserProfileService";

export class UserProfileService implements IUserProfileService
{
    async getAllPharmacy(userName: string): Promise<IPharmacy[]> {
        const url = "https://api.myjson.com/bins/1c3pkp";
        try {
            var data = await getJSON(url);
            return data;
        } catch (error) {
            throw error;
        }
    }
}