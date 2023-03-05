import { CounterSliceReducer, InitialCounter, plus, minus } from "../CounterSlice";

describe('CounterSlice tests', () => {
  describe('Plus test', () => {
    it('Should be 1', () => {
      expect(CounterSliceReducer(InitialCounter, plus())).toEqual({
        value: 1
      })
    })
    it('Should be 6', () => {
      expect(CounterSliceReducer({value: 5}, plus())).toEqual({
        value: 6
      })
    })
  })
  
  describe('Minus test', () => {
    it('Should be -1', () => {
      expect(CounterSliceReducer(InitialCounter, minus())).toEqual({
        value: -1
      })
    })
    it('Should be -9', () => {
      expect(CounterSliceReducer({value: -8}, minus())).toEqual({
        value: -9
      })
    })
  })
})
