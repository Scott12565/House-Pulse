export const getNextIndex = (currentIndex, length) => {
    if(currentIndex >= length - 1) {
        return 0;
    }
    return currentIndex + 1;

}

export const getPrevIndex = (currentIndex, length) => {
    if(currentIndex <= 0) {
        return length - 1;
    }
    return currentIndex - 1;
}