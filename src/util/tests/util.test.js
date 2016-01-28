import assert from 'assert';
import {safeSort} from '../util.js';

describe('safeSort', function() {
    it('should not mutate an input array', () => {
        let input = [5, 9, 2];
        let output = safeSort(input);
        assert.equal(input[0], 5);
        assert.equal(input[1], 9);
        assert.equal(input[2], 2);
    });

    it('should return a sorted array', () => {
        let input = [5, 9, 2];
        let output = safeSort(input);
        assert.equal(output[0], 2);
        assert.equal(output[1], 5);
        assert.equal(output[2], 9);
    });
});