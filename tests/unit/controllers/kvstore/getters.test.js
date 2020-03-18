const KVStore = require('../../../../services/kvstore/kvstore')
const sinon = require('sinon');
const getters = require('../../../../controllers/kvstore/getters')

describe('Conversation Controller Test', () => {
  let req;
  let res;
  let stubKVStore;

  beforeEach(async () => {

  });

  afterEach(async () => {
    sinon.restore();
  });

  describe('Controller getBy Key Test', async () => {
    it('should return valid call if proper input is passed:', async () => {
      req = {
        params: {
          key: 'key'
        },
      };
      res = {
        status() { },
        send() { }
      };
      stubKVStore = sinon.stub(KVStore, 'GetByKey')
        .callsFake(function (key) {
          return 's1s2d33d'
        });
      stubResponse = sinon.stub(res, 'status').returnsThis();
      sinon.stub(res, 'send').callsFake(()=> {})
      await getters.getByKey(req, res);
      sinon.assert.calledOnce(stubKVStore);
      sinon.assert.calledOnce(stubResponse);
      sinon.assert.calledWith(res.status, 200);
      sinon.assert.calledOnce(res.send);
      res.status.restore();
      res.send.restore();
    });

    it('should return 404 if the key is not found:', async () => {
      req = {
        params: {
          key: 'key'
        },
      };
      res = {
        status() { },
        json() { }
      };
      stubKVStore = sinon.stub(KVStore, 'GetByKey')
      .callsFake(function (key) {
        return ;
      });
      stubResponse = sinon.stub(res, 'status').returnsThis();
      sinon.stub(res, 'json').callsFake(() => {})
      await getters.getByKey(req, res);
      sinon.assert.calledOnce(stubKVStore);
      sinon.assert.calledOnce(stubResponse);
      sinon.assert.calledWith(res.status, 404);
      sinon.assert.calledOnce(res.json);
      res.status.restore();
      res.json.restore();
    });

    it('Error needs to be handled if some error occurs while reading file or while fetching the value:', async () => {
      req = {
        params: {
          key: 'key'
        },
      };
      res = {
        status() { },
        json() { }
      };
      stubKVStore = sinon.stub(KVStore, 'GetByKey')
      .callsFake(function (key) {
        throw new Error('Some error occured');
      });
      stubResponse = sinon.stub(res, 'status').returnsThis();
      sinon.stub(res, 'json').callsFake(() => {})
      await getters.getByKey(req, res);
      sinon.assert.calledOnce(stubKVStore);
      sinon.assert.calledOnce(stubResponse);
      sinon.assert.calledWith(res.status, 404);
      sinon.assert.calledOnce(res.json);
      res.status.restore();
      res.json.restore();
    });
  });
});