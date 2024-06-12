import BasicRoutes from '../abstracts/routes';

export default class PolicyholderRoute extends BasicRoutes {
  constructor() {
    super();
    this.setPrefix("policyholders");
    this.setRoutes();
  }

  protected setRoutes() {
    this.router.get('/', (req, res) => {
      return res.status(200).json({
        "msg": "success",
      });
    });

  }

}