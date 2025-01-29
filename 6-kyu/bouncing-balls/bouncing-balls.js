function bouncingBall(h,  bounce,  window) {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
        return -1;
    }
​
    let count = 1; // The first fall is always seen
    let currentHeight = h * bounce;
​
    while (currentHeight > window) {
        count += 2; // The ball is seen going up and coming down
        currentHeight *= bounce;
    }
​
    return count;
  }