import BasicRoutes from '../abstracts/routes';
import PolicyholderRoute from './policyholders';

const router: Array<BasicRoutes> = [
    new PolicyholderRoute(),
]

export default router;