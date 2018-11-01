import { UserProfileBussiness } from "../infratecture/bussiness/UserProfileBussiness";

export class HomeViewModel {

    async loadData()
    {
        var bussiness = new UserProfileBussiness();
        var data  = await bussiness.getAllPharmacyList();
        var name  = data[0].Name;           
        
    }
}