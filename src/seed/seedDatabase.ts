import { AppDataSource } from "../dataSource";
import { Policyholder } from "../entity/policyholder";

const policyholderRepository = AppDataSource.getRepository(Policyholder);
const data = [
  {
    lCode: 2,
    rCode: 3,
  },
  {
    introducerCode: 1,
    lCode: 4,
    rCode: 5
  },
  {
    introducerCode: 1,
    lCode: 6,
    rCode: 7
  },
  {
    introducerCode: 2,
    lCode: 8,
    rCode: 9
  },
  {
    introducerCode: 2,
    lCode: 10,
    rCode: 11
  },
  {
    introducerCode: 3,
    lCode: 12,
    rCode: 13
  },
  {
    introducerCode: 3,
    lCode: 15
  },
  {
    introducerCode: 4,
  },
  {
    introducerCode: 4,
  },
  {
    introducerCode: 5,
  },
  {
    introducerCode: 5,
  },
  {
    introducerCode: 6,
  },
  {
    introducerCode: 6,
  },
  {
    introducerCode: 7,
  },
  {
    introducerCode: 7,
  }
];

async function initSeedData() {
  // init seed data
  for (let i = 0; i < 15; i++) {
    const policyholder = new Policyholder();
    policyholder.code = String(i + 1).padStart(6, '0');
    policyholder.name = `insurance_${i + 1}`;
    policyholder.joinedAt = new Date(`2024/04/${i + 1}`);



    await policyholderRepository.save(policyholder);
  }


}


async function createRef() {
  for (let i = 1; i <= 20; i++) {
    const policyholderToUpdate = await policyholderRepository.findOne({
      where: { id: i }
    });
    if (!policyholderToUpdate)
      continue;

    const dataIndex = i - 1;
    if (data[dataIndex]) {
      if (data[dataIndex].rCode) {
        const rCode = await policyholderRepository.findOne({
          where: { id: data[dataIndex].rCode }
        })

        if (rCode) {
          policyholderToUpdate.rCode = rCode;
        }
      }

      if (data[dataIndex].lCode) {
        const lCode = await policyholderRepository.findOne({
          where: { id: data[dataIndex].lCode }
        })

        if (lCode) {
          policyholderToUpdate.lCode = lCode;
        }
      }

      if (data[dataIndex].introducerCode) {
        const introducerCode = await policyholderRepository.findOne({
          where: { id: data[dataIndex].introducerCode }
        })

        if (introducerCode) {
          policyholderToUpdate.introducerCode = introducerCode;
        }
      }
      await policyholderRepository.save(policyholderToUpdate);
    }
  }
}


AppDataSource.initialize().then(() => {
  console.log("Data Source has been initialized!");

  // 在這裡調用 seedDatabase 函數
  initSeedData().then(() => {
    console.log('Seed data generated successfully.');
    createRef().then(() => {
      console.log('Seed data updateRef successfully.');
    }).catch(error => {
      console.error('Error updateRef seed data:', error);
    });
  }).catch(error => {
    console.error('Error generating seed data:', error);
  });

}).catch((err) => {
  console.error("Error during Data Source initialization:", err);
});
