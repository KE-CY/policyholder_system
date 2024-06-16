import { Request, Response, NextFunction } from "express";
import { PolicyholderService } from "../services/policyholderServices"
import * as Joi from 'joi';

class PolicyholderController {
  public readonly service: PolicyholderService;
  constructor(service: PolicyholderService) {
    this.service = service;
  }

  async getOne(req: Request, res: Response, next: NextFunction) {
    const querySchema = Joi.object({
      code: Joi.string().required(),
    }).options({ stripUnknown: true });

    const { code } = await querySchema.validateAsync(req.params);
    const response = await this.service.getOne(code);
    return res.status(200).json(response);
  }

}


export default PolicyholderController;