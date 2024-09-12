import Route from '@ember/routing/route';

export default class SearchRoute extends Route {
    model(params) {
        console.log(params);
    }

}
