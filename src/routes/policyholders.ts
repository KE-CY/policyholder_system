import BasicRoutes from '../abstracts/routes';
import PolicyholderController from "../controllers/policyholders";
import { PolicyholderService } from "../services/policyholderServices";

export default class PolicyholderRoute extends BasicRoutes {
  constructor() {
    super();
    this.setPrefix("policyholders");
    this.setRoutes();
  }

  protected setRoutes() {

    const controller = new PolicyholderController(
      new PolicyholderService(),
    );

    this.router.get('/:code', controller.getOne.bind(controller));

  }

}