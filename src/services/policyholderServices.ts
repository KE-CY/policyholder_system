
import { AppDataSource } from "../dataSource";
import { Policyholder } from "../entity/policyholder";
const policyholderRepository = AppDataSource.getRepository(Policyholder);

export class PolicyholderService {
  async getOne(code: string) {
    const policyholder = await policyholderRepository.findOne({
      where: {
        code
      },
      relations: ["lCode", "rCode"]
    });
    if (!policyholder) {
      throw new Error("Policyholder not found");
    }

    const response = {
      code: policyholder.code,
      name: policyholder.name,
      registration_date: policyholder.joinedAt,
      introducer_code: policyholder.code,
      l: policyholder.lCode.map(left => ({
        code: left.code,
        name: left.name,
        registration_date: left.joinedAt,
        introducer_code: left.introducerCode
      })),
      r: policyholder.rCode.map(right => ({
        code: right.code,
        name: right.name,
        registration_date: right.joinedAt,
        introducer_code: right.introducerCode
      }))
    };

    return response;
  }


}