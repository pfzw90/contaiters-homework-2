import ErrorRepository from '../app';


test('test errorRepository', () => {
  const testRepo = new ErrorRepository();
  testRepo.errorKeys.set(1, 'Error 1');

  expect(testRepo.translate(1)).toBe('Error 1');
  expect(testRepo.translate('')).toBe('Unknown error');
});
