function pow(num, degree) {
    let result = num;
    
    if (degree > 1) {
        return result * pow(num, degree - 1);
    }
    return result;
}