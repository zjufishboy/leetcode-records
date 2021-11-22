import { seedRandomHelper } from './utils';

interface TestModuleItem<DataType = any, ResType = any> {
  data: DataType;
  result: ResType;
}

export interface TestModuleInfo<DataType = any, ResType = any> {
  dataAndValue: TestModuleItem<DataType, ResType>[];
  valueValidator: (res: ResType, result: ResType) => boolean;
}

export type ITargetFunc<DataType = any, ResType = any> = (data: DataType) => ResType;

interface TestOptions {
  fixRandomSeed?: number;
}

const optionInit = (options: TestOptions) => {
  if (options.fixRandomSeed !== undefined) {
    console.log('SEED FIX:', options.fixRandomSeed);
    seedRandomHelper.fixSeedRandom(options.fixRandomSeed);
  }
};

export const test = <DataType = any, ResType = any>(
  testModuleInfo: TestModuleInfo<DataType, ResType>,
  targetFunc: ITargetFunc<DataType, ResType>,
  options?: TestOptions
) => {
  // 初始化环境函数，比如固定随机数种子
  options && optionInit(options);
  for (const dv of testModuleInfo.dataAndValue) {
    const res = targetFunc(dv.data);
    const isRight = testModuleInfo.valueValidator(res, dv.result);
    if (!isRight) {
      console.log('测试点错误');
      console.log('DATA:', dv.data);
      console.log('RES:', res);
      console.log('Right RES:', dv.result);
      return;
    }
  }
  console.log(`Success! All ${testModuleInfo.dataAndValue.length} test modules is Pass!`);
};
