function Matrix(size, twoDArray) {
    let n = size
    let elements = twoDArray
    this.element = (i, j) => elements[i][j]
    this.size = () => n
    this.determinant = () => {
        let d = 0
        let permut1 = []
        for (let i = 0; i < n; i++) {
            permut1.push(i + 1)
        }
        let permuts = ChildPermutations(0, permut1)
        
        for (let permut of permuts) {
            // the expression inside sum
        }
    }
}

function ChildPermutations(lock, permut) {
    if (lock == permut.length - 1) {
        return [permut]
    }
    let permuts = []
    for (let i = 0; i < permut.length - lock; i++) {
        let newPermut = permut.slice()
        let tmp = newPermut[lock] + 0
        newPermut[lock] = newPermut[lock + i]
        newPermut[lock + i] = tmp
        let newPermuts = ChildPermutations(lock + 1, newPermut)
        for (let j = 0; j < newPermuts.length; j++) {
            permuts.push(newPermuts[j])
        }
    }
    return permuts
}

console.log(ChildPermutations(0, [1, 2, 3, 4]))

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