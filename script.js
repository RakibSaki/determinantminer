function Matrix(size, twoDArray) {
    let n = size
    let elements = twoDArray
    this.element = (i, j) => elements[i][j]
    this.size = () => n
}

function Ep(...nums) {
    let swaps = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != i + 1) {
            let swapped = false
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] == nums[j]) {
                    return 0
                }
                if (nums[j] == i + 1) {
                    nums[i], nums[j] = nums[j], nums[i]
                    swaps++
                    swapped = true
                }
            }
            if (!swapped) {
                console.error(`Can not epsilon: ${nums.map(e => e.toString).join(' ')}`)
                return NaN
            }
        }
    }
    return swaps % 2 == 0 ? 1 : -1
}