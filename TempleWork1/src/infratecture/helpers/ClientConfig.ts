export enum Environment { DEV, PRD, TST, UAT }

export class ClientConfig {
    public baseUrl: string;
    public rxBaseUrl: string;
    public healthPlanBase: string;
    public healthPlanAPIsBase: string;
    public eVisitBaseUrl: string;
    public registrationUrl: string;
}

const DEV: ClientConfig = {
    baseUrl: "https://api.myjson.com/bins/",
    healthPlanBase: "https://api.myjson.com/bins/",
    rxBaseUrl: "https://api.myjson.com/bins/",
    healthPlanAPIsBase: "https://api.myjson.com/bins/",
    eVisitBaseUrl: "https://api.myjson.com/bins/",
    registrationUrl: "https://api.myjson.com/bins/",
};

const PRD: ClientConfig = {
    baseUrl: "https://wrong.com",
    healthPlanBase: "https://wrong.com",
    rxBaseUrl: "https://wrong.com",
    healthPlanAPIsBase: "https://wrong.com",
    eVisitBaseUrl: "https://wrong.com",
    registrationUrl: "https://wrong.com",
};

const TST: ClientConfig = {
    baseUrl: "https://wrong.com",
    healthPlanBase: "https://wrong.com",
    rxBaseUrl: "https://wrong.com",
    healthPlanAPIsBase: "https://wrong.com",
    eVisitBaseUrl: "https://wrong.com",
    registrationUrl: "https://wrong.com",
};

const UAT: ClientConfig = {
    baseUrl: "https://wrong.com",
    healthPlanBase: "https://wrong.com",
    rxBaseUrl: "https://wrong.com",
    healthPlanAPIsBase: "https://wrong.com",
    eVisitBaseUrl: "https://wrong.com",
    registrationUrl: "https://wrong.com",
};

export const clientConfig = {
    environment: Environment.PRD,

    // initWith: (props: IBaseProps) => {
    //     clientConfig.environment = Environment[props.environment];
    // },

    get current(): ClientConfig {
        switch (clientConfig.environment) {
            case Environment.TST:
                return TST;
            case Environment.DEV:
                return DEV;
            case Environment.UAT:
            case Environment.PRD:
            default:
                return PRD;
        }
    }
};
