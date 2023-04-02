import {BillingType} from "../@types";

export const shortBillingName = (billing: BillingType): string => {
    return `${billing === "Monthly" ? "mo" : "yr"}`;
}
