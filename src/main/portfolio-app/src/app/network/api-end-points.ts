class RestURLEndPoint {
    private static baseUrl = 'rest';
    private subFlow: string;
    constructor(subFlow: string) {
        this.subFlow = subFlow;
    }
    public getRestUrl(endPoint: string) {
        return RestURLEndPoint.baseUrl + this.subFlow + endPoint;
    }
}

export const requestorApi = new RestURLEndPoint('');

export const commonUrls = {
    loginUrl: '/authenticate/login',
    registerUrl: '/authenticate/register'
};
