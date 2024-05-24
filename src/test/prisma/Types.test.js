const { expect } = require('chai');
const sinon = require('sinon');
const { PrismaClient } = require('@prisma/client');
const { Types } = require('../../models/Types')
const prisma = new PrismaClient();

describe('Types', () => {
  afterEach(() => {
    sinon.restore();
  });

  describe('#getAll', () => {
    it('should call the findMany method', async () => {
      const findManyStub = sinon.stub(prisma.missionType, 'findMany').returns([]);
      await Types.getAll();
      expect(findManyStub.calledOnce).to.be.true;
    });
  });

  describe('#getById', () => {
    it('should call the findUnique method with id', async () => {
      const findUniqueStub = sinon.stub(prisma.missionType, 'findUnique').returns({});
      const id = 'yourTestId';
      await Types.getById(id);
      expect(findUniqueStub.calledOnce).to.be.true;
    });
  });

  describe('#create', () => {
    it('should call the create method with typeData', async () => {
      const createStub = sinon.stub(prisma.missionType, 'create').returns({});
      const typeData = 'yourTypeData';
      await Types.create(typeData);
      expect(createStub.calledOnce).to.be.true;
    });
  });

  describe('#update', () => {
    it('should call the update method with id and typeData', async () => {
      const updateStub = sinon.stub(prisma.missionType, 'update').returns({});
      const id = 'yourTestId';
      const typeData = 'yourTypeData';
      await Types.update(id, typeData);
      expect(updateStub.calledOnce).to.be.true;
    });
  });

  describe('#remove', () => {
    it('should call the delete method with id', async () => {
      const deleteStub = sinon.stub(prisma.missionType, 'delete').returns({});
      const id = 'yourTestId';
      await Types.remove(id);
      expect(deleteStub.calledOnce).to.be.true;
    });
  });
});