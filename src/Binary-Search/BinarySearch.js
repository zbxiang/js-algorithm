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

    upper(data, target) {
        let l = 0, r = data.length
        while (l < r) {
            let mid = l + (r - l) / 2
            if (compareTo(data[mid], target) <= 0)
                l = mid + 1
            else 
                r = mid
        }
        return l
    }

    // > target 返回最小值索引
    // == target 返回最大值索引
    ceil(data, target) {
        let u = this.upper(data, target)
        if (u - 1 >= 0 && compareTo(data[u], target) == 0)
            return u - 1
        return u
    }
}