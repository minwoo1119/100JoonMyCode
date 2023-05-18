#include <stdio.h>

int main(void) {
	int n1, n2;
	do {
		scanf("%d %d", &n1, &n2);
		if (n1 > n2) {
			printf("Yes\n");
		} else if ((n1 <= n2) && (n1 != 0 && n2 != 0)) {
			printf("No\n");
		}
	} while (n1 != 0 && n2 != 0);

	return 0;
}
