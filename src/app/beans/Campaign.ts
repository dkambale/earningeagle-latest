import { CampaignRule } from "./CampaignRule";

export class Campaign
{
    public id:number;
    public name:String;
    public ruleNumber:number;
    public  value:String;
    public  message:String;
    public rule:CampaignRule;
}