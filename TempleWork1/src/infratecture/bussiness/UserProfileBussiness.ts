import { UserProfileService } from "../server_repo/services/UserProfileService";
import { IPharmacy } from "../../models/IPharmacy";
import { IUserProfileService } from "../contrects/services/IUserProfileService";

export class UserProfileBussiness{

   async getAllPharmacyList(): Promise<IPharmacy[]>{

      var userProfileService : IUserProfileService = new UserProfileService();
      var data =  await userProfileService.getAllPharmacy("");
      return data;
    }

}