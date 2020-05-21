import { Action } from "redux";
import * as constants from "../constants/appconfig";
import { Config } from "../state/AppConfig";
export interface InitConfig extends Action {
    readonly type: constants.ACTION_INIT_CONFIG;
    readonly config: Config;
}
export declare function initConfig(config: Config): InitConfig;
export declare type AppConfigAction = InitConfig;
