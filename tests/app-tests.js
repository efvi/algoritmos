const chai = require('chai');
const expect = chai.expect;
const app = require('../src/app');

describe('Peak Finding 1D', function() {
    it('O(1)', function() {
        expect(app.peakFindingLinear([1])).to.equal(1);
    });

    it('O(n)', function() {
        expect(app.peakFindingLinear([1, 2, 1, 9, 3, 4])).to.equal(2);
    });

    it('O(n)', function() {
        expect(app.peakFindingLinear([461, 44, 639, 659, 1000, 542, 661, 430, 836, 
            66, 236, 41, 42, 473, 663, 747, 869, 805, 845, 530, 200, 898, 23, 
            599, 327, 12, 234, 748, 778, 389, 207, 192, 515, 400, 509, 640, 39, 
            469, 731, 287, 814, 444, 608, 271, 769, 688, 329, 916, 505, 905, 
            775, 888, 675, 336, 638, 338, 11, 843, 874, 718, 164, 228, 8, 882, 
            789, 361, 73, 458, 654, 397, 411, 462, 855, 652, 904, 687, 744, 517, 
            259, 33, 833, 812, 189, 54, 480, 97, 682, 924, 301, 235, 90, 195, 676, 
            429, 295, 630, 757, 403, 375, 106])).to.equal(1000);
    });

    it('O(log n)', function() {
        let set = [
            461, 44,  639, 659, 1000, 542, 661, 430, 836, 143, 65,
            66,  236, 41,  42,  473,  663, 747, 869, 805, 845, 530, 
            200, 898, 23,  599, 327
        ];

        expect(app.peakFindingLogarithm(set, 0, set.length - 1)).to.match(/^(1000|661|836|236|869|845|898|599)$/);
    });    
});

describe('Insertion Sort', function() {
    it('O(n^2)', function() {
        let set = [
            461, 44, 639, 659, 1000, 542, 661, 430, 836, 143, 
            65, 66, 236, 41, 42, 473, 663, 747, 869, 805, 
            845, 530, 200, 898, 23, 599, 327
        ];

        expect(app.insertionSort(set)).to.deep.equal([23, 41, 42, 44, 65, 66, 143, 200, 236, 327,
                                                430, 461, 473, 530, 542, 599, 639, 659, 661, 663,
                                                747, 805, 836, 845, 869, 898, 1000]);
    });    
});

describe('Binary Search', function() {
    it('O(log n) Exists', function() {
        let list = [23, 41, 42, 44, 65, 66, 143, 200, 236, 327, 
                    430, 461, 473, 530, 542, 599, 639, 659, 661, 663, 
                    747, 805, 836, 845, 869, 898, 1000];

        expect(app.binarySearch(845, list)).to.equal(23);
    });
});