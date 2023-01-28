const Test = require('../models/Test');

class TestService {
  async getAllTests(limit, page) {
    const tests = await Test.find()
      .sort( '-createdOn' )
      .limit( limit )
      .skip((page - 1) * limit)
    return tests;

  }
  async getTest(id) {
    const test = await Test.findById(id);
    if (!test) throw new Error('Такого теста не существует.');
    return test;
  }

  async createTest(body, title) {
    const test = await Test.create({ body, title });
    await test.save;
    return test;
  }
  async deleteTest(id) {
    const deletedTest = await Test.findByIdAndDelete(id);
    if (!deletedTest) throw new Error('Такого теста не существует.');
    return true;
  }
  async updateTest(id, body, title) {
    const test = await Test.findByIdAndUpdate(
      id,
      {
        body,
        title,
      },
      { new: true },
    );
    if (!test) throw new Error('Такого поста не существует');
    return test;
  }
  async replaceTest(id, body, title) {
    const test = Test.findOneAndReplace(id, {
      body,
      title,
    });
    if (!test) throw Error('Такого поста не существует.');
    return test;
  }
}

module.exports = new TestService();
