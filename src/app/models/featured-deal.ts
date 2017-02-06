import Mercahnt from './merchant';

export class FeaturedDeal {
    id: string;
    clickUrl: string;
    couponCode: string;
    stopDatetime: string;
    assets: Assets;
    merchant: Mercahnt;
}

class Assets {
    shortSummaryText: string;
    text: string;
}




