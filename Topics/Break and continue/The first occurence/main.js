function find5(numbers) {
    // change it
    for (let i in numbers) {
        switch (numbers[i]) {
            case 5:
                return i;
            default:
                break;
        }
    }
    return -1;
}
