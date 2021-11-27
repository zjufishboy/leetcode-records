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
  timeCount?: {
    total?: boolean;
    turn?: boolean;
  };
  logResult?: boolean;
}

const optionInit = (options: TestOptions) => {
  if (options.fixRandomSeed !== undefined) {
    console.log('SEED FIX:', options.fixRandomSeed);
    seedRandomHelper.fixSeedRandom(options.fixRandomSeed);
  }
  if (options.timeCount?.total) {
    console.time('All-Case');
  }
};

const optionFinish = (options: TestOptions) => {
  if (options.timeCount?.total) {
    console.timeEnd('All-Case');
  }
};

const optionInitTurn = (options: TestOptions) => {
  if (options.timeCount?.turn) {
    console.time('This-Turn');
  }
};

const optionFinishTurn = (options: TestOptions, result?: any) => {
  if (options.timeCount?.turn) {
    console.timeEnd('This-Turn');
  }
  if (options.logResult) {
    console.log('result:', result);
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
    options && optionInitTurn(options);
    const res = targetFunc(dv.data);
    const isRight = testModuleInfo.valueValidator(res, dv.result);
    if (!isRight) {
      console.log('测试点错误');
      console.log('DATA:', dv.data);
      console.log('RES:', res);
      console.log('Right RES:', dv.result);
      return;
    }
    options && optionFinishTurn(options, res);
  }
  options && optionFinish(options);
  console.log(`Success! All ${testModuleInfo.dataAndValue.length} test modules is Pass!`);
};
