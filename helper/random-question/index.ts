import { IQuestionType, list } from './list';

// 随机选一道题
const getRandomQuestion = (type = IQuestionType.Easy) => {
  const questionFiltered = list.filter((q) => q.type == type);
  if (questionFiltered.length === 0) {
    console.log('没有这个类型的题目');
    return;
  }
  const index = Math.floor(Math.random() * questionFiltered.length);
  console.log('选中了：', questionFiltered[index].id);
};

getRandomQuestion(IQuestionType.Hard);
