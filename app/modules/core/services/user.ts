export interface IUserService {
    getUserByName(username: string): ng.IPromise<IUser>
}
export interface IUser {
    "login": string,
    "id": number,
    "avatar_url": string,
    "gravatar_id": string,
    "url": string,
    "html_url": string,
    "followers_url": string,
    "following_url": string,
    "gists_url": string,
    "starred_url": string,
    "subscriptions_url": string,
    "organizations_url": string,
    "repos_url": string,
    "events_url": string,
    "received_events_url": string,
    "type": string,
    "site_admin": boolean,
    "name": string,
    "company": string,
    "blog": string,
    "location": string,
    "email": string,
    "hireable": boolean,
    "bio": string,
    "public_repos": number,
    "public_gists": number,
    "followers": number,
    "following": number,
    "created_at": Date,
    "updated_at": Date
}
export class UserService implements IUserService {
    //static $inject = ['$http'];
    constructor(private $http: ng.IHttpService) { }
    getUserByName(username: string): ng.IPromise<IUser> {
       return this.$http.get('http://api.github.com/users/' + username)
            .then((response: ng.IPromiseCallbackArg<IUser>): IUser => {
                return response.data;
            });
    }
}