import Header from './header';

describe('DfE header()', () => {
  describe('Does not throw an error', () => {
    it('if no document exists', () => {
      Header();
    });
  });
});
