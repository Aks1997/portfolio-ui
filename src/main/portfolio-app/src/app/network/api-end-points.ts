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
    registerUrl: '/authenticate/register',
    profileDetailsUrl: '/user/profileDetails',
    uploadUserImageUrl: '/user/upload/image',
    updateUserDetailsUrl: '/user/update/details',
    projectDetailsUrl: '/project',
    uploadProjectImagesUrl: '/project/upload/images',
    uploadProjectDetailsUrl: '/project/upload/details',
    deleteProjectsUrl: '/project/delete',
    deleteProjectImagesUrl: '/project/deleteImages',
    skillSuggestionUrl: '/skill/suggestions'
};
