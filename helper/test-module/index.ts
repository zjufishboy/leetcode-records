interface TestModuleItem<DataType = any, ResType = any> {
  data: DataType;
  result: ResType;
}

export interface TestModuleInfo<DataType = any, ResType = any> {
  dataAndValue: TestModuleItem<DataType, ResType>[];
  valueValidator: (res: ResType, result: ResType) => boolean;
}

export type ITargetFunc<DataType = any, ResType = any> = (data: DataType) => ResType;

export const test = <DataType = any, ResType = any>(
  testModuleInfo: TestModuleInfo<DataType, ResType>,
  targetFunc: ITargetFunc<DataType, ResType>
) => {
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
