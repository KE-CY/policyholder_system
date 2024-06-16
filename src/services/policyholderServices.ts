
import { AppDataSource } from "../dataSource";
import { Policyholder } from "../entity/policyholder";
const policyholderRepository = AppDataSource.getRepository(Policyholder);

export class PolicyholderService {
  async getOne(code: string) {
    const policyholder = await policyholderRepository.findOne({
      where: {
        code
      },
      relations: ["lCode", "rCode", "introducerCode"],
    });

    if (!policyholder) {
      throw new Error("Policyholder not found");
    }

    const response = {
      code: policyholder.code,
      name: policyholder.name,
      registration_date: policyholder.joinedAt,
      introducer_code: policyholder.introducerCode? policyholder.introducerCode.code : null,
      l: policyholder.lCode,
      r: policyholder.rCode
    };

    return response;
  }

  async getTop(code: string) {
    const policyholder = await policyholderRepository.findOne({
      where: {
        code
      },
      relations: ["introducerCode"],
    });
    if (!policyholder) {
      throw new Error("Policyholder not found");
    }

    if (!policyholder.introducerCode) {
      throw new Error("introducerCode not found");
    }

    const topPolicyholder = await policyholderRepository.findOne({
      where: {
        code: policyholder.introducerCode.code
      },
      relations: ["lCode", "rCode", "introducerCode"],
    });

    if (!topPolicyholder) {
      throw new Error("topPolicyholder not found");
    }
    const response = {
      code: topPolicyholder.code,
      name: topPolicyholder.name,
      registration_date: topPolicyholder.joinedAt,
      introducer_code: topPolicyholder.introducerCode? topPolicyholder.introducerCode.code : null,
      l: topPolicyholder.lCode,
      r: topPolicyholder.rCode
    };
    return response;
  }

}