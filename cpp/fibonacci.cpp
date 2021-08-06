int factorialize(int num) {
  int result = num;
  if( num == 0 || num == 1 ) return 1;
  while ( num > 1) {
    num--;
    result *= num;
  }
  return result;
}

int factorializeFib(int num) {
  int a = 1, b = 0, temp = 1;

  while (num >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    factorialize(b);
    num--;
  }

  return b;
}

