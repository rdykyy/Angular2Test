import Rebate from './rebate';

export class Merchant {
    id: number;
    categories: Category[];
    clickUrl: string;
    description: string;
    disclaimer: string;
    flags: Flags;
    isFeatured: boolean;
    logoUrls: LogoUrls;
    merchantId: number;
    name: string;
    offers: Offer[];
    offersCount: number;
    rebate: Rebate;
    showRebate: boolean;
}

class Category {
    id: string;
    name: string;
}

class Flags {
    instorePickupAvailable: boolean;
    tracksMobile: boolean;
    tracksTablet: boolean;
    tracksThirdParty: boolean;
}

class LogoUrls {
    _88x31: string;
    _120x60: string;
}

class Offer {
    clickUrl: string;
    code: string;
    contentGroups: string;
    description: string;
    disclaimer: string;
    expires: string;
    id: string;
    startDatetime: string;
}

