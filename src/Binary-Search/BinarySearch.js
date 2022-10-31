import { compareTo } from '../utils/index'

class BinarySearch {
    search(data, target) {
        return this._search(data, 0, data.length - 1, target)
    }

    _search(data, l, r, target) {
        if (l > r) return -1
        let mid = l + (r - l) / 2
        if (compareTo(data[mid], target) === 0)
            return mid
        if (compareTo(data[mid], target) < 0)
            return this._search(data, mid + 1, r, target)
        return this._search(data, l, mid - 1, target)
    }
}