import DS from 'ember-data';
import ENV from "../config/environment";

export default DS.RESTAdapter.extend({
  host: ENV.APP.apiHost || "",
  namespace: "explorer/api"
});
