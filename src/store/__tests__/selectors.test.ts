import { getCounterContainerPropsSelector } from "../selectors"

describe('selectors test', () => {
  describe('getContainerPropSelector tests', () => {
    it('should return zero type', () => {
      expect(getCounterContainerPropsSelector({
        value: 0
      })).toEqual({
        value: 0,
        type: 'zero',
      })
    })
    it('should not return zero type', () => {
      expect(getCounterContainerPropsSelector({
        value: 9
      })).not.toEqual({
        value: 9,
        type: 'zero',
      })
    })

    it('should return lesszero type', () => {
      expect(getCounterContainerPropsSelector({
        value: -4
      })).toEqual({
        value: -4,
        type: 'lesszero',
      })

      expect(getCounterContainerPropsSelector({
        value: -9
      })).toEqual({
        value: -9,
        type: 'lesszero',
      })
    })
    it('should not return lesszero type', () => {
      expect(getCounterContainerPropsSelector({
        value: 9
      })).not.toEqual({
        value: 9,
        type: 'lesszero',
      })
    })

    it('should return lessten type', () => {
      expect(getCounterContainerPropsSelector({
        value: -14
      })).toEqual({
        value: -14,
        type: 'lessten',
      })

      expect(getCounterContainerPropsSelector({
        value: -281
      })).toEqual({
        value: -281,
        type: 'lessten',
      })
    })
    it('should not return lessten type', () => {
      expect(getCounterContainerPropsSelector({
        value: 0
      })).not.toEqual({
        value: 0,
        type: 'lessten',
      })
    })

    it('should return abovezero type', () => {
      expect(getCounterContainerPropsSelector({
        value: 3
      })).toEqual({
        value: 3,
        type: 'abovezero',
      })

      expect(getCounterContainerPropsSelector({
        value: 8
      })).toEqual({
        value: 8,
        type: 'abovezero',
      })
    })
    it('should not return abovezero type', () => {
      expect(getCounterContainerPropsSelector({
        value: 10
      })).not.toEqual({
        value: 10,
        type: 'abovezero',
      })
    })

    it('should return aboveten type', () => {
      expect(getCounterContainerPropsSelector({
        value: 10
      })).toEqual({
        value: 10,
        type: 'aboveten',
      })

      expect(getCounterContainerPropsSelector({
        value: 2281
      })).toEqual({
        value: 2281,
        type: 'aboveten',
      })
    })
    it('should not return aboveten type', () => {
      expect(getCounterContainerPropsSelector({
        value: -10
      })).not.toEqual({
        value: -10,
        type: 'aboveten',
      })
    })
  })
})